import React from 'react';
import Enzyme, { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'; 
import NavBar from './index';

describe('NavBar Component', () => {
 
  it('has a nav tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<NavBar />);    
    var nav = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'nav');
    expect(nav.find('.navbar').length).toBe(1);
  });
 
  // it('is wrapped inside a title class', () => {
  //   const component = ReactTestUtils.renderIntoDocument(<NavBar />);    
  //   var node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'navbar');
  // });
})
