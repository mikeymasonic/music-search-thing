import React from 'react';
import { shallow } from 'enzyme';
import SearchArtist from './SearchArtist';

describe('SearchArtist component', () => {
  it('renders SearchArtist', () => {
    const wrapper = shallow(<SearchArtist artist='Silkworm' onButtonClick={() => {}} onInputChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
