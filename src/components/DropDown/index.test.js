import React from 'react'
import { shallow } from 'enzyme'
import DropDown from '../DropDown';

describe('DropDown Component', () => {
  const mockFunc = jest.fn();

  test('renders without crashing', () => {
    const wrapper = shallow(<DropDown onClickMost={mockFunc} onClickLess={mockFunc} />);
    expect(wrapper.length).toBe(1);
  })
})