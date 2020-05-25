import {httpService} from './httpService';

export const userService = {
    query,
    getById,
    update
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}
/**
 * 
 * @param {*} criteria filter by username or fullname 
 */
function query(criteria) {
    return httpService.get(`user/${criteria}`);
}