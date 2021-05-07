import { configureStore } from '@reduxjs/toolkit';
import gameplayReducer from '../features/gameplay/gameplaySlice';
import screenReducer from './appSlice';
import { saveState } from './localStorage';
import throttle from 'lodash/throttle'; // tree-shakable

const store = configureStore({
  reducer: {
    app: screenReducer,
    gameplay: gameplayReducer,
  },
});

// called any time an action is dispatched.
// you can access state by calling store.getState()
store.subscribe(
  throttle(() => {
    // throttled to run at most once per 1000ms
    // because JSON.stringify is expensive operation to be called for every action
    const {
      gameplay: { tables, score, level },
    } = store.getState();

    // only persist states related to progress & score
    saveState({
      tables,
      score,
      level,
    });
  }, 1000)
);

// https://redux-toolkit.js.org/tutorials/typescript#project-setup
// Define Root State and Dispatch Types

// Inferring types directly from the store
// so that they can get correctly updated as you add more state slices
// or modify middleware settings
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
