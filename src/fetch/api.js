import axios from 'axios'
import qs from 'qs'

let Interface = '/api/v1'

if(!DEVELOPMENT){
    Interface = 'http://bescene.staging.fooyo.sg/api/v1'
}

// axios config that will be applied to every request
axios.defaults.baseURL = Interface // interface address
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// stringify post array
axios.interceptors.request.use((config) => {
    if(config.method === 'post'){
        
    }
    return config;
}, (error) => {
    console.log('parameter is illegal'); // need log function
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    if(res.status !== 200 && res.status !== 201){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log('network error'); // need log function
    return Promise.reject(error);
})

export function fetch(url, params){
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            })
    });
}

export default {
    Login(params){
        return fetch('/organizers/signin', params);
    },
    Signup(params){
        return fetch('/organizers', params);
    },
    Update(id, params){
        return fetch('/organizers/'+ id, params);
    }
}


