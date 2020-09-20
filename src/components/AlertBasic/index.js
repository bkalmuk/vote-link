import React from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';
import { Alert } from 'react-bootstrap';

const AlertBasic = props => {
  if (props.show) {
    return (
      <Alert className="alert-basic" variant={props.type} dismissible onClose={props.onClose}>
        {props.text}
      </Alert>
    );
  } else return <></>;
}

export default AlertBasic;

AlertBasic.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func
};
