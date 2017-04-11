import util from 'util'
import { SET_USER_INFO } from '../mutation-types'

const state = {
    userInfo: {}
}
const getters = {
    getUserInfo: state => state.userInfo
}
const mutations = {
    [SET_USER_INFO]: ( state, userInfo ) => {
        state.userInfo = userInfo;
    }
}
const actions = {
    setUserInfo: ({ commit }, user) => { commit(SET_USER_INFO, user)},
    async loadUserInfo({ commit }){
        let user = await util.storeWithExpiration.get('user');
        if(!user){
            commit(SET_USER_INFO, {})
        } else {
            commit(SET_USER_INFO, user);
        }
    }
}  

export default {
    state,
    getters,
    actions,
    mutations
};