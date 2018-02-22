import React, { Component } from 'react';
import './PokeCards.css';

class PokeCards extends Component {

  render() {
      
    return (
      <div className='poke-card'>
        <h1>{ this.props.name }</h1>
      </div>
    );
  }
}

export default PokeCards;
