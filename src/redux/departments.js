import { DEPARTMENTS } from '../shared/staffs';
import * as ActionTypes from './ActionTypes';

export const Departments = (
  state = { isLoading: true, errMess: null, dept: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.DEPT:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dept: action.payload,
      };

    case ActionTypes.DEPT_LOADING:
      return { ...state, isLoading: true, errMess: null, dept: [] };

    case ActionTypes.DEPT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
