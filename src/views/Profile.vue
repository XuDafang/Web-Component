<template>
    <div class="be-page-container ui container">
        <div class="be-title-container be-flex-between ui">
            <div class="margin-left-half-em profile-text-title">Organizer Profile</div>
            <button class="ui button be-button" @click.prevent="update()">
                Save
            </button>
        </div>
        <div class="be-divider">
        </div>
        <div class="be-column-container">
            <div class="be-label">
                <i class="small icon be-icon-event-image"></i>
                <div class="be-text-bold">
                    Your Logo
                </div>
            </div>
            <div class="be-text-container">
                <div class="profile-text-help">
                    Upload a JPG, GIF or PNG no larger than 1MB. Square images look the best!
                </div>
            </div>
            <div class="be-column-container be-flex be-flex-start">
                <div class="profile-logo-preview">
                    <div v-if="logo.isUpload" class="be-cirular profile-logo-container">
                        <img class="ui image circular" :src="logo.imgDataUrl" />
                    </div>
                    <div v-else class="profile-logo-container be-cirular">
                        <div class="be-align-center profile-text-logo">Logo</div>
                    </div>
                </div>
                <div>
                    <my-upload field="logo"
                        @crop-success="cropSuccess"
                        v-model="logo.show"
                        :width="360"
                        :height="360"
                        lang-type="en"
                        img-format="png">
                    </my-upload>
                </div>
                <div class="be-button-container be-flex be-flex-align-center margin-left-3em">
                    <button class="ui button basic black profile-button" @click.prevent="logoToggleShow">Choose File</button>
                </div>
            </div>
        </div>
        <div class="be-divider">
        </div>
        <div class="be-column-container">
            <div class="be-label">
                <i class="small icon be-icon-event-image"></i>
                <div class="be-text-bold">
                    Cover image
                </div>
            </div>
            <div class="be-text-container">
                <div class="profile-text-help">
                    We recommend using at least a <span class="be-text-bold">2160 x 1080px</span> (2:1 ratio) JPG, PNG or GIF image.
                </div>
            </div>
            <div class="be-column-container">
                <div>
                    <my-upload field="cover"
                        @crop-success="cropSuccess"
                        v-model="cover.show"
                        :width="2160"
                        :height="1080"
                        lang-type="en"
                        img-format="png">
                    </my-upload>
                </div>
                <div class="profile-cover-preview">
                    <div v-if="cover.imgDataUrl" class="profile-cover-container">
                        <img class="ui image" :src="cover.imgDataUrl" />
                    </div>
                    <div v-else class="profile-cover-container be-flex be-flex-direction-column be-flex-align-center be-flex-center">
                        <div class="profile-text-logo">Add a Cover Image</div>
                        <div class="profile-text-help margin-top-half-em  margin-bottom-1em">
                            Choose an image of your venue or of your best events
                        </div>
                        <button class="ui button basic black profile-button" @click.prevent="coverToggleShow">Choose File</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="be-divider">
        </div>
        <div class="ui form margin-bottom-5em">
            <div class="be-column-container">
                <be-input :source="source.name" v-model="organizer.name"></be-input>
            </div>
            <div class="be-divider">
            </div>
            <div class="be-column-container">
                <be-input :source="source.description" :isTextarea="source.description.isTextarea" v-model="organizer.description"></be-input>
            </div>
            <div class="be-divider">
            </div>
            <div class="be-column-container">
                <be-input :source="source.website" v-model="organizer.website"></be-input>
            </div>
            <div class="be-divider">
            </div>
            <div class="be-column-container">
                <be-input :source="source.facebook" v-model="organizer.facebook"></be-input>
            </div>
        </div>
        <be-footer></be-footer>
    </div>
</template>

<style lang="sass" scoped>

.profile-text-title {
    font-size: 28px;
	font-weight: 400;
}

.profile-text-help {
    font-size: 14px;
	line-height: 1.5;
}

.profile-button {
    height: 62px;
    border: 2px solid #000000;
    box-shadow: none !important;
    font-size: 16px !important;
    font-weight: bold !important;
}

button.profile-button:hover {
    color: #ff7553 !important;
}

.profile-cover-preview {
    margin: 1em 0;
}

.profile-cover-container {
    width: 700px;
    height: 350px;
    border: solid 1px #e2e2e2;
    background-color: #f6f6f6;
}

.profile-logo-container {
    width: 120px;
    height: 120px;
    position: relative;
    background-color: #f6f6f6;
    border-style: solid;
    border-color: #e4e4e4;
    border-width: 1px;
}

.profile-text-logo {
    font-size: 20px;
    font-weight: bold;
    color: #1d1d1d;
}
</style>

<script>

import api from 'api'
import util from 'util'
import { mapActions, mapState } from 'vuex'

import myUpload from './components/Upload.vue'
import Binput from './components/Binput.vue'
import Bfooter from './components/Bfooter.vue'
/* 
    reference https://github.com/dai-siki/vue-image-crop-upload
*/

module.exports = {
    data: function(){
        return {
            // input data
            source: {
                name: {
                    input: '',
                    holderName: 'Bescene Organiser',
                    labelName: 'Organiser Name',
                    icon: 'be-icon-email'
                },
                description: {
                    input: '',
                    labelName: 'About',
                    holderName: 'Tell us what your organisation is about and the type of events it usually hosts.',
                    icon: 'be-icon-compose',
                    isTextarea: true
                },
                website: {
                    input: '',
                    holderName: 'www.besceneorganiser.com',
                    labelName: 'Website',
                    icon: 'be-icon-web'
                },
                facebook: {
                    input: '',
                    holderName: 'www.facebook.com/Besceneorganiser',
                    labelName: 'Facebook Page',
                    icon: 'be-icon-facebook-black'
                }
            },
            // vue image upload data
            logo: {
                // vue-image-crop-upload data
                show: false,
                imgDataUrl: ''
            },
            cover: {
                // vue-image-crop-upload data
                show: false,
                imgDataUrl: ''
            },
        }
    },
    computed: {
        ...mapState(['organizer']),
        organizer: function(){
            return {
                name: '',
                website: '',
                description: '',
                company: '',
                logo: this.logo.imgDataUrl,
                cover_image: this.cover.imgDataUrl
            }
        }    
    },
    methods: {
        logoToggleShow() {
            this.logo.show = !this.logo.show; // vue-image-crop-upload
        },
        coverToggleShow(){
            this.cover.show = !this.cover.show;
        },
        cropSuccess(imgDataUrl, field){
            if(field === 'logo'){
                this.logo.imgDataUrl = imgDataUrl;
                this.logo.isUpload = true;
            } else {
                this.cover.imgDataUrl = imgDataUrl;
                this.cover.isUpload = true;
            }
        },
        update(){
            
        }
    },
    components: {
        'my-upload': myUpload,
        'be-input': Binput,
        'be-footer': Bfooter
    }
}
</script>