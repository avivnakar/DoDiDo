import { httpService } from './httpService';
const entity = 'board';

export const boardService = {
  query,
  getById,//TODO:refactor
  get,
  remove,
  update,
  add
}

function query(criteria) {
  try {
    return httpService.get(entity, criteria);
  } catch (error) {
    console.error(error)
  }
}
function getById(id) {
  try {
    return get(id);
  } catch (error) {
    console.error(error)
  }
}
function get(id) {
  try {
    return httpService.get(`${entity}/${id}`);
  } catch (error) {
    console.error(error)
  }
}

function remove(boardId) {
  try {
    return httpService.delete(`${entity}/${boardId}`);
  } catch (error) {
    console.error(error)
  }
}

function update(board) {
  try {
    return httpService.put(`${entity}/${board._id}`, board)
  } catch (error) {
    console.error(error)
  }
}
function add(board) {
  try {
    return httpService.post(entity, board);
  } catch (error) {
    console.error(error)
  }
}













/*.then(newBoard=>{
    newBoard.cardLists[1].cards.push( {
        id: Date.now(),
        title: 'kek aviv is a king',
        labels: [
          {
            title: 'IT',
            color: 'red'
          },
          {
            title: '',
            color: 'orange'
          }
        ],
        createdBy: {
          _id: 'u401',
          fullName: 'Aviv Nakar',
          imgUrl: 'adf.jpg'
        },
        cardMembers: [
          {
            _id: 'u401',
            fullName: 'Aviv Nakar',
            imgUrl: 'adf.png'
          }
        ],
        desc: 'testin testin testing',
        dueDate: 5413234551234,
        cheklists: [
          {
            id: '14s3',
            title: 'checklist22',
            todos: [
              {
                id: '14sf3',
                text: 'lorem blabla bla bla bla',
                doneAt: 14325434545,
                doneBy: {
                  _id: 'u401',
                  fullName: 'Aviv Nakar',
                  imgUrl: 'adf.jpg'
                }
              }
            ]
          }
        ],
        attachments: [
          {
            id: '23s4',
            name: 'lorem',
            url: '././img/ape.jpg',
            addedBy: {
              _id: 'u401',
              fullName: 'Aviv Nakar',
              imgUrl: 'adf.jpg'
            }
          }
        ]
      })
      return newBoard;
});*/




// import axios from 'axios'

// // const baseBoardUrl = 'http://localhgost:3000/:username/boards'//frontend- <Route component={Boards} path="/:username/boards" />
// const baseBoardUrl = 'http://localhgost:3030/api/board'

// export const boardService = {
//     query,
//     save,
//     getById,
// }

// async function query(filter=null){
//     try {
//         return await httpService.get('board');
//         // return await axios.get(`/username/${baseBoardUrl}`)
//         // .then(res=> res.data)
//     } catch (error) {
//         console.error(error);
//         console.log('%c no backend, return a fake data for production','color:yellow;')
//         return [{ _id: '1', name: 'rondelicious' }]
//     }
// }
// function getById(id) {
//     return axios.get(`${baseBoardUrl}/${id}`)
//         .then(res => res.data)
// }

// function save(board) {
//     let prm;
//     if (board._id) {
//         prm = axios.put(`${baseBoardUrl}/${board._id}`, board)
//     } else {
//         prm = axios.post(`${baseBoardUrl}`, board)
//     }
//     return prm.then(res => res.data);
// }