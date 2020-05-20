
const initialState = {
    user=null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'UPDATE_USER':
        case 'SIGNUP':
        case 'LOGOUT':
            return { user: action.user }

        default:
            return state

    }
}