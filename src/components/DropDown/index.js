import React from 'react';
import '../../App.scss';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';


const DropDown = props => {
  return (
    <DropdownButton
      key="left"
      id={`dropdown-order`}
      drop="left"
      variant="primary"
      title="Order by"
    >
      <Dropdown.Item eventKey="most" onClick={props.onClickMost}>Most voted (Z - A)</Dropdown.Item>
      <Dropdown.Item eventKey="less" onClick={props.onClickLess}>Less voted (A - Z)</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;

DropDown.propTypes = {
  onClickMost: PropTypes.func,
  onClickLess: PropTypes.func,
};
