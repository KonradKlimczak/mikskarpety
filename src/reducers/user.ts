import { UserAction } from '../actions';

export interface UserState {
  analitics: boolean;
  search: string;
}

const initialState: UserState = {
  analitics: false,
  search: ''
};

export function user(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case 'ACCEPT_COOKIES':
      return { ...state, analitics: true };
    case 'SEARCH_ITEM':
      return { ...state, search: action.value };
    default:
      return state;
  }
}
