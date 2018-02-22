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
    const { pokeType } = this.props;
    if (!pokeType.length){
      return (
        <div>
          <h1>loading... <img src="../../../loading.gif" alt="Loading" width="128" height="128" /></h1>
        </div>
      );
    }
    return (
      <div>
        
      </div>
    );
  }
}

PokeTypes.propTypes = {
  poke: shape({ poke: string }),
  addPokeTypes: func.isRequired
};

export const mapStateToProps = ({ pokeType }) => ({ pokeType });
export const mapDispatchToProps = dispatch => ({ 
  addPokeTypes: types => dispatch(addPokeTypes(types))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeTypes);
