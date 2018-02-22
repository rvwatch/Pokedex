import pokeReducer from './type-reducer';

describe('Reducers.type-reducer', () => {
  it('should return a defualt state', () => {
    const actual = pokeReducer(undefined, {});
    expect(actual).toEqual([]);
  });

  it('should return an array of poke types', () => {
    const pokeTypes = {
      type: 'POKE_TYPES',
      pokeTypes: [{name: 'fighting'}]
    };
    const actual = pokeReducer([], pokeTypes);
    const expected = [{name: 'fighting'}];
    expect(actual).toEqual(expected);
  });

});