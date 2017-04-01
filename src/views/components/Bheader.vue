<template>
    <div class="header-height ui attached stackable menu inverted">
        <div class="ui container">
            <a class="item">
                <i class="be-icon-alert big icon"></i>
            </a>
            <div class="item">Manage Events</div>
            <div class="right item ui simple dropdown">
                {{ username }}
                <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item">1</a>
                    <a class="item">2</a>
                    <a class="item">3</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.header-height {
    height: 60px;
}

h5.hearder {

}

.header-left {
    margin-left: 150px;
}
</style>

<script>
module.exports = {
    data(){
        return {
            username: 'miruku'
        }
    }
}
</script>



