import {userReducer} from './userReducer'
//import {boardReducer} from './boarReducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    userReducer
})