import { combineReducers } from 'redux';

import applicationReducer, { initialState as applicationsState } from './applications/reducers';

export const rootReducer = combineReducers({
  applications: applicationReducer,
});

const State = {
  applications: applicationsState,
};

export type RootState = typeof State;
