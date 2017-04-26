<template>
    <div class="wrapper">
        <Bheader :organizer="organizer"></Bheader>
        <router-view></router-view>
        <p class="test-link">
            <router-link to="/logout">Logout</router-link>
            <router-link to="/eventdetail">Eventdetail</router-link>
        </p>
    </div>
</template>

<style lang="sass" scoped>
.wrapper {
    height: 100%;
    overflow-x: hidden;
    padding: 0em! important;
}

.test-link {
    position: fixed;
    bottom: 0;
    z-index: 10000;
}
</style>

<script>

import Bheader from './views/components/Bheader.vue'
import { mapActions, mapState } from 'vuex'

module.exports = {
    components: {
        Bheader
    },
    computed: {
        ...mapState(['organizer'])
    },
    methods: {
        ...mapActions(['loadOrganizerInfo'])
    },
    created(){
         //this.loadOrganizerInfo();
    }
}
</script>