import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const initState = {
  staffs: STAFFS,
  dept: DEPARTMENTS,
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_STAFF':
      const newStaff = action.payload;
      state.dept.find(dept => dept.name === newStaff.department.name)
        .numberOfStaff++;

      return {
        ...state,
        staffs: state.staffs.concat(newStaff),
        dept: state.dept,
      };
    default:
      return state;
  }
};
