import Vue from 'vue'
import Vuex from 'vuex'
import organizer from './modules/organizer'
// import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex);

const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
    // actions,
    // getters,
    modules: {
        organizer
    },
    strict: debug
})