import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const ListItem = props => {
  return (
    <Row className="list-item">
      <Col xs="2" className="list-item-point">
        <div>
        <span>6</span>
        <span>POINTS</span>
        </div>
      </Col>
      <Col xs="6" className="list-item-content">
        <span>Hacker News</span>
        <span>wwww.hackernews.com</span>
      </Col>
      <Col xs="4" className="list-item-button">
      <ButtonGroup aria-label="vote">
        <Button variant="danger" >Down Vote</Button>
        <Button variant="success" >Up Vote</Button>
      </ButtonGroup>
      </Col>
    </Row>
  );
}

export default ListItem;

ListItem.propTypes = {
  data: PropTypes.object,
};
