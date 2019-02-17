import { combineReducers } from 'redux';
import pairsReducer from './pairs';

const reducer = combineReducers({
    pairs: pairsReducer,
})

export default reducer;