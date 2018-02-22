import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokeTypes } from '../../actions';
import { getPokemon } from '../../apiCalls/apiCall';
class PokeTypes extends Component {

  componentDidMount = async () => {
    const types = await getPokemon();
    this.props.addPokeTypes(types);
  }

  render() {
    return (
      <div>
        <button onClick={()=> { this.props.addPokeTypes(); } }> PokeTypes </button>
      </div>
    );
  }
}

PokeTypes.propTypes = {
  poke: shape({ poke: string }),
  addPokeTypes: func.isRequired
};

export const mapStateToProps = ({ pokeTypes }) => ({ pokeTypes });
export const mapDispatchToProps = dispatch => ({ 
  addPokeTypes: types => dispatch(addPokeTypes(types))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeTypes);
