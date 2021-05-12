import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Screen = 'start' | 'play' | 'score' | 'menu';

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
    setScreen: (state, action: PayloadAction<Screen>) => {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = appSlice.actions;

export default appSlice.reducer;
