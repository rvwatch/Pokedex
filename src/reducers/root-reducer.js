import { combineReducers } from 'redux';
import pokeReducer from './type-reducer';

const rootReducer = combineReducers({
  pokeType: pokeReducer
});

export default rootReducer;
