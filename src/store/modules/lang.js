import {app} from '@/main'

const state = {
  lang: 'en'
}

const mutations = {
  SET_LANG (state, payload) {
    app.$i18n.locale = payload
    window.localStorage.setItem('lang', payload)
  }
}

const actions = {
  setLang ({commit}, payload) {
    // alert(payload)
    commit('SET_LANG', payload)
  }
}

export default {
  state,
  actions,
  mutations
}
