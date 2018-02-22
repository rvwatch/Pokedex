export const getPokemon = async () => {
  try {
    const data = await fetch('http://localhost:3001/types', {
      method: 'GET'
    });

    const results = await data.json();
    return results;
  } catch (getPokemonError) {
    return 'OMFG, you broke it!';
  }
};

export const getPokeDetails = async ids => {
    console.log(ids);
    const details = ids.map( async id => {
        const data = await fetch(`http://localhost:3001/pokemon/${id}`, {
        method: 'GET'
        });

    const results = await data.json();
    return results;
    });

    return await Promise.all(details);
    // const detailsArray = idsArray.map(poke => {
    // try {
    //     const data = await fetch(`http://localhost:3001/pokemon/${test}`, {
    //     method: 'GET'
    //     });

    //     const results = await data.json();
    //     return results;
    // } catch (getDetailsError) {
    //     return 'OMFG, you broke this one too!';
    // }
    // })
    //return detailsArray
};
