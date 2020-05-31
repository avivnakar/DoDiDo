import axios from 'axios';

function makeId(length = 3) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

/**
 * @param {any} id object attribute e.g. obj.id
 * @param {object[]} arr arr = [{},{},...]
 * @returns {number}  index of obj i.e. obj.id===id
 *
 *  */
function getIdxById(id, arr) {
    return arr.findIndex(obj => obj.id === id)
}
export const utilService = {
    makeId,
    getIdxById,
    uploadImg
}

function uploadImg(ev) {
    const CLOUD_NAME = 'rondeliahu'; // find it in your cloudinary account (main page)
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', ev.target.files[0]);
    formData.append('upload_preset', 'DoDiDo'); // second parameter is the upload preset (you can find it in cloudinary settings)

    return axios.post(UPLOAD_URL, formData)
        .then(res => {
            console.log(res);
            console.log(res.data.url);
            return res.data.url
        })
        .catch(err => console.error(err))
}
