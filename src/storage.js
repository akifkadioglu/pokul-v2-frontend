import { cryption } from "./cryption"
export const storage = {
    pull(key) {
        var content = localStorage.getItem(cryption.encrypt(key))
        if (content == undefined | content == null | content == '') {
            return null
        }

        return cryption.aesdecrypt(content)

    },

    push(key, value) {

        var newKey = cryption.encrypt(key)
        var newValue = cryption.aesencrypt(value)

        localStorage.setItem(newKey, newValue)
    },
}