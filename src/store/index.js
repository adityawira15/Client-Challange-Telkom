/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import purchase from './modules/purchase'
import project from './modules/project'
// component store
Vue.use(Vuex)
const store = new Vuex.Store({
modules: {
purchase,
project
// module store
}
})
export default store
