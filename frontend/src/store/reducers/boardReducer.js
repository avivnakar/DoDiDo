const initialState = {
    boards: [],
    currBoard: null,
    currCard: null,
    cardMenuOpen: false
}
//consts in the reducer 
export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CARD':
            return { ...state, currCard: action.card };

        case 'SET_BOARD':
            return { ...state, currBoard: action.board };
        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board),
                currBoard: action.board
            };
        case 'UPDATE_CARD':
            return {
                ...state,
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board),
                currBoard: action.board
            };
        case 'ADD_BOARD':
            return {
                ...state,
                boards: [...state.boards, action.board]
            };
        case 'SET_BOARDS':
            return { ...state, boards: action.boards };
        case 'TOGGLE_CARD_MENU':
            return { ...state, cardMenuOpen: !state.cardMenuOpen }
        default:
            return state

    }
}