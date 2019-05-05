import { combineReducers } from 'redux';
import { user, UserState } from './user';
import { sock, SockState } from './sock';

export interface AppState {
  user: UserState;
  sock: SockState;
}

const reducers = combineReducers({
  user,
  sock
});

export default reducers;
