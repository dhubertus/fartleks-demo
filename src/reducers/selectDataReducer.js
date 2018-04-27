export const selectDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_DATA':
      return action.data;
    default:
      return state;
  }
};
