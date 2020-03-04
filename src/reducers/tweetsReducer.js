import {RECEIVE_TWEETS} from '../actions/tweets';

export const tweetsReducers = (state={}, action={})=>{
    switch (action.type){
        case RECEIVE_TWEETS:
            return {...state, tweets:action.payload};
        default: 
            return state;
    }

}