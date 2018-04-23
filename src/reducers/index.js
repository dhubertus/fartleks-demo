
import { combineReducers } from 'redux';
import { calcEffortReducer } from './calcEffortReducer';

const rootReducer = combineReducers({
  calcEffortReducer,
});

export default rootReducer;
