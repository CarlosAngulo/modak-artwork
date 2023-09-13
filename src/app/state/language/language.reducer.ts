import { createReducer, on } from '@ngrx/store';
import { switchToEnglish, switchToSpanish } from './language.actions';

export interface LanguageState {
  lang: string;
}

export const initialState: LanguageState = {
  lang: 'en',
};

export const languageReducer = createReducer(
  initialState,
  on(switchToSpanish, (state) => ({
      ...state,
      lang: 'es',
    })
  ),
  on(switchToEnglish, (state) => ({
      ...state,
      lang: 'en',
    }))
);