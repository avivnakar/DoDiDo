import { userService } from '../../services/userService';

export async function login(credentials) {
    const user = await userService.login(credentials);
    return dispatch => dispatch({ type: 'LOGIN', user });
}
export async function logout() {
    const user = await userService.logout();
    return dispatch => dispatch({ type: 'LOGOUT', user: null });
}
export function updateUser(user) {
    const user = await userService.update(user);
    return dispatch => dispatch({ type: 'UPDATE_USER', user });
}
export function signup(credentials) {
    const user = await userService.signup(credentials);
    return dispatch => dispatch({ type: 'SIGNUP', user });
}