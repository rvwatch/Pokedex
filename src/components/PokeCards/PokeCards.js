import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { getPokeDetails } from '../../apiCalls/apiCall';
import { addPokeDetails } from '../../actions';
import './PokeCards.css';

class PokeCards extends Component {

    getDetails = async () => {
        const details = await getPokeDetails();
        console.log(details);
        
    }

  render() {
      
    return (
      <article onClick={this.getDetails} className='poke-card'>
        <h1>{ this.props.name }</h1>
      </article>
    );
  }
}

PokeCards.propTypes = {
    name: string
  };

export const mapStateToProps =  store => ({ 
    pokeType: store.pokeType
});
export const mapDispatchToProps = dispatch => ({ 
  addPokeDetails: ids => dispatch(addPokeDetails(ids))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);

