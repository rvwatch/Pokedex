const pokeReducer = (state =[], action) => {
  switch (action.type) {
  case 'POKE_TYPES':
    return action.pokeTypes;
  default:
    return state;
  }
};

export default pokeReducer;
