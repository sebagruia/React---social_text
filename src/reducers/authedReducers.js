import {SET_AUTHED_USER} from '../actions/authedUser';

const initialStateAuthed = {
    authed:null
}

export const authedReducers = (state=initialStateAuthed, action={})=>{
    switch (action.type){
        case SET_AUTHED_USER:
            return {...state, id:action.payload};
        default: 
            return state;
    }

}