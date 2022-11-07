import * as types from './types';
import RequestStatus from '../RequestStatus';

export const initialState: types.ApplicationsState = {
  setApplicationsState: RequestStatus.Initial,
  addApplicationState: RequestStatus.Initial,
};

const applicationReducer = (state = initialState, action: types.ApplicationsActionTypes) => {
  switch (action.type) {
    case types.SET_APPLICATIONS_REQUESTED:
      return { ...state, setApplicationsState: RequestStatus.Requested };
    case types.ADD_APPLICATION_REQUESTED:
      return { ...state, addApplicationState: RequestStatus.Requested };
    default:
      return state;
  }
};

export default applicationReducer;
