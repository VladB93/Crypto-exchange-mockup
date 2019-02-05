import { combineReducers } from 'redux';
import channelReducer from './channel';

const reducer = combineReducers({
    channels: channelReducer,
})

export default reducer;