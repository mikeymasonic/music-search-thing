import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders Releases', () => {
    const wrapper = shallow(<Releases artistName='Silkworm' releaseArray={[{
      coverArtCount: true, releaseId: '311', releaseTitle: 'Firewater', releaseDate: 'May 4th, 1990' }, { coverArtCount: true, releaseId:'312', releaseTitle: 'Lifestyle', releaseDate: 'August 2nd, 1986' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
