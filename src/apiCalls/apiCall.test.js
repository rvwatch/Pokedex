import { getPokemon } from './apiCall';

describe('getPokem fetch', () => {
  let mockPokes;
  let expectedURL;

  beforeEach(() => {
    expectedURL = 'http://pokestuff';

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

  it('should return an array if the status is ok', () => {
    expect(getPokemon()).resolves.toEqual({results: mockPokes});
  });

  it('should throw an error if the status code is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.reject({
        ok: false,
        status: 404,
        json: () => Promise.reject('ERROR!')
      });
    });
    const someththththdfjads;lfkja;lf TEESTTs!!!
  });

});
