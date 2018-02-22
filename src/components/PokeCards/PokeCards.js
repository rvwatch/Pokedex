import React, { Component } from 'react';
import { string } from 'prop-types';
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

PokeCards.propTypes = {
    name: string
  };

export default PokeCards;
