

const AES = require('crypto-js/aes');
var CryptoJS = require("crypto-js");
export const cryption = {
    encrypt(value) {
        if (value == null) {
            return
        }
        return Buffer.from(value, "utf8").toString("base64");
    },

    aesdecrypt(key) {
        return AES.decrypt(
            key,
            process.env.VUE_APP_APP_KEY,
        ).toString(CryptoJS.enc.Utf8);
    },

    decrypt(key) {
        return Buffer.from(key, "base64").toString()
    },

    aesencrypt(value) {
        if (value == null) {
            return
        }
        return AES.encrypt(
            value,
            process.env.VUE_APP_APP_KEY,
        ).toString();
    },


}