import {userReducer} from './userReducer';
import {boardReducer} from './boardReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    user:userReducer,
    board:boardReducer
})