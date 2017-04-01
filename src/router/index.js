import Vue from 'vue'
import Router from 'vue-router'

// views
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

Vue.use(Router);

export default new Router({
    //linkActiveClass: 'active',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login  
        },{
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
});