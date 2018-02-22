import React, { Component } from 'react';
import './App.css';
import { getPokemon } from '../../apiCalls/apiCall';
import FakeContainer from '../../containers/FakeContainer/';

class App extends Component {

   componentDidMount = async () => {
    const poke = await getPokemon();
    console.log(poke);
    
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
