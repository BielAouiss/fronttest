import counterReducer from './counter';
import loggedReducer from './isLogged';
import allHotelsReducer from './allHotelsReducer';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter : counterReducer,
    logged : loggedReducer,
    allHotelsReducer : allHotelsReducer
});

export default  allReducers;