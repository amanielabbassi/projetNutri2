import{LOAD_PROFIL,GET_PROFIL_FAIL,GET_PROFIL_SUCCESS} from "../constants/profil"
const initialState={
    user:[],
    errors:null,
    isLoading:false,

}
export const profileReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_PROFIL:
            return {...state,isLoading:true}
            case GET_PROFIL_SUCCESS:
                return{...state,isLoading:false,user:payload}
                case GET_PROFIL_FAIL :
                    return{...state,isLoading:false,errors:payload}
            
           
    
        default:
           return state
    }
}