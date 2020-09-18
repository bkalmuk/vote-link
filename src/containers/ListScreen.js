import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';
import ListItem from '../components/ListItem';

class ListScreen extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <Container style={{ marginTop: 30 }}>
          <div className="menu">
            <Link to="/add" className="btn btn-dark btn-submit">SUBMIT A LINK</Link>
            <DropDown />
          </div>

          <div className="list">
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </Container>
      </>
    );
  }
}

export default ListScreen;
