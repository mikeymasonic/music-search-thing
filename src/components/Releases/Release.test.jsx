import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release artistName='Silkworm' releaseCover='dink.png' releaseId='3453lk4' releaseDate='May 4th, 1990' releaseTitle='Firewater' />);
    expect(wrapper).toMatchSnapshot();
  });
});
