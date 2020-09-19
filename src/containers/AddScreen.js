import React, { useContext, useState } from 'react';
import { LinkContext } from '../contexts/LinkContext';
import '../App.scss';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { Container, Form, Button } from 'react-bootstrap';

function ListScreen () {
  const { addLink } = useContext(LinkContext);

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLink(name, url);
    setName('');
    setUrl('');
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="menu">
          <Link to="/" className="btn btn-dark btn-submit">BACK TO LIST</Link>
        </div>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Link Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Hepsiburada"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Link URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. https://www.hepsiburada.com/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit" style={{ float: 'right'}} onClick={handleSubmit}>
            SUBMIT LINK
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ListScreen;
