export const http_variables = {
    AUTHORIZATION: 'Authorization',

    token(token) {
        return 'Bearer ' + token
    }
}