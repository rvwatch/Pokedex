const detailReducer = (state = [], action) => {
  switch (action.type) {
  case 'POKE_DETAILS':
    return action.details;
  default:
    return state;
  }
};

export default detailReducer;
