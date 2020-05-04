import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(<Paging onClickPrevious={() => {}} onClickNext={() => {}} disableNext={7} disablePrev={7} currentPage={8} totalPages={4}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
