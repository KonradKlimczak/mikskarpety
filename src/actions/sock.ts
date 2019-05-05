export type SockAction =
  | { type: 'REQUEST_SOCK' }
  | { type: 'RECEIVE_SOCK'; list: Sock[] }
  | { type: 'FAILED_SOCK'; error: Error };

interface SockSize {
  from: number;
  to: number;
}

export interface Sock {
  name: string;
  src: string;
  sizes: SockSize[];
}

export function requestSock(): SockAction {
  return {
    type: 'REQUEST_SOCK'
  };
}

export function receiveSock(list: Sock[]): SockAction {
  return {
    type: 'RECEIVE_SOCK',
    list
  };
}

export function failedSock(error: Error): SockAction {
  return {
    type: 'FAILED_SOCK',
    error
  };
}
