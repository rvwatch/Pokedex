import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { getPokeDetails } from '../../apiCalls/apiCall';
import { addPokeDetails } from '../../actions';
import './PokeCards.css';

class PokeCards extends Component {
  constructor(){
    super();
    this.state = {
      pokeNames: ''
    }
  }
  getDetails = async event => {
    const { pokeType } = this.props;
    const { innerText } = event.target;
    const filtered = await pokeType.filter(poke =>
      poke.name.includes(innerText)
    );
    const ids = await filtered[0].pokemon;

    const details = await getPokeDetails(ids);
    this.props.addPokeDetails(details);
    
    
    this.setState({
      pokeNames: this.props.details
    });
   
  };

  render() {
    if (!this.state.pokeNames.length) {
      return (
        <article onClick={this.getDetails} className="poke-card">
          <h1>{this.props.name}</h1>
        </article>
      );
    }
    if (this.state.pokeNames.length){
      const pokeStats = this.state.pokeNames.map(stats => {
        return `<li>${stats.name}</li> <li>${stats.weight}</li>`;
        
      });
      return (
        <article onClick={this.getDetails} className="poke-card">
          <h1>{this.props.name}</h1>
          <ul>
            { pokeStats }
          </ul>
        </article>
      );
    }
  }
}

PokeCards.propTypes = {
  name: string
};

export const mapStateToProps = store => ({
  pokeType: store.pokeType,
  details: store.details
});
export const mapDispatchToProps = dispatch => ({
  addPokeDetails: details => dispatch(addPokeDetails(details))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);
