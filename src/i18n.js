import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index.js';
import { variables } from './variables';
import { storage } from './storage';
Vue.use(VueI18n)

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}
var locale

var localStorageLang = storage.pull(variables.LANGUAGE)
var browserLang = navigator.language.split('-')[0]


if (localStorageLang == '' | localStorageLang == null) {
    switch (browserLang) {
        case variables.TURKISH:
            locale = variables.TURKISH;
            break;

        case variables.ENGLISH:
            locale = variables.ENGLISH;
            break;

        default:
            locale = variables.TURKISH;
            break;
    }
} else {
    locale = localStorageLang;
}

export default new VueI18n({
    locale: locale,
    fallbackLocale: storage.pull(store.state.lang) ?? variables.TURKISH,
    messages: loadLocaleMessages()
})