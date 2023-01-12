import axios from 'axios';
import router from '../router';
import { routeNames } from '../routes';
import { variables } from '../variables';

export const http = {
    async network(method, url, body, parameters) {
        let result
        let error
        switch (method) {
            case variables.GET:
                await axios.get(url, body, { param: parameters }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.POST:
                await axios.post(url, body, { param: parameters }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.PUT:
                await axios.put(url, body, { param: parameters }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.DELETE:
                await axios.delete(url, body, { param: parameters }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            default:
                console.log('geçersiz method')
                break;
        }
        if (error != undefined && error.response.request.status == 401) {
            router.push({ name: routeNames.LOGIN })
        }
        
        return { result, error }
    }
}