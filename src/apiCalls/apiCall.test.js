import { getPokemon } from './apiCall';

describe('getPokem fetch', () => {
  let mockPokes;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: mockPokes
          })
      })
    );

    mockPokes = [
      {name: 'fighter'},
      {name: 'normal'},
      {name: 'flying'}
    ];
  });

  it('should call the fetch', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    getPokemon();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an array of Pokes if the status is ok', () => {
    expect(getPokemon()).resolves.toEqual({results: mockPokes});
  });

  it('should throw an error if the status code is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.reject({
        ok: false,
        status: 404
      });
    });
    const testError = await getPokemon();
    expect(testError).toEqual('OMFG, you broke it!');
  });

});
