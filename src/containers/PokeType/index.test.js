import React from 'react';
import { shallow } from 'enzyme';
import { PokeTypes, mapStateToProps, mapDispatchToProps} from './index';
import { fakeStore } from '../../tests/fakeStore';


describe('PokeTypes component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PokeTypes store={fakeStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});