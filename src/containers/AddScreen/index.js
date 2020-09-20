import React, { useContext, useState } from 'react';
import { LinkContext } from '../../contexts/LinkContext';
import '../../App.scss';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import { Container, Form, Button } from 'react-bootstrap';
import AlertBasic from '../../components/AlertBasic';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

function ListScreen () {
  const { dispatch } = useContext(LinkContext);

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [alertShow, setAlertShow] = useState({});

  const handleSubmit = (e) => {
    if (name !== '' && url !== '') {
      e.preventDefault();
      dispatch({ type: 'ADD_LINK', link: { id: uuidv4(), name, url, date: moment().format('YYYY-MM-DD HH:mm:ss') }});
      setName('');
      setUrl('');
      setAlertShow({show: true, type:"success", text: "Link successfully added!"});
      setTimeout(function () { setAlertShow(false); }, 3000);
    } else {
      e.preventDefault();
      setAlertShow({show: true, type:"danger", text: "Please enter name and url!"});
      setTimeout(function () { setAlertShow(false); }, 3000);
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <AlertBasic show={alertShow.show} type={alertShow.type} text={alertShow.text} onClose={() => setAlertShow(false)} />

        <div className="menu">
          <Link to="/" className="btn btn-dark btn-submit">BACK TO LIST</Link>
        </div>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Link Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Link"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Link URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. https://www.link.com/"
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
