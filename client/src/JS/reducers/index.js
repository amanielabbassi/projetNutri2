import {combineReducers} from "redux"
import {userReducer} from "./user"
import {profileReducer} from "./profilReducer"
import {allArticl} from './articlReducer' 
export const rootReducer=combineReducers({userReducer,profileReducer,allArticl})
