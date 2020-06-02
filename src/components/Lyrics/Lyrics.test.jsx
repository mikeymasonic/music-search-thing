import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics artistName='Silkworm' title="Never Met A Man I Didn't Like" lyrics="oh man isn't this song great??" />);
    expect(wrapper).toMatchSnapshot();
  });
});
