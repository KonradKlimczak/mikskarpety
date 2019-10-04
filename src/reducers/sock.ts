import { SockAction } from '../actions/sock';
import { ISock } from '../data/Sock';
import { RemoteData, RemoteDataKind } from '../utils';

export interface ISockState {
  list: RemoteData<ISock[]>;
}

const initialState: ISockState = {
  list: { kind: RemoteDataKind.NotAsked },
};

export function sock(state = initialState, action: SockAction): ISockState {
  switch (action.type) {
    case 'REQUEST_SOCK':
      return { ...state, list: { kind: RemoteDataKind.Loading } };
    case 'RECEIVE_SOCK':
      return { ...state, list: { kind: RemoteDataKind.Success, data: action.list } };
    case 'FAILED_SOCK':
      return { ...state, list: { kind: RemoteDataKind.Failure, error: action.error } };
    default:
      return state;
  }
}
