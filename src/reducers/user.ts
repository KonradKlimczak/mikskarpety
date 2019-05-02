import { UserAction } from '../actions';

export interface UserState {
    analitics: {
        cookies: false;
    } | {
        cookies: true;
        searchHistory: string[]
    }
}

const initialState: UserState = {
    analitics: {
        cookies: false
    }
}

export function user(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case "ACCEPT_COOKIES":
            return { ...state, analitics: { cookies: true, searchHistory: [] } }
        default:
            return state
    }
}