import { GET_NEWS, GET_PRICE, GET_SONG, SET_TITLE, SET_TEXT, SET_LOADING,
       SET_ERROR, CLEAR_ERROR, STOP_LOADING} from "./types";

const main_reducer = (state,action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
        case SET_ERROR:
            return {
                ...state,
                error: {msg:action.payload.msg,type:action.payload.type}
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error:null
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case STOP_LOADING:
                return {
                    ...state,
                    loading:false
                }
        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case SET_TITLE:
            return {
                ...state,
                title:action.payload
            }
        case GET_PRICE:
            return {
                ...state,
                price:action.payload,
                loading:false
            }
        case GET_SONG:
                return {
                    ...state,
                    song:action.payload,
                    loading:false
                }
        case GET_NEWS:
            return {
                ...state,
                news:action.payload,
                loading:false
            }
    }
}

export default main_reducer