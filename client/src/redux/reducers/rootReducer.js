import { combineReducers } from 'redux';
import { personReducer } from '@src/redux/reducers/personReducer';

export default combineReducers({
	person: personReducer,
});
