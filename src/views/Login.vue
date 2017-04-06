<template>
    <div class="login-container login-bg">
        <div class="ui container grid login-content">
            <div class="two column row">
                <div class="ten wide column login-small-align-center">
                    <div class="login-text">Welcome to <span class="be-theme-color">BeScene.</span></div>
                    <div class="login-sub-text margin-top-1em">Host your events with BeScene, the easiest event management platform with social discovery</div>
                </div>
                <div class="six wide column login-big-align-center">
                    <form action="#" class="ui form login-form-container" @submit.prevent="login">
                        <div class="login-form-title-container">
                            <div class="login-form-title">
                                Organiser Login
                            </div>
                        </div>
                        <div class="be-divider">
                        </div>
                        <div class="be-label">
                            <i class="be-icon-email small icon"></i>
                            <div class="be-text-bold">
                                Email address
                            </div>
                        </div>
                        <div class="be-input-container">
                            <input class="be-input" type="text" placeholder="johndoe@email.com" maxlength="100" v-model="user.email"/>
                        </div>
                        <div class="be-divider">
                        </div>
                        <div class="be-label">
                            <i class="be-icon-password small icon"></i>
                            <div class="be-text-bold">
                                Email address
                            </div>
                        </div>
                        <div class="be-input-container">
                            <input class="be-input" type="password" placeholder="Your 5-12 character password" maxlength="30" v-model="user.password"/>
                        </div>
                        <div class="be-divider">
                        </div>
                        <div class="be-checkbox-container">
                            <input class="be-checkbox" type="checkbox" v-model="user.checked" name="layout" id="login-checkbox">
                            <label class="be-checkbox-lable" for="login-checkbox">Remember Me</label>
                            <a class="be-text-dim be-right" href="#">Forget password?</a>
                        </div>
                        <div class="login-button-container">
                            <button class="ui button fluid be-theme-bg-color be-text-white">
                                Login
                            </button>
                        </div>
                        <div class="be-text-container">
                            <span class="be-text-small">Want to become a BeScene Organiser?<a href="#" class="be-theme-color"> Sign up here</a> </span>
                        </div>
                        <div class="login-buttom">
                            <div class="be-text-container">
                                <span class="be-text-small be-text-black">By signing in, you agree with our <a class="be-text-underline be-text-black">Terms and Conditions</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.login-buttom {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
	background-color: rgba(242,242,242,.5) !important;
}

.login-container {
    position: relative;
    overflow: hidden;
    min-height: 100%;
}

.login-content {
    height: 100%;
}

.login-text {
    color: ffffff;
    font-size: 50px;
	font-weight: 750;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.08;
	letter-spacing: normal;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    width: 27em;
}

.login-sub-text {
    color: ffffff;
    font-size: 20px;
	font-weight: 750;
	line-height: 1.45;
	text-align: center;
    width: 23em;
}

.login-small-align-center {
    padding-top: calc((100vh - 105px)/2);
}

.login-big-align-center {
    padding-top: calc((100vh - 528px)/2);
}

.login-page {
    width: 400px;
}

.login-bg {
    background: url('/public/img/login_bg.png') no-repeat center center fixed;
    background-size: cover;
}

.login-form-container {
    width: 400px;
	height: 520px;
	background-color: #ffffff;
	box-shadow: 0 5px 10px 0 rgba(125, 125, 125, 0.4);
}

.login-form-title {
	width: 151px;
	height: 38px;
	font-size: 20px;
	font-weight: bold;
	line-height: 1.9;
    margin-left: 1em;
}

.login-form-title-container {
    height: 70px;
    display: flex;
    align-items: center;
}

.login-button-container {
    margin: 1em;
}
</style>


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
