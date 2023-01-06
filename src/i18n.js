import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index.js';
import { variables } from './variables';

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
var locale = 'tr'
if (localStorage.getItem(variables.LANGUAGE) == '' | localStorage.getItem(variables.LANGUAGE) == null) {
    locale = navigator.language.split('-')[0] == 'tr' ? 'tr' : 'en';
} else {
    locale = localStorage.getItem(variables.LANGUAGE);

}
export default new VueI18n({
    locale: locale,
    fallbackLocale: localStorage.getItem(store.state.lang) ?? 'tr',
    messages: loadLocaleMessages()
})