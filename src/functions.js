import Vue from "vue";
import Vuetify from "vuetify";
import i18n from "./i18n";
import store from './store/index'

import { keys } from "./locales/keys";
import { storage } from "./storage";
import { variables } from "./variables";



Vue.use(Vuetify);

export const functions = {
    isMobile() {
        if (screen.width <= 760) {
            return true;
        }
        else {
            return false;
        }
    },
    callSnackBar(text) {
        store.state.snackbarText = text;
        store.state.isSnackbarOpen = true;
    },

    switchDarkMode(vuetify) {
        vuetify.theme.dark = !vuetify.theme.dark;
        this.callSnackBar(
            vuetify.theme.dark
                ? i18n.t(keys.DARK_MODE_ACTIVATED)
                : i18n.t(keys.LIGHT_MODE_ACTIVATED)
        );

        storage.push(
            variables.IS_DARK_MODE,
            vuetify.theme.dark.toString()
        );
    },

    switchLanguage(code, language) {
        var langCode
        switch (code) {
            case variables.TURKISH:
                langCode = variables.TURKISH
                break;
            case variables.ENGLISH:
                langCode = variables.ENGLISH
                break;
            default:
                langCode = variables.TURKISH
                break;
        }
        if (i18n.locale == langCode) {
            return
        }
        i18n.locale = langCode;
        this.callSnackBar(
            i18n.t(keys.APP_LANGUAGE_CHANGED) + " : " + i18n.t(language)
        );
        storage.push(
            variables.LANGUAGE,
            i18n.locale.toString()
        );
    },
}
