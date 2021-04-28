// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
  try {
    // getItem can throw an Error if the user privacy mode doesn't allow the use of localStorage
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined; // let the reducer initialize the state instead
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};
