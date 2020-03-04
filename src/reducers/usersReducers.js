import {RECEIVE_USERS} from '../actions/users';

export const usersReducers = (state={}, action={})=>{
    switch (action.type){
        case RECEIVE_USERS:
            return {...state, users:action.payload};
        default: 
            return state;
    }

}
