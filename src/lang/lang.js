import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import cn from './cn.json'
import en from './en.json'
// import tw from './tw.json'
import id from './id.json'

Vue.use(VueI18n)

const locale = window.localStorage.getItem('lang') || 'en'

const messages = {
  // en
  en: en,
  id: id
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
