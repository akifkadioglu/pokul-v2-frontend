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
            storage.pull(variables.TOKEN) == undefined ||
            storage.pull(variables.TOKEN) == null ||
            storage.pull(variables.TOKEN) == ""
        ) {
            next()
        }
        router.push({ name: routeNames.HOME });
    },


}