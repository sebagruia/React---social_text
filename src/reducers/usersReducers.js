import {RECEIVE_USERS} from '../actions/users';

const intialStateUsers = {
    users:{}
}


export const usersReducers = (state=intialStateUsers, action={})=>{
    switch (action.type){
        case RECEIVE_USERS:
            return {...state, users:action.payload};
        default: 
            return state;
    }
}
