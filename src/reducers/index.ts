import { combineReducers } from 'redux';

import { ISockState, sock } from './sock';
import { IUserState, user } from './user';

export interface IAppState {
  user: IUserState;
  sock: ISockState;
}

const reducers = combineReducers({
  sock,
  user,
});

export default reducers;
