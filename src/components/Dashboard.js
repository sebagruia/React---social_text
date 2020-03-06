import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from '../components/Tweet';

const mapStateToProps = (state) => {
    const tweets = state.tweetsReducers.tweets;
    return {
        tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweetIds.map((id) => (
                        <li key={id}>
                            <Tweet id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Dashboard);