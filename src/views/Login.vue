<template>
    <div class="be-page-container be-mainpage-bg">
        <div class="ui container grid">
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
                        <be-input :source="source.email" v-model="organizer.email"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.password" :type="source.password.type" v-model="organizer.password"></be-input>
                        <div class="be-divider">
                        </div>
                        <div class="be-checkbox-container">
                            <input class="be-checkbox" type="checkbox" v-model="organizer.checked" name="layout" id="login-checkbox">
                            <label class="be-checkbox-lable" for="login-checkbox">Remember Me</label>
                            <a class="be-text-dim be-right" href="#">Forget password?</a>
                        </div>
                        <div class="be-button-container">
                            <button class="ui button fluid be-theme-bg-color be-text-white" :class="{'loading': isLoading}">
                                Login
                            </button>
                        </div>
                        <div class="be-text-container">
                            <span class="be-text-small">Want to become a BeScene Organiser?<router-link class="be-theme-color" :to="{name: 'signup'}"> Sign up here</router-link></span>
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
        <div class="ui container">
            <be-footer :isFixed="true" :isWhite="true"></be-footer> 
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

</style>


<script>
import api from 'api'
import util from 'util'
import { mapActions } from 'vuex'
import uuid from 'uuid'

import Binput from './components/Binput'
import Bfooter from './components/Bfooter'

// for test
const userInfo = {
    "organizer": {
        "email": "miruku@gmail.com",
        "password": "654321",
        "clinet": "test"
    }
}

module.exports = {
    components: {
        'be-input': Binput,
        'be-footer': Bfooter
    },
    data: function(){
        return {
            "source": {
                "email": {
                    input: '',
                    holderName: 'johndoe@email.com',
                    labelName: 'Email address',
                    icon: 'be-icon-email'
                },
                "password": {
                    input: '',
                    holderName: 'Your 5-12 character password',
                    labelName: 'Password',
                    icon: 'be-icon-password',
                    type: 'password'
                }
            },
            "organizer": {
                "email": '',
                "password": '',
                "client": util.getBrowserInfo() + uuid.v1()
                //"clinet": 'default'
            },
            isLoading: false
        }
    },
    methods: {
        ...mapActions(['setOrganizerInfo']),
        login(){
            if(!this.organizer.email || !this.organizer.password){
                console.log('password error');
                util.toggleAlert('Incorrect mailbox format', 'error');
                return;
            }
            this.isLoading = true;
            api.Login({"organizer": this.organizer}).then(res => {
                // debuger;
                // set route and store organizer data to localstage
                // change button style
                if(res.organizer){
                    util.toggleAlert('Login success', 'success');
                    this.isLoading = false;
                    let organizer = res.organizer;
                    util.storeWithExpiration.set('organizer', organizer, 600000); // expiration time = 10 min
                    this.setOrganizerInfo(organizer);
                    // path to profile
                    this.$router.push({path: 'profile'});
                }
            }).catch(error => {
                if(error.status){
                    util.toggleAlert(error, 'error');
                    this.isLoading = false;
                    console.log('error, code: ' + error.status ); // deal http error 
                }
                else{
                    util.toggleAlert(error, 'error');
                    this.isLoading = false
                    console.log(error);
                }
            })            
        }
    }
}
</script>
