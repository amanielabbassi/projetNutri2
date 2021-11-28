import {GET_ARTICL_SUCCESS,GET_ARTICL_FAIL, LOAD_ARTICL,ADD_ARTICL_SUCCESS,ADD_ARTICL_FAIL} from '../constants/articlConst'
const initialState={
   articl:[],
    errors:null,
    isLoading:false,

}
export const allArticl= (state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_ARTICL:
            return{...state,isLoading:true}
            case GET_ARTICL_SUCCESS:
            return{...state,articl:payload, isLoading:false}
            case GET_ARTICL_FAIL:
                return{...state,errors:payload, isLoading:false}
           
    
        default:
            return state
    }
}