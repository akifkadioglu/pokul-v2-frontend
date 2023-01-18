import axios from 'axios';
import { storage } from '../storage';
import { variables } from '../variables';
import { http_variables } from './http-variables';


var token = storage.pull(variables.TOKEN)

if (token != null) {
    try {
        axios.defaults.headers.common[http_variables.AUTHORIZATION] = http_variables.token(token);
    } catch (error) {
        localStorage.clear()
    }
}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;