<template>
    <div id="wrapper">
        <Bheader></Bheader>
        <p>
            <router-link to="/login">Login</router-link>
            <router-link to="/logout">Logout</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>

import Bheader from './views/components/Bheader.vue'

module.exports = {
    components: {
        Bheader
    }
}
</script>