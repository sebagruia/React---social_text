import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from './middleware/logger';
import {usersReducers} from './reducers/usersReducers';
import {tweetsReducers} from './reducers/tweetsReducer';
import {authedReducers} from './reducers/authedReducers';
import './index.css';
import App from './components/App';

const rootReducer = combineReducers({usersReducers, tweetsReducers, authedReducers});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
    ); 