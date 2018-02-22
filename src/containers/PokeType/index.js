import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokeTypes } from '../../actions';
import { getPokemon } from '../../apiCalls/apiCall';
import PokeCards from '../../components/PokeCards/PokeCards';
class PokeTypes extends Component {

  componentDidMount = async () => {
    const types = await getPokemon();
    this.props.addPokeTypes(types);
  }

  render() {
    
    const { pokeType } = this.props;
    const pokeCards = pokeType.map((type, index) => {
      return <PokeCards {...type} key={index} />;
      
    });
    
    
    if (!pokeType.length){
      return (
        <div>
          <div className='loading'></div>
        </div>
      );
    }
    return (
      <section className='card-wrap'>
        { pokeCards }
      </section>
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
