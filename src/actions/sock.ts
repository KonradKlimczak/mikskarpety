import { ISock } from '../data/Sock';

export type SockAction =
  | { type: 'REQUEST_SOCK' }
  | { type: 'RECEIVE_SOCK'; list: ISock[] }
  | { type: 'FAILED_SOCK'; error: Error };

export function requestSock(): SockAction {
  return {
    type: 'REQUEST_SOCK',
  };
}

export function receiveSock(list: ISock[]): SockAction {
  return {
    list,
    type: 'RECEIVE_SOCK',
  };
}

export function failedSock(error: Error): SockAction {
  return {
    error,
    type: 'FAILED_SOCK',
  };
}
