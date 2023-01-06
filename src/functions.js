import store from './store/index'

export const functions = {
    callSnackBar(text) {
        store.state.snackbarText = text;
        store.state.isSnackbarOpen = true;
    }
}
