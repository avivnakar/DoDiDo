import { userService } from '../../services/userService';
import { authService } from '../../services/authService';
const DEFAULT_USER = {
    _id: 'userid',
    fullName: 'Gal Rondel',
    username: 'rondelicious',
    password: 'DoDiDo',
    lastLoginAt: Date.now() - 1000 * 60 * 30,
    phone: 97254436302,
    imgUrl: 'https://robohash.org/set_set3/rondelicious?size=64x64'
}
export function login(credentials) {
    console.log(credentials)
    return dispatch => authService.login(credentials)
        .catch(err => {
            alert(err);
        })
        .then((user) => dispatch({ type: 'SET_USER', user }));
}

export function signup(credentials) {
    return dispatch => authService.signup(credentials)
        .catch(err => {
            alert(err);
            return DEFAULT_USER;
        })
        .then(user => dispatch({ type: 'SET_USER', user }));
}

export function logout() {
    return dispatch => authService.logout()
        .catch(err => alert(err, 'there is no server'))
        .then(() => dispatch({ type: 'CLR_USER' }));
}
export function updateUser(user) {
    return dispatch => userService.update(user)
        .then((user) => dispatch({ type: 'SET_USER', user }));
}
// console.log(this.props.login())