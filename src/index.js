import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from './middleware/logger';
import {usersReducers} from './reducers/usersReducers';
import {tweetsReducers} from './reducers/tweetsReducer';
import {authedReducers} from './reducers/authedReducers';
import {loadingBarReducer} from 'react-redux-loading';
import './index.css';
import App from './components/App';

const rootReducer = combineReducers({usersReducers, tweetsReducers, authedReducers, loadingBar: loadingBarReducer});
//The code below is just for enabling Chrome Redux DEvTools=============
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//The "store" const bellow has the composeEnhancers function as paramter because I wanted to use Chrome Redux DEvTools, the app works without it just fine 
//======================================================================
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)) );


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
    ); 