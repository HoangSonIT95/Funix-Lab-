import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const initState = {
  staffs: localStorage.getItem('staffs')
    ? JSON.parse(localStorage.getItem('staffs'))
    : STAFFS,
  dept: localStorage.getItem('department')
    ? JSON.parse(localStorage.getItem('department'))
    : DEPARTMENTS,
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_STAFF':
      const newStaff = action.payload;
      state.staffs.push(newStaff);
      localStorage.setItem('staffs', JSON.stringify(state.staffs  ));
      let staffs = JSON.parse(localStorage.getItem('staffs'));

      state.dept.find(dept => dept.name === newStaff.department.name)
        .numberOfStaff++;
      localStorage.setItem('department', JSON.stringify(state.dept));
      let dept = JSON.parse(localStorage.getItem('department'));

      return { ...state, staffs, dept };
    case 'SORT_SALARY':
      localStorage.setItem('staffs', JSON.stringify(action.payload));
      staffs = JSON.parse(localStorage.getItem('staffs'));
      return { ...state, staffs };
    default:
      return state;
  }
};
