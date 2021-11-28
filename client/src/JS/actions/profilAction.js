import{LOAD_PROFIL,GET_PROFIL_FAIL,GET_PROFIL_SUCCESS,EDIT_PROFIL_FAIL,EDIT_PROFIL_SUCCESS} from "../constants/profil"
import axios from "axios"
export const getProfil =()=>async (dispatch)=>{
    dispatch({type:LOAD_PROFIL})
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const result=await axios.get("/profil/profilnutri",opts)
        dispatch({type:GET_PROFIL_SUCCESS,payload:result.data})
    } catch (error) {
        dispatch({type:GET_PROFIL_FAIL,error})
        
    }
}
export const editProfil =(_id,profil,history)=>async (dispatch)=>{
    dispatch({type:LOAD_PROFIL})
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const result=await axios.put(`/profil/edit/${_id}`,profil,opts)
        dispatch({type:EDIT_PROFIL_SUCCESS,payload:result.data})
        history.push("/profil")
         dispatch(getProfil())

    } catch (error) {
        dispatch({type:EDIT_PROFIL_FAIL,error})
        console.log(error)
    }
    
}