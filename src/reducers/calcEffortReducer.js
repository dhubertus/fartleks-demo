export const calcEffortReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CALCULATE_EFFORT':
      return Object.assign({}, action.data);
    default:
      return state;
  }
};
