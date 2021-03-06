import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Screen = 'start' | 'play' | 'results' | 'menu';

type SliceState = {
  screen: Screen;
};

// https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
// The state must be a JS object or array in order for immer to see the attempted changes
const initialState: SliceState = {
  screen: 'start',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<Screen>) => {
      state.screen = action.payload;
    },
  },
});

export const { goTo } = appSlice.actions;

export default appSlice.reducer;
