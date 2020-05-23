import { boardService } from '../../services/boardService';
import { utilService } from '../../services/utilService';//makeid for lists and cards

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

///bad place
function _createCard(title, createdBy) {
    createdBy = _miniUser(createdBy);
    return {
        id: utilService.makeId(4),
        title,
        labels: [
        ],
        createdBy,
        cardMembers: [createdBy],
        desc: '',
        dueDate: null,
        cheklists: [],
        attachments: []
    }
}
export function removeCard(board, cardId) {
    // const { listIdx, cardIdx } = board.cardLists.reduce((acc, list, listIdx) => {
    //     if (!((acc.cardIdx) && (acc.listIdx))) {
    //         const idx = utilService.getIdxById(cardId,list.cards);
    //         if (idx >= 0) acc = { listIdx, cardIdx: idx };
    //     }
    //     return acc;
    // }, {});
    // console.log("po",listIdx,cardIdx)
    // board.cardLists[listIdx].cards.splice(cardIdx, 1);
    // updateBoard(board);
}
export function removeList(board, listId) {
    const idx = utilService.getIdxById(board, listId);
    board.cardLists.splice(idx, 1);
    updateBoard(board);
}
export function updateCard(board, card) {
    const { listIdx, cardIdx } = board.cardLists.reduce((acc, list, listIdx) => {
        if (!(acc.cardIdx) && (acc.listIdx)) {
            const cardIdx = utilService.getIdxById(list.cards, card.id);
            if (cardIdx) acc = { listIdx, cardIdx };
        }
        return acc;
    }, {});
    board.cardLists[listIdx].cards.splice(cardIdx, 1, card);
    updateBoard(board);
}
export function updateList(board, list) {
    const idx = utilService.getIdxById(board, list.id);
    board.cardLists.splice(idx, 1, list);
    updateBoard(board);
}
export function addCard(board, list, title, createdBy) {
    const idx = utilService.getIdxById(board, list.id);
    const card = _createCard(title, createdBy);
    list.cards.push(card);
    board.cardLists.splice(idx, 1, list);
    updateBoard(board);
}



// function _createCheckList() {
//     createdBy = _miniUser(createdBy);
//     return {
//     }
// }
// function _createAttachment() {
//     createdBy = _miniUser(createdBy);
//     return {
//     }
// }

function _miniUser({ _id, fullName, imgUrl }) {
    return { _id, fullName, imgUrl }
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


