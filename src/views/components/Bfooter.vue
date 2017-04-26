<template>
    <div :class="{'footer-container': isFixed}">
        <div :class="{'footer-text': true, 'text-white': isWhite} ">&copy; {{ text }}</div>
    </div>
</template>

<style lang="sass" scoped>
.footer-container {
    position: absolute;
    width: inherit;
    bottom: 0;
    left: auto;
    right: auto;
}

.text-white {
    color: rgba(255,255,255,1) !important;
}

.footer-text {
    border-top: solid 1px #fff;
    padding: 2em 2em 2em 2em;
	font-size: 14px;
	font-weight: bold;
    color: rgba(0,0,0,.5);
}
</style>

<script>
module.exports = {
    props: {
        isWhite: {
            type: Boolean,
            required: false,
            default: false
        },
        isFixed: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function(){
        return {
            text:' 2017 Bescene '
        }
    }
}
</script>