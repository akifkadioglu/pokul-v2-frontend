import router from 'vue-router';
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export const routeNames = {
    HOME:               'Home',
    ACCOUNT:            'Account',
    INTRODUCTION:       'Introduction',
    CONFERENCE:         'Conference',
    LOGIN:              'Login',
    ANOTHER_ACCOUNT:    'AnotherAccount',
    EDIT_PROFILE:       'EditProfile',
    CHANGE_PASSWORD:    'ChangePassword'
}


