import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import '../public/style/style.scss'


var vm = new Vue({
    data: {
        greeting: 'miruku'
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')
