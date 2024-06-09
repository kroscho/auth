import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  themeMode: 'light' | 'dark';
}
const initialState: ThemeState = {
  themeMode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
