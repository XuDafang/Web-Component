<template>
    <div v-if="organizer.organizerInfo.id">
        <div class="header-height ui attached stackable menu inverted">
            <div class="ui container">
                <a class="item">
                    <img class="image ui small" src="/public/img/logo.png"/>
                </a>
                <div class="item header-text">Manage Events</div>
                <a class="right item">
                    <i class="be-icon-alert big icon header-center"></i>
                </a>
                <div class="item ui simple dropdown">
                    <img class="ui avatar image circular" src=""/>
                    <span class="header-text">{{ organizer.organizerInfo.name }}</span>
                    <i class="dropdown icon header-color"></i>
                    <div class="menu">
                        <a class="item">miruku</a>
                        <a class="item">ka</a>
                        <a class="item">waii</a>
                    </div>
                </div>
                <div class="item">
                    <button class="ui button header-bg-color header-text">
                        Create Event
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="header-fixed">
        <div class="" class="header-height ui attached stackable menu inverted">
            <div class="ui container">
                <a class="item">
                    <img class="image ui small" src="/public/img/logo.png"/>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

.header-color {
    color: #ff7553;
}

.header-bg-color {
    background-color: #ff7553;
}

.header-text {
    font-size: 1em;
    font-weight: 400;
    color: #ffffff;
}

.header-center {
    margin: 0 !important;
}

.header-fixed {
    position: fixed;
    z-index: 101;
    left: 0;
    right: 0;
}

</style>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

module.exports = {
    props: {
        organizer: {
            type: Object,
            default: () => {},
            required: false
        }
    },
    data(){
        return {
            ok: true,    
        }
    },
    computed: {
        ...mapState([
            'organizer'
        ])
    },
}
</script>



