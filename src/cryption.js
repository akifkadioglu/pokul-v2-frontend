

const AES = require('crypto-js/aes');
var CryptoJS = require("crypto-js");
import router from './router'
import { routeNames } from "./routes"

export const cryption = {
    encrypt(value) {
        if (value == null) {
            return
        }
        try {
            var result = Buffer.from(value, "utf8").toString("base64");
        } catch (error) {
            this.clearStorageAndGoLogin()
        }
        return result
    },

    aesdecrypt(key) {
        try {
            var result = AES.decrypt(
                key,
                process.env.VUE_APP_APP_KEY,
            ).toString(CryptoJS.enc.Utf8);
        } catch (error) {
            this.clearStorageAndGoLogin()
        }
        return result
    },

    decrypt(key) {
        try {
            var result = Buffer.from(key, "base64").toString()
        } catch (error) {
            this.clearStorageAndGoLogin()
        }
        return result
    },

    aesencrypt(value) {
        if (value == null) {
            return
        }
        try {
            var result = AES.encrypt(
                value,
                process.env.VUE_APP_APP_KEY,
            ).toString();
        } catch (error) {
            this.clearStorageAndGoLogin()
        }
        return result
    },

    clearStorageAndGoLogin() {
        localStorage.clear()
        router.push({ name: routeNames.LOGIN })
    }
}
