import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const initState = {
  staffs: STAFFS,
  dept: DEPARTMENTS,
};

export const Reducer = (state = initState, action) => {
  return state;
};
