import { routeNames } from '../routes'
import router from '../router'
import { variables } from '../variables';


export const middlewares = {
    auth(to, from, next) {
        /* if (
            localStorage.getItem(variables.TOKEN) == null ||
            localStorage.getItem(variables.TOKEN) == ""
        ) {
            router.push({ name: routeNames.INTRODUCTION });
        } */

        next()
    },

    login(to, from, next) {
        if (
            localStorage.getItem(variables.TOKEN) != null
        ) {
            router.push({ name: routeNames.HOME });
        }
        next()
    },


}