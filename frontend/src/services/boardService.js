import axios from 'axios'

const baseBoardUrl = 'http://localhgost:3030/:username/boards'

export const boardService = {
    query,
    save,
    getById,
}

async function query(filter=null){
    try {
        return await axios.get(`/username/${baseBoardUrl}`)
        .then(res=> res.data)
    } catch (error) {
        console.error(error);
        console.log('%c no backend, return a fake data for production','color:yellow;')
        return [{ _id: '1', name: 'rondelicious' }]
    }
}
function getById(id) {
    return axios.get(`${baseBoardUrl}/${id}`)
        .then(res => res.data)
}

function save(board) {
    let prm;
    if (board._id) {
        prm = axios.put(`${baseBoardUrl}/${board._id}`, board)
    } else {
        prm = axios.post(`${baseBoardUrl}`, board)
    }
    return prm.then(res => res.data);
}