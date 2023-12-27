// ----------------------------------------------------------------------
function path(root, sublink) {
    return `${root}${sublink}`;
}
const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
// ----------------------------------------------------------------------
export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
    verify: path(ROOTS_AUTH, '/verify'),
    resetPassword: path(ROOTS_AUTH, '/reset-password'),
    newPassword: path(ROOTS_AUTH, '/new-password'),
};
export const PATH_PAGE = {
    comingSoon: '/coming-soon',
    about: '/about-us',
    contact: '/contact-us',
};
export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    user: {
        root: path(ROOTS_DASHBOARD, '/user'),
        profile: path(ROOTS_DASHBOARD, '/user/profile'),
        edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    },
    chat: {
        root: path(ROOTS_DASHBOARD, '/chat'),
        new: path(ROOTS_DASHBOARD, '/chat/new'),
        view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
    },
};
