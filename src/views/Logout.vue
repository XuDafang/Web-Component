<template>
    <div>
    </div>
</template>

<script>
import util from 'util'
import { mapActions } from 'vuex'

module.exports = {
    mounted () {
        util.storeRemove('organizer');
        this.setOrganizerInfo({});
        this.$router.push({path: 'login'})
    },
    methods: {
        ...mapActions(['setOrganizerInfo'])
    }
}
</script>