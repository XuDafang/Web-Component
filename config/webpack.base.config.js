const path = require('path');
const webpack = require('webpack');

const isdev = process.env.NODE_ENV === 'development'; // 判断是否处于开发环境

const ROOT_PATH = path.resolve(__dirname, '../');
const PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');

const APP_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = path.join(ROOT_PATH, 'build');
const NODE_PATH = path.join(ROOT_PATH, 'node_modules');
const IMG_PATH = path.join(PUBLIC_PATH, 'img');
const STYLE_PATH = path.resolve(PUBLIC_PATH, 'style');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(STYLE_PATH);

/* Package hot-load-module only in development */
var entry = isdev ? [
    path.resolve(APP_PATH, 'app.js')
] : [
    path.resolve(APP_PATH, 'app.js'),
];

var plugins = isdev ? [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
] : [
    new ExtractTextPlugin("style-[contenthash:10].css")
]

module.exports = {
    devtool: 'source-map',  // only for development
    devServer: {
        contentBase: ROOT_PATH,
        port: 8080,
        compress: true,
        inline: true,
        proxy: {
            '/api': {
                target: 'http://bescene.staging.fooyo.sg/',
                changeOrigin: true,
                secure: false,
            }
        }
    },
    entry: entry,
    output: {
        path: BUILD_PATH,
        publicPath: "http://localhost:8080/build",  // output to CDN
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'api$': path.resolve(APP_PATH, 'fetch/api.js'), // http api
            'util$': path.resolve(APP_PATH,'util/index.js') // common function
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: APP_PATH
        },{
            test: /\.(gif|jpg|png|svg)$/,
            use: ['url-loader?limit=10000&name=[path][name].[ext]?[hash]'], // if img size < 10000, turn it to data and rename it.
            include: PUBLIC_PATH
        },{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            exclude: NODE_PATH
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: ['css-loader','sass-loader'],
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }]
    },
    plugins: plugins
}