import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs';

export const addStaff = staff => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});

export const fetchStaffs = () => dispatch => {
  dispatch(staffsLoading(true));

  setTimeout(() => {
    dispatch(addStaffs(STAFFS));
  }, 2000);
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = errmess => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const addStaffs = staffs => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});
