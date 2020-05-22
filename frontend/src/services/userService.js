import {httpService} from './httpService';

export const userService = {
    getById,
    update
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}
