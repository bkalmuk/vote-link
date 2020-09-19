import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const ListItem = props => {
  const data = props.data;

  return (
    <Row className="list-item">
      <Col xs="2" className="list-item-point">
        <div>
          <span>{data.vote}</span>
          <span>POINTS</span>
        </div>
      </Col>
      <Col xs="6" className="list-item-content">
        <span>{data.name}</span>
        <span>{data.url}</span>
      </Col>
      <Col xs="4" className="list-item-buttons">
        <ButtonGroup aria-label="vote">
          <Button variant="warning" >Down Vote</Button>
          <Button variant="success" >Up Vote</Button>
        </ButtonGroup>
        <Button variant="danger" className="list-item-remove-button" onClick={props.removeItem}>X</Button>
      </Col>
    </Row>
  );
}

export default ListItem;

ListItem.propTypes = {
  data: PropTypes.object,
  removeItem: PropTypes.func,
};
