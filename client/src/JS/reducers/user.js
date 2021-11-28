import { LOAD_USER, REGISTER_USER, LOGIN_USER, FAIL_USER, LOGOUT_USER, CURRENT_USER, AUTH_FAIL,  GET_AUTH_USER } from "../constants/users"

const initialState = {
    loading: false,
    user: {},
    errors: null
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loading: true }
        case REGISTER_USER:
            return { ...state,errors:null, user: payload, loading: false }
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return { ...state,errors:null, user: payload.user, loading: false }
        case CURRENT_USER:
            return { ...state,errors:null, user: payload, loading: false }
        case FAIL_USER:
            return { ...state, errors: payload, loading: false }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                loading: false,
                user: {},
                errors: null
            }
            case GET_AUTH_USER:
              return{
                ...state, 
              user: payload.user,
              isLoading: false,
              isAuth: true,
             
      
              };
      case AUTH_FAIL:
      
        return{
          ...state,
          user: null,
        token: null,
        isLoading: false,
        isAuth: false,
        }
        default:
            return state
    }
    
        
}
