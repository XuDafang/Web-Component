<template>
    <div>
    </div>
</template>

<script>
import util from 'util'
import { mapActions } from 'vuex'

module.exports = {
    mounted () {
        util.storeRemove('user');
        this.setUserInfo({});
    },
    methods: {
        ...mapActions(['setUserInfo'])
    }
}
</script>