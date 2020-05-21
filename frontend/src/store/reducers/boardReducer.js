
const initialState = {
    board:null,
    boards:null,
    currCard:null
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST':
        case 'UPDATE_CARD':
            return { ...state, currCard: action.currCard };
        case 'UPDATE_BOARD':
            return { ...state, board: action.board };
        case 'SET_BOARDS':
            return { ...state, boards: action.boards };

        default:
            return state

    }
}