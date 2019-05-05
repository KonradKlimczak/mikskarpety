import { RemoteData, RemoteDataKind } from '../utils/RemoteData';
import { Sock, SockAction } from '../actions/sock';

export interface SockState {
  list: RemoteData<Sock[]>;
}

const initialState: SockState = {
  list: { kind: RemoteDataKind.NotAsked }
};

export function sock(state = initialState, action: SockAction): SockState {
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
