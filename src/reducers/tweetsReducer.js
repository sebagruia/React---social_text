import {RECEIVE_TWEETS} from '../actions/tweets';

const intialStateTweets = {
    tweets:{}
}

export const tweetsReducers = (state=intialStateTweets, action={})=>{
    switch (action.type){
        case RECEIVE_TWEETS:
            return {...state, tweets:action.payload};
        default: 
            return state;
    }

}