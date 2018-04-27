
import { combineReducers } from 'redux';
import { calcEffortReducer } from './calcEffortReducer';
import { selectDataReducer } from './selectDataReducer';

const rootReducer = combineReducers({
  calcEffortReducer,
  selectDataReducer,
});

export default rootReducer;
