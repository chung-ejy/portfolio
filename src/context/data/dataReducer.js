import { GET_STOCKS, SET_TITLE, SET_TEXT, SET_LOADING,
       SET_ERROR, CLEAR_ERROR, STOP_LOADING,GET_SP500, 
       GET_TICKER_HISTORICALS, 
       SET_TICKER,
        GET_TICKER_RECOMMENDATIONS,
    GET_STRATEGY_PORTFOLIO} from "./types";

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
    }
}

export default main_reducer