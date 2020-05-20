import { boardService } from '../../services/boardService';

// export async function loadBoards(filter) {
//     const boards = await boardService.query(filter)
//     return dispatch => dispatch({ type: 'SET_BOARDS', boards });
// }
export function loadBoards(criteria) {
        return dispatch => {
        return boardService.query(criteria)
            .then(boards => dispatch({ type: 'SET_BOARDS', boards }))
    }
}