import * as ActionTypes from './ActionTypes';

export const Staffs = (
  state = { isLoading: true, errMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
      const newStaff = action.payload;
      return { ...state, staffs: [...state.staffs, newStaff] };
    case ActionTypes.STAFFS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };

    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };

    case ActionTypes.STAFFS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
