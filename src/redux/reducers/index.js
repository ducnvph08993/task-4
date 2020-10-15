import { combineReducers } from 'redux';
import employees from './employees';
import inputs from './inputs';

export default combineReducers({
    employees,
    inputs,
})