export const calcEffortReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CALCULATE_EFFORT':
      return Object.assign({}, action.efforts);
    default:
      return state;
  }
};
