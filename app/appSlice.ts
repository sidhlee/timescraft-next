import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Screen = 'start' | 'play' | 'score' | 'menu';

// https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
// The state must be a JS object or array in order for immer to see the attempted changes
const initialState = {
  screen: 'start' as Screen,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<Screen>) => {
      console.log('setScreen');
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = appSlice.actions;

export default appSlice.reducer;
