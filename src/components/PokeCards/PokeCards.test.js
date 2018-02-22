import React from 'react';
import { shallow } from 'enzyme';
import PokeCards from './PokeCards';

describe('PokeCards component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(<PokeCards />);
    expect(wrapper).toMatchSnapshot();
  });
});