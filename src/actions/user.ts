export type UserAction = { type: 'ACCEPT_COOKIES' } | { type: 'SEARCH_ITEM'; value: string };

export function acceptCookies(): UserAction {
  return {
    type: 'ACCEPT_COOKIES',
  };
}

export function search(value: string): UserAction {
  return {
    type: 'SEARCH_ITEM',
    value,
  };
}
