import React from 'react'
import { shallow } from 'enzyme'
import AlertBasic from '../AlertBasic';

describe('AlertBasic Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<AlertBasic show type={'success'} />);
    expect(wrapper.find('.alert-basic').length).toBe(1);
  })
})
