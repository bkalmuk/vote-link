
import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NavBar data={{}} />);
    expect(wrapper.find({ variant: "dark" }, '.nav-bar').length).toBe(1);
  })
})