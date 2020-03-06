import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Dashboard from '../components/Dashboard';

const mapStateToProps = ({authed})=>{
  // const authed = state.authedReducers.authed;
  return {
    loading:authed === null
  }
}

const mapDispachToProps = (dispach)=>{
  return{
    handleInitialData: ()=>dispach(handleInitialData())
  }
}

class App extends Component {
componentDidMount (){
  this.props.handleInitialData();
}

  render() {
    return (
      <div>
        {
          this.props.loading === true ? null
          : <Dashboard />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);