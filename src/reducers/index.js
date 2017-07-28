import { combineReducers } from 'redux';

import user from './user';
import expenditure from './expenditure';
import mansPs from './mansPs';
import deductionType from './deductionType';


const rootReducer = combineReducers({
    user,
    expenditure,
    mansPs,
    deductionType
});

export default rootReducer;