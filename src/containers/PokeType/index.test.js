import React from 'react';
import { shallow } from 'enzyme';
import PokeTypes from './index';


describe('PokeTypes container', () => {
  const mockStore = {
    default: () => {},
    dispatch: () => {}
  };

  it('should render correctly', () => {
    const wrapper = shallow(<index  />);
    expect(wrapper).toMatchSnapshot();
  });

});