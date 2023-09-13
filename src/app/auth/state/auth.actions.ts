import { createAction, props } from "@ngrx/store";

export const login = createAction('[User] Login', props<{user:any}>());
export const logout = createAction('[User] Logout');