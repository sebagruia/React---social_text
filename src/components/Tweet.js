import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TiHeartOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from 'react-icons/ti';
import {handleToggleTweet} from '../actions/tweets';

const mapStateToProps = (state, { id }) => {
    const tweet = state.tweetsReducers.tweets[id];
    const parentTweet = tweet ? tweet.replyingTo : null;
    return {
        authedUser: state.authedReducers.authedUser,
        tweet: tweet ? formatTweet(tweet, state.usersReducers.users[tweet.author], state.authedReducers.authedUser, parentTweet)
            : null
            
    }


}

class Tweet extends Component {
    handleLike = (event) => {
        event.preventDefault();
        const {dispatch, tweet, authedUser} = this.props;
        console.log(tweet);
        console.log(`${tweet.id}+${tweet.hasLiked}+${authedUser}`);
        dispatch(handleToggleTweet({
            id:tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }));
    }
    toParent = (event, id) => {
        event.preventDefault();
        // todo: Redirect to parent Tweet.

    }

    render() {
        const { tweet } = this.props;
        if (tweet === null) {
            return <p>This Tweet doesn't exist</p>
        }

        const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } = tweet;
        console.log(this.props);
        return (
            <div className='tweet'>
                <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
                <div className='tweet-info '>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {
                            parent && (
                                <button className='replying-to' onClick={(event) => this.toParent(event, parent.id)}>
                                    Replying to @{parent.author}
                                </button>
                            )
                        }
                        <p>{text}</p>
                    </div>


                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {
                                hasLiked === true
                                    ? <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                                    : <TiHeartOutline className='tweet-icon' />
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(Tweet);