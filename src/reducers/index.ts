import { combineReducers } from 'redux';
import { user, UserState } from './user';

export interface AppState {
  user: UserState;
}

const reducers = combineReducers({
  user
});

export default reducers;
