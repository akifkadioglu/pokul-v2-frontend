import { routeNames } from '../routes'
import router from '../router'
import { variables } from '../variables';
import { storage } from '../storage';


export const middlewares = {
    auth(to, from, next) {
        if (
            storage.pull(variables.TOKEN) == undefined ||
            storage.pull(variables.TOKEN) == null ||
            storage.pull(variables.TOKEN) == ""
        ) {
            router.push({ name: routeNames.INTRODUCTION });
        }

        next()
    },


    login(to, from, next) {
        if (
            storage.pull(variables.TOKEN) != null
        ) {
            router.push({ name: routeNames.HOME });
        }
        next()
    },

    checkAccount(to, from, next) {
        if (to.params.username != storage.pull(variables.USERNAME)) {
            router.push({ name: routeNames.ANOTHER_ACCOUNT });
        }
        next()
    }
}