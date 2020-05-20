import axios from 'axios'

const baseBoardUrl = 'http://localhgost:3030/:username/boards'

export {
    query,
    save,
    getById,
}

function query(filter=null){
    return axios.get(`/username/${baseBoardUrl}`)
    .then(res=> res.data)
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