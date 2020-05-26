
const initialState = {
    user: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { user: action.user }
        case 'CLR_USER':
            return { user: null }
        default:
            return state

    }
}