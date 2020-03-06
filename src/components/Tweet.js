import React, { Component } from 'react';
import {connect} from 'react-redux';
import {formatTweet} from '../utils/helpers';
import { render } from 'react-dom';

const mapStateToProps = (state, {id})=>{
    const tweet = state.tweetsReducers.tweets[id];
    return {
        authed: state.authedReducers.authed,
        tweet: formatTweet(tweet, state.usersReducers.users[tweet.author], state.authedReducers.authed),
    }


}

class Tweet extends Component{
    
    render(){
        console.log(this.props);
        return(
            <div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Tweet);