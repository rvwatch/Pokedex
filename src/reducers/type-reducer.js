const pokeReducer = (state =[], action) => {
  console.log(action.pokeTypes);
  
  switch (action.type) {
    case 'POKE_TYPE':
    return action.pokeTypes;
  default:
    return state;
  }
};

export default pokeReducer;
