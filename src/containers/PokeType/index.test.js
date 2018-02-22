import React from 'react';
import { shallow } from 'enzyme';
import PokeType from './index';
import fakeStore from '../../tests/fakeStore';


describe('PokeType component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PokeType store={fakeStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});