
const state = {
    userInfo:  JSON.parse(localStorage.getItem('user')) || {}
}
const getters = {
    getUserInfo: state => state.userInfo
}
const mutations = {
    setUserInfo: (state, userInfo) => { state.userInfo = userInfo }
}
const actions = {
    setUserInfo: ({ commit }, user) => { commit('setUserInfo'), user }
}  

export default {
    state,
    getters,
    actions,
    mutations
};