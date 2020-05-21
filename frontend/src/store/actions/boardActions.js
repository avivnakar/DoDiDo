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
export function setBoard(board) {
    return dispatch => dispatch({ type: 'SET_BOARD', board })
}
export function addBoard(board) {
    return dispatch => {
        return async () => {
            const prm = await boardService.update(board);
            dispatch({ type: 'ADD_BOARD', board });
            return prm;
        };
    }
}
// export function loadBoards(criteria) {
//     return dispatch => {
//         return boardService.query(criteria)
//             .then(boards => dispatch({ type: 'SET_BOARDS', boards }))
//     }
// }


// export function saveBoard(car) {
//     return dispatch => {
//       const type = car._id ? 'UPDATE_CAR' : 'ADD_CAR';
//       carService.save(car)
//         .then(savedCar => dispatch({ type, car: savedCar }))

//     }
//   }


