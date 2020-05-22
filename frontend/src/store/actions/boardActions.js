import { boardService } from '../../services/boardService';
// import { utilService } from '../../services/utilService';//makeid for lists and cards

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
export function loadBoard(id) {
    return dispatch => {
        return boardService.get(id)
            .then(board => {
                dispatch({ type: 'SET_BOARD', board });
            })
    }
}
// export function removeCar(carId) {
//     return dispatch => {
//         carService.remove(carId)
//             .then(() => dispatch({ type: 'REMOVE_CAR', carId }))
//     }
// }

export function setBoard(board = null) {
    return dispatch => dispatch({ type: 'SET_BOARD', board })
}
export function setCard(card = null) {
    return dispatch => dispatch({ type: 'SET_CARD', card })
}
export function addBoard(board) {
    return dispatch => {
        return boardService.add(board)
            .then(dispatch({ type: 'ADD_BOARD', board }))
    }
}
export function updateBoard(board) {
    return dispatch => {
        dispatch({ type: 'UPDATE_BOARD', board });
        return boardService.update(board)
            .then(res => {
                dispatch({ type: 'UPDATE_BOARD', board: res })
                return res;
            });
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


