import React, { Component } from 'react';
import './PokeCards.css';

class PokeCards extends Component {

  render() {
      const { name } = this.props;
      
    return (
      <div className='poke-card'>
        <h1>{ name }</h1>
      </div>
    );
  }
}


export default PokeCards;
