import {combineReducers} from 'redux'
import reducer from './reducer';

const allReducers = combineReducers({
 rootReducer : reducer
});


export default allReducers;