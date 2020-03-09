import {RECEIVE_TWEETS, TOGGLE_TWEET} from '../actions/tweets';

const intialStateTweets = {
    tweets:{}
    
}

export const tweetsReducers = (state=intialStateTweets, action={})=>{
    switch (action.type){
        case RECEIVE_TWEETS:
            return {...state, tweets:action.payload};
        case TOGGLE_TWEET:
            console.log({...state["'8xf0y6ziyjabvozdd253nd'"]});
            console.log(state);

            return {
                ...state, 
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true 
                    ? state[action.id].likes.filter((uid)=>uid!==action.authedUser)
                    : state[action.id].likes.concat([action.authedUser])
            }};
        default: 
            return state;
    }

}