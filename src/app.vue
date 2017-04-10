<template>
    <div class="wrapper">
        <Bheader></Bheader>
        <router-view></router-view>
        <p>
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
</style>


<script>

import Bheader from './views/components/Bheader.vue'

module.exports = {
    components: {
        Bheader
    }
}
</script>