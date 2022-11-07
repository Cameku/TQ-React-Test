import * as types from './types';

/**
 * Sets the applications provided to the Redux store.
 */
export function setApplications(applications: any): types.ApplicationsActionTypes {
  return {
    type: types.ADD_APPLICATION_SUCCESS,
    payload: applications,
  };
}
