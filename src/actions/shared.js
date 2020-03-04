import {getInitialData} from '../utils/api';
import {receiveUsers} from '../actions/users';
import {receiveTweets} from '../actions/tweets';
import {setAuthedUser} from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = ()=>(dispach)=>{
    return getInitialData()
        .then(({users, tweets})=>{
            dispach(receiveUsers(users));
            dispach(receiveTweets(tweets));
            dispach(setAuthedUser(AUTHED_ID));
        })
}