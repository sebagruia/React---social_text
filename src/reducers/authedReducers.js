import {SET_AUTHED_USER} from '../actions/authedUser';

export const authedReducers = (state=null, action={})=>{
    switch (action.type){
        case SET_AUTHED_USER:
            return {...state, id:action.payload};
        default: 
            return state;
    }

}