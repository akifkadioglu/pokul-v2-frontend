
export const cryption = {
    encrypt(value) {
        if (value == null) {
            return
        }
        return Buffer.from(value, "utf8").toString("base64");
    },

    decrypt(key) {
        return Buffer.from(key, "base64").toString()
    },
}