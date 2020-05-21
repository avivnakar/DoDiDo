const initialState = {
    boards: [],
    currBoard: null
    // currCard:null
}
//consts in the reducer 
export function boardReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_CARD':
        //     return { ...state, currCard: action.currCard };
        // case 'CLR_CARD':
        //     return { ...state, currCard: null };
        case 'SET_BOARD':

            return { ...state, currBoard: action.board };
        case 'UPDATE_BOARD':
            return {
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board),
                currBoard: action.board
            };
        case 'ADD_BOARD':
            return {
                ...state,
                boards: [...state.boards, action.board]
            };
        case 'UPDATE_BOARDS':
            return { ...state, boards: action.boards };
        case 'SET_BOARDS':
            return { ...state, boards: action.boards };
        case 'CLR_BOARD':
            return { ...state, board: null };
        case 'CLR_BOARDS':
            return { ...state, boards: [] };
        default:
            return state

    }
}