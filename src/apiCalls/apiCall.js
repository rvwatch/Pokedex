export const getPokemon = async () => {
    console.log('in the API call');
    const data = await fetch('http://localhost:3001/types', {
      method: 'GET'
    });
  
    const results = await data.json();
    return results;
  };
  