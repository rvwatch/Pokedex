export const getPokemon = async () => {
  try {
    const data = await fetch('http://localhost:3001/types', {
      method: 'GET'
    });

    const results = await data.json();
    return results;
  } catch (errs) {
    throw new Error('error');
  }
};
