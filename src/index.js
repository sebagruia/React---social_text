import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {usersReducers} from './reducers/usersReducers';
import {tweetsReducers} from './reducers/tweetsReducer';
import {authedReducers} from './reducers/authedReducers';
import './index.css';
import App from './components/App';

const rootReducer = combineReducers();

const store = createStore(usersReducers, tweetsReducers, authedReducers);

ReactDOM.render(<App />, document.getElementById('root'))