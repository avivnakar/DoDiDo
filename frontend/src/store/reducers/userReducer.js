
const initialState = {
    user: {
        _id: 'userid',
        fullName: 'Gal Rondel',
        userName: 'rondelicious',
        password: 'DoDiDo',
        lastLoginAt: Date.now() - 1000 * 60 * 30,
        phone: 97254436302,
        imgUrl:'https://robohash.org/set_set3/rondelicious?size=64x64'
    }
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