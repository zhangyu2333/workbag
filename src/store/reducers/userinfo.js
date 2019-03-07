import { handleActions } from 'redux-actions';
import { SET_USERINFO,GET_USERINFO } from '../types'
export default handleActions({
    [SET_USERINFO](state,action){
        return {
            ...state,
            info:action.payload.info
        }
    },
    [GET_USERINFO](state,action){
        console.log(state,action)
        return {
            ...state,
            users:action.payload.data
        }
    }
},{
    info:"132",
    users:{}
})