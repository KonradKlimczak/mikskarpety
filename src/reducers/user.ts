import { UserAction } from '../actions';
import { getCookie } from '../utils/cookies';

export interface IUserState {
  analitics: boolean;
  search: string;
}

const initialState: IUserState = {
  analitics: getCookie('analitics') === 'true',
  search: '',
};

export function user(state = initialState, action: UserAction): IUserState {
  switch (action.type) {
    case 'ACCEPT_COOKIES':
      return { ...state, analitics: true };
    case 'SEARCH_ITEM':
      return { ...state, search: action.value };
    default:
      return state;
  }
}
