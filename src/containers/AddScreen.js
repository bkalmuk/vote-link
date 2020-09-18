import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { Container, Form, Button,Row, Col } from 'react-bootstrap';
class ListScreen extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Container style={{ marginTop: 30 }}>
          <div className="menu">
            <Link to="/" className="btn btn-dark btn-submit">BACK TO LIST</Link>
          </div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Link Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. Hepsiburada" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Link URL</Form.Label>
              <Form.Control type="text" placeholder="e.g. https://www.hepsiburada.com/" />
            </Form.Group>
            
            <Button variant="primary" type="submit" style={{ float: 'right'}}>
              SUBMIT LINK
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default ListScreen;
