import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artists component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist artistId='311' artistName='Silkworm' />);
    expect(wrapper).toMatchSnapshot();
  });
});
