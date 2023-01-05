import vuetify from './plugins/vuetify'

export const settings = {
    swicthDarkMode() {
        console.log(vuetify.preset.theme.themes)
        vuetify.preset.theme.dark = !vuetify.preset.theme.dark
    }
}
