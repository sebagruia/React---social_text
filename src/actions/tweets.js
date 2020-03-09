import {saveLikeToggle} from '../utils/api';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';

export const receiveTweets = (tweets)=>{
    return {
        type:RECEIVE_TWEETS,
        payload:tweets
    }
}

export const toggleTweet = ({id, authedUser, hasLiked})=>{
    return {
        type:TOGGLE_TWEET,
        id:id,
        authedUser:authedUser,
        hasLiked:hasLiked

    }
}

export const handleToggleTweet = (info)=>(dispatch)=>{

        dispatch(toggleTweet(info));

        return saveLikeToggle(info)
            .catch((e)=>{
                console.warn('Error in handleToggleTweet: ', e);
                dispatch(toggleTweet(info));
                alert('This was an error liking the tweet. Try again.');
            })
}