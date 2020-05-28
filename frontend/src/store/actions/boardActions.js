import { boardService } from '../../services/boardService';
import { utilService } from '../../services/utilService';//makeid for lists and cards
import { socketService } from '../../services/socketService';
import { httpService } from '../../services/httpService';
// httpService.checkServer('.','brew coffee')
// .then(res=>console.log(res))
// .catch(err=>console.error(err))
// socketService.setup();


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


export function setBoard(board = null) {
    return dispatch => dispatch({ type: 'SET_BOARD', board })
}
export function setCard(card = null) {
    return dispatch => dispatch({ type: 'SET_CARD', card })
}
export function addBoard(board) {
    socketService.emit('boards updated');
    return dispatch => {
        return boardService.add(board)
            .then(dispatch({ type: 'ADD_BOARD', board }))
    }
}

export function updateBoardSync(board) {
    return dispatch => dispatch({ type: 'UPDATE_BOARD', board });

}
export function updateBoard(board) {
      socketService.emit('board updated',board)
    return dispatch => {
        dispatch({ type: 'UPDATE_BOARD', board });
        return boardService.update(board)
            // .then(res => {
            //     dispatch({ type: 'UPDATE_BOARD', board: res })
            //     return res;
            // });
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
export function removeCard(board, list, cardId) {
    const idx = board.cardLists.findIndex(currList => currList.id === list.id)
    const cardIdx = board.cardLists[idx].cards.findIndex(card => card.id === cardId);
    console.log({
        board, list, cardId, idx, cardIdx
    });

    const newBoard = { ...board }
    newBoard.cardLists[idx].cards.splice(cardIdx, 1)
    // const { listIdx, cardIdx } = board.cardLists.reduce((acc, list, listIdx) => {
    //     if (!((acc.cardIdx) && (acc.listIdx))) {
    //         const idx = utilService.getIdxById(cardId,list.cards);
    //         if (idx >= 0) acc = { listIdx, cardIdx: idx };
    //     }
    //     return acc;
    // }, {});
    // console.log("po",listIdx,cardIdx)

    return updateBoard(newBoard);
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
    return updateBoard(board);
}
export function updateList(board, list) {
    const idx = utilService.getIdxById(board, list.id);
    board.cardLists.splice(idx, 1, list);
    return updateBoard(board);
}
export function addCard(board, list, title, createdBy) {
    const idx = utilService.getIdxById(board, list.id);
    const card = _createCard(title, createdBy);
    list.cards.push(card);
    board.cardLists.splice(idx, 1, list);
    return updateBoard(board);
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


