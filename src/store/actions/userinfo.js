import { createAction } from "redux-actions";
import { GET_USERINFO } from '../types';

export const getUserInfo = createAction(GET_USERINFO, (data) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data)
        },1000)
    })
})