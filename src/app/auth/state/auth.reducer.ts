import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface UserState {
    user: any | null;
    isAuthenticated: boolean;
}

export const initialState: UserState = {
    user: null,
    isAuthenticated: false
};

export const userReducer = createReducer(
    initialState,
    on(login, (state, { user }) => ({
        ...state,
        user,
        isAuthenticated: true
        })
    ),
    on(logout, (state) => ({
        ...state,
        user: null,
        isAuthenticated: false
    }))
);