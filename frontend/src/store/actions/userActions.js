import { userService } from '../../services/userService';
import { authService } from '../../services/authService';

export async function login(credentials) {
    const user = await authService.login(credentials);
    return dispatch =>dispatch({ type: 'LOGIN', user });
}

export async function signup(credentials) {
    const user = await authService.signup(credentials);
    return dispatch => dispatch({ type: 'SIGNUP', user });
}

export async function logout() {
    const user = await authService.logout();
    return dispatch => dispatch({ type: 'LOGOUT', user: null });
}
export async function updateUser(user) {
    const user = await userService.update(user);
    return dispatch => dispatch({ type: 'UPDATE_USER', user });
}
console.log(this.props.login())