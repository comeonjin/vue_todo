
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {DELETE_ITEM, ADD_ITEM} from './mutation-type'

const store = new Vuex.Store({
    state: {
        text: 'hello webpack!',
        list: [],
        rn: 123
    },
    mutations: {
        [ADD_ITEM]: (state, payload) => {
            state.list.unshift(payload)
        },
        [DELETE_ITEM]: (state,payload) => {
            let index = state.list.findIndex(item => item === payload)
            state.list.splice(index, 1)
        }
    }
})

export default store