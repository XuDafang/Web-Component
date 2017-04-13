import util from 'util'
import { SET_ORGANIZER_INFO } from '../mutation-types'

const organizer_test = {
    "id": 1,
    "name": "An Acceptable Time",
    "company": null,
    "contact_number": null,
    "description": "this is it.",
    "facebook_page": null,
    "email": "cruz@tremblay.net",
    "access_token": null,
    "logo_url": null,
    "cover_image_url": null
}

const state = {
    organizerInfo: {}
}
const getters = {
    getOrganizerInfo: state => state.organizerInfo
}
const mutations = {
    [SET_ORGANIZER_INFO]: (state, organizerInfo) => {
        state.organizerInfo = organizerInfo;
    }
}
const actions = {
    setOrganizerInfo: ({ commit }, organizer) => {commit(SET_ORGANIZER_INFO, organizer)},
    async loadOrganizerInfo({ commit }){
        let organizer = await util.storeWithExpiration.get('organizer');
        if(!organizer){
            commit(SET_ORGANIZER_INFO, {})
        } else {
            commit(SET_ORGANIZER_INFO, organizer);
        }
    }
}  

export default {
    state,
    getters,
    actions,
    mutations
};