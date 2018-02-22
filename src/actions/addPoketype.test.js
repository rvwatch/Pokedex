import { addPokeTypes } from './index';

describe('Actions.addPoketype', () => {
  it('should create an action to add PokeTypes', () => {
    const pokeTypes = [{name: 'fighting'}];
    const expected = {
      type: 'POKE_TYPES',
      pokeTypes: [{name: 'fighting'}]
    };

    expect(addPokeTypes(pokeTypes)).toEqual(expected);
  });
});