import React from 'react';
import '../App.scss';
import { DropdownButton, Dropdown } from 'react-bootstrap';


const DropDown = () => {
  return (
    <DropdownButton
      key="left"
      id={`dropdown-order`}
      drop="left"
      variant="secondary"
      title="Order by"
    >
      <Dropdown.Item eventKey="most">Most voted (Z - A)</Dropdown.Item>
      <Dropdown.Item eventKey="less">Less voted (A - Z)</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;
