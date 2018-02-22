import React, { Component } from 'react';
import './App.css';
import PokeType from '../../containers/PokeType';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokeType />
      </div>
    );
  }
}


export default App;
