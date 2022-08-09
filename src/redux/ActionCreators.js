import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addStaff = staff => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});

export const fetchStaffs = () => dispatch => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + 'staffs')
    .then(response => response.json())
    .then(staffs => dispatch(staffsSuccess(staffs)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = errmess => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const staffsSuccess = staffs => ({
  type: ActionTypes.STAFFS,
  payload: staffs,
});

export const fetchDept = () => dispatch => {
  dispatch(deptLoading(true));

  return fetch(baseUrl + 'departments')
    .then(response => response.json())
    .then(departments => dispatch(deptSuccess(departments)));
};

export const deptLoading = () => ({
  type: ActionTypes.DEPT_LOADING,
});

export const deptFailed = errmess => ({
  type: ActionTypes.DEPT_FAILED,
  payload: errmess,
});

export const deptSuccess = dept => ({
  type: ActionTypes.DEPT,
  payload: dept,
});
