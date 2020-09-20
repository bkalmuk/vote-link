import React from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';
import { Modal, Button } from 'react-bootstrap';

const ModalBasic = props => {

  return (
    <Modal show={props.show} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Link</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Do you want to remove:</p>
        <h1 style={{textAlign: 'center'}}>{props.link}</h1>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="dark" onClick={props.closeModal}>CANCEL</Button>
        <Button variant="primary" onClick={props.positiveFunc}>YES</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBasic;

ModalBasic.propTypes = {
  show: PropTypes.bool,
  link: PropTypes.string,
  closeModal: PropTypes.func,
  positiveFunc: PropTypes.func,
};
