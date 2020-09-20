import React from 'react';
import ListItem from './index';
import { shallow } from 'enzyme'

describe('ListItem component', () => {
    test('renders without crashing', () => {
        const mockData = { name: 'Link-1', url: 'url-1', vote: 8 };
        const mockFunc = jest.fn();
        const wrapper = shallow(<ListItem data={mockData} removeItem={mockFunc} upVote={mockFunc} downVote={mockFunc} />);
        expect(wrapper.find('.list-item').length).toBe(1);
    })
})
