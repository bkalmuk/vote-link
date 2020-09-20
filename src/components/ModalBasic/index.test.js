
import React from 'react'
import { shallow } from 'enzyme'
import ModalBasic from '../ModalBasic';

describe('ModalBasic Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<ModalBasic show />);
    expect(wrapper.find('.modal-basic').length).toBe(1);
  })
})