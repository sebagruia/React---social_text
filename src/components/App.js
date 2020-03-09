import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Dashboard from '../components/Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from '../components/NewTweet';

const mapStateToProps = (state)=>{
  const authedUser = state.authedReducers.authed;
  return {
    loading:authedUser === null
  }
}

const mapDispachToProps = (dispatch)=>{
  return{
    handleInitialData: ()=>dispatch(handleInitialData())
  }
}

class App extends Component {
componentDidMount (){
  this.props.handleInitialData();
}

  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading === true ? null
          : <NewTweet />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);