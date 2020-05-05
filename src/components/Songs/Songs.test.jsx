import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component', () => {
  it('renders Songs', () =>{
    const wrapper = shallow(<Songs artistName='Silkworm' songsArray={[{
      songId: 'laskd311klasjd', songTitle: 'Never Met A Man I Didn\'t Like' }, {
      songId: 'laskd311klasjd', songTitle: 'Never Met A Man I Didn\'t Like' } 
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
