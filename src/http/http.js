import axios from 'axios';
import router from '../router';
import { routeNames } from '../routes';
import { storage } from '../storage';
import { variables } from '../variables';

export const http = {
    async network(method, url, body, parameters, headers) {
        let result
        let error
        switch (method) {
            case variables.GET:
                await axios.get(url, { params: parameters, headers: headers }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.POST:
                await axios.post(url, body, { params: parameters, headers: headers }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.PUT:
                await axios.put(url, body, { params: parameters, headers: headers }).then((r) => {
                    result = r
                }).catch((e) => {
                    error = e
                });
                break;

            case variables.DELETE:
                await axios.delete(url, { params: parameters, headers: headers }).then((r) => {
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
            storage.remove(variables.TOKEN)
            router.push({ name: routeNames.INTRODUCTION })
        }
        if (error != null) {
            alert(error.response.data.message);
        }
        return { result, error }
    }
}