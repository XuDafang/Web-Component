<template>
    <form action="#" class="login-page" @submit.prevent="login">
        <h3 class="title">
            Organiser Login
        </h3>
        <div class="input">
            <input name="email" type="text" placeholder="Email Address" maxlength="100" v-model="user.email"/>
        </div>
        <div class="input">
            <input name="password" type="password" placeholder="Password" maxlength="30" v-model="user.password"/>
        </div>
        <div class="check-box">
            <input name="checkbox" type="checkbox" v-model="user.checked"/>
            <h4> Remember me </h4>
        </div>
        <div class="button">
            <button>Login</button>
        </div>
    </form>
</template>


<script>
import api from 'api'
import util from 'util'
import { mapActions } from 'vuex'
import uuid from 'uuid'

// for test
const userInfo = {
    "user": {
        "email": "miruku@gmail.com",
        "password": "654321",
        "clinet": "test"
    }
}

module.exports = {
    data: function(){
        return {
            "user": {
                "email": '',
                "password": '',
                "client": util.getBrowserInfo() + uuid.v1()
            }
            
        }
    },
    methods: {
        ...mapActions(['setUserInfo']),
        login(){
            if(!this.user.email || !this.user.password){
                console.log('password error');
                return;
            }
            api.Login({"user": this.user}).then(res => {
                // debuger;
                // set route and store user data to localstage
                if(res.user){
                    let user = res.user;
                    util.storeWithExpiration.set('user', user, 60000); // expiration time = 10 min
                    this.setUserInfo(user);
                }
            }).catch(error => {
                if(error.status){
                    console.log('error, code: ' + error.status ); // deal http error 
                }
                else{
                    console.log(error);
                }
            })            
        }
    }
}
</script>
