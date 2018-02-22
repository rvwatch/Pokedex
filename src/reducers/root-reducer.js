import { combineReducers } from 'redux';
import pokeReducer from './type-reducer';
import detailReducer from './details-reducer';

const rootReducer = combineReducers({
  pokeType: pokeReducer,
  details: detailReducer
});

export default rootReducer;
