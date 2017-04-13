<template>
    <div class="be-page-container be-mainpage-bg">
        <div class="ui container grid height-100">
            <div class="two column row">
                <div class="ten wide column signup-left-align-center">
                    <div class="signup-text">Welcome to <span class="be-theme-color">BeScene.</span></div>
                    <div class="signup-sub-text margin-top-1em">Host your events with BeScene, the easiest event management platform with social discovery</div>
                </div>
                <div class="six wide column signup-right-align-center">
                    <form action="#" class="ui form signup-form-container mini" @submit.prevent="signup">
                        <div class="signup-form-title-container">
                            <div class="signup-form-title">
                                Organizer Sign Up
                            </div>
                        </div>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.name" v-model="organizer.name"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.email" v-model="organizer.email"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.company" v-model="organizer.company"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.contact_number" v-model="organizer.contact_number"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.password" type="password" v-model="organizer.password"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.password_confirm" type="password" v-model="password_confirm"></be-input>
                        <div class="be-divider">
                        </div>
                        <div class="be-button-container">
                            <button class="ui button fluid be-theme-bg-color be-text-white" :class="{'loading': isLoading}">
                                Sign up
                            </button>
                        </div>
                        <div class="be-text-container">
                            <span class="be-text-small">Already a BeScene Organiser? <router-link class="be-theme-color" :to="{name: 'login'}"> Login here</router-link></span>
                        </div>
                        <div class="signup-buttom">
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
.signup-buttom {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
	background-color: rgba(242,242,242,.5) !important;
}

.signup-text {
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

.signup-sub-text {
    color: ffffff;
    font-size: 20px;
	font-weight: 750;
	line-height: 1.45;
	text-align: center;
    width: 23em;
}

.signup-left-align-center {
    padding-top: calc((100vh - 105px)/2);
}

.signup-right-align-center {
    padding-top: calc((100vh - 720px)/2);
}

.signup-form-container {
    z-index: 100;
    width: 400px;
	height: 720px;
	background-color: #ffffff;
	box-shadow: 0 5px 10px 0 rgba(125, 125, 125, 0.4);
}

.signup-form-title {
	width: 100%;
	height: 38px;
	font-size: 20px;
	font-weight: bold;
	line-height: 1.9;
    margin-left: 1em;
}

.signup-form-title-container {
    height: 70px;
    display: flex;
    align-items: center;
}

</style>

<script>
import api from 'api'
import util from 'util'
import { mapActions } from 'vuex'

import Binput from './components/Binput.vue'
import Bfooter from './components/Bfooter.vue'

module.exports = {
    components: {
        'be-input': Binput,
        'be-footer': Bfooter
    },
    data: function(){
        return {
            "source": {
                "name": {
                    input: '',
                    holderName: 'John Doe',
                    labelName: 'Name',
                    icon: 'be-icon-profile'
                },
                "email": {
                    input: '',
                    holderName: 'Johndoe@email.com',
                    labelName: 'Email Address',
                    icon: 'be-icon-email'
                },
                "company": {
                    input: '',
                    holderName: 'Doe\'s Company',
                    labelName: 'Company',
                    icon: 'be-icon-organiser'
                },
                "contact_number": {
                    input: '',
                    holderName: '9123 4567',
                    labelName: 'Contact Number',
                    icon: 'be-icon-phone'
                },
                "password": {
                    input: '',
                    holderName: 'Your 5-12 character password',
                    labelName: 'Password',
                    icon: 'be-icon-password'
                },
                "password_confirm": {
                    input: '',
                    holderName: 'Confirm your password',
                    labelName: 'Confirmation',
                    icon: 'be-icon-password'
                }
            },
            "organizer": {
                name: '',
                email: '',
                company: '',
                contact_number: '',
                password: '',
            },
            password_confirm: '',
            isLoading: false
        }
    },
    methods: {
        ...mapActions(['setOrganizerInfo']),
        signup(){
            for(let attr in this.organizer){
                if(!this.organizer[attr]){
                    util.toggleAlert('Informations is incomplete','error');
                    return;
                }
            }
            if(this.organizer.password !== this.password_confirm){
                util.toggleAlert('Password and Confirmation do not match','error');
                return;
            }
            this.isLoading = true;
            api.Signup({"organizer": this.organizer}).then(res => {
                if(res.organizer){
                    util.toggleAlert('Signin success', 'success');
                    this.isLoading = false;
                    let organizer = res.organizer;
                    util.storeWithExpiration.set('organizer', organizer , 1200000);
                    this.setOrganizerInfo(organizer);
                    this.$router.push({path: 'profile'});
                    // need to save organizer to store
                }
            }).catch(error => {
                util.toggleAlert(error, 'error');
                this.isLoading = false;
            })
        }
    }
}  
</script>