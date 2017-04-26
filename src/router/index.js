import Vue from 'vue'
import Router from 'vue-router'

// views
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Eventdetail from '../views/Eventdetail.vue'

import store from '../store'
import util from 'util'

Vue.use(Router);

function isLogin(to, from, next){
    let organizer = store.state.organizer.organizerInfo;
    if(organizer.id){
        next({
            path: 'profile'
        });
    } else {
        next();
    }
}

const router = new Router({
    //linkActiveClass: 'active',
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: isLogin
        },{
            path: '/logout',
            name: 'logout',
            component: Logout
        },{
            path: '/signup',
            name: 'signup',
            component: Signup,
            beforeEnter: isLogin
        },{
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                auth: true
            }
        },{
            path: '/eventdetail',
            name: 'eventdetail',
            component: Eventdetail,
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.meta.auth){
        if(store.state.organizer.organizerInfo.id){
            next();
        } else {
            util.toggleAlert('Login Required','error');
            next({
                path: '/login'
            })
        }
    } else {
        next();
    }
})

export default router;