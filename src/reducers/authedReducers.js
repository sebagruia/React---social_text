import {SET_AUTHED_USER} from '../actions/authedUser';

const initialStateAuthed = {
    authedUser:null
}

export const authedReducers = (state=initialStateAuthed, action={})=>{
    switch (action.type){
        case SET_AUTHED_USER:
            return {...state, authedUser:action.payload};
        default: 
            return state;
    }

}