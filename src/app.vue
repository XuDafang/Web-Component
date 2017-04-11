<template>
    <div class="wrapper">
        <Bheader></Bheader>
        <router-view></router-view>
        <p class="test-link">
            <router-link to="/login">Login</router-link>
            <router-link to="/logout">Logout</router-link>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/profile">Profile</router-link>
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
    }
}
</script>