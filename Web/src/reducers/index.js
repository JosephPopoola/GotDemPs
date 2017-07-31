import { combineReducers } from 'redux';

import user from './user';
import deductionType from './deductionType';


const rootReducer = combineReducers({
    user,
    deductionType
});

export default rootReducer;