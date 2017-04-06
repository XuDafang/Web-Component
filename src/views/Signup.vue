<template>
    <div class="be-page-container be-mainpage-bg">
        <div class="ui container grid height-100">
            <div class="two column row">
                <div class="ten wide column signup-left-align-center">
                    <div class="signup-text">Welcome to <span class="be-theme-color">BeScene.</span></div>
                    <div class="signup-sub-text margin-top-1em">Host your events with BeScene, the easiest event management platform with social discovery</div>
                </div>
                <div class="six wide column signup-right-align-center">
                    <form action="#" class="ui form signup-form-container">
                        <div class="signup-form-title-container">
                            <div class="signup-form-title">
                                Organiser Sign Up
                            </div>
                        </div>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.name" v-model="user.name"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.email" v-model="user.email"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.company" v-model="user.company"></be-input>
                        <div class="be-divider">
                        </div>
                        <be-input :source="source.contact" v-model="user.contact"></be-input>
                        <div class="be-divider">
                        </div>
                        <div class="be-button-container">
                            <button class="ui button fluid be-theme-bg-color be-text-white">
                                Sign up
                            </button>
                        </div>
                        <div class="be-text-container">
                            <span class="be-text-small">Already a BeScene Organiser?<a href="#" class="be-theme-color">  Login here</a> </span>
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
    padding-top: calc((100vh - 649px)/2);
}

.signup-form-container {
    width: 400px;
	height: 649px;
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
import Binput from './components/Binput.vue'

module.exports = {
    components: {
        'be-input': Binput
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
                    labelName: 'Email address',
                    icon: 'be-icon-email'
                },
                "company": {
                    input: '',
                    holderName: 'Doe\'s Company',
                    labelName: 'Company',
                    icon: 'be-icon-organiser'
                },
                "contact": {
                    input: '',
                    holderName: '9123 4567',
                    labelName: 'Contact Number',
                    icon: 'be-icon-profile'
                }
            },
            "user": {
                name: '',
                email: '',
                company: '',
                contact: ''
            }
        }
    }
}  
</script>