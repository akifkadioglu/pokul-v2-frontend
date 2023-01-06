import Vue from "vue";
import Vuetify from "vuetify";
import i18n from "./i18n";
import { keys } from "./locales/keys";
import store from './store/index'
import { variables } from "./variables";
Vue.use(Vuetify);

export const functions = {
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

        localStorage.setItem(
            variables.IS_DARK_MODE,
            vuetify.theme.dark.toString()
        );
    },
    switchLanguage(language) {
        i18n.locale =
            language == variables.TURKISH
                ? variables.TURKISH
                : variables.ENGLISH;
        localStorage.setItem(
            variables.LANGUAGE,
            i18n.locale.toString()
        );
    },
}
