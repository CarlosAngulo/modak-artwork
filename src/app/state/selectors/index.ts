import { createSelector } from '@ngrx/store';

// Selector para acceder a la propiedad 'currentLanguage' del estado 'language'
export const selectCurrentLanguage = createSelector(
  (state: any) => state.language,
  (language) => language.currentLanguage
);
