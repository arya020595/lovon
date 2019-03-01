import { combineReducers } from 'redux';

import Items from './Items';
import Users from './Users';

const appReducer = combineReducers({
    Items, Users
});

export default appReducer;