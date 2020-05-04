import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artistArray={[{ artistId: '311', artistName: 'Silkworm' }, { artistId: '311', artistName: 'Silkworm' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
