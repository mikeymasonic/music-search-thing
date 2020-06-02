import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song component', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song artistName='Silkworm' songTitle="Never Met A Man I didn\'t Like" />);
    expect(wrapper).toMatchSnapshot();
  });
});
