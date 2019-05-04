import { RemoteData, RemoteDataKind } from '../utils/RemoteData';

export interface Sock {
  name: string;
}

export interface SockState {
  list: RemoteData<Sock[]>;
}

const initialState: SockState = {
  list: { kind: RemoteDataKind.NotAsked }
};

export function user(state = initialState, action: any): SockState {
  switch (action.type) {
    default:
      return state;
  }
}
