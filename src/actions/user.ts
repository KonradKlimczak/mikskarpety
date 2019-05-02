export type UserAction = { type: 'ACCEPT_COOKIES' };

export function acceptCookies(): UserAction {
  return {
    type: 'ACCEPT_COOKIES'
  };
}
