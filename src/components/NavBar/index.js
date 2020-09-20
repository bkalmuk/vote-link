import React from 'react';
import '../../App.scss';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ marginBottom: 30 }}>
      <Navbar.Brand href="#home">
        {/* <img
            alt="brand logo"
            src="../images/logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        /> */}
        hepsiburada
      </Navbar.Brand>
      <Navbar.Text className="justify-content-end">
        Link Vote Challenge
      </Navbar.Text>
    </Navbar>
  );
}

export default NavBar;
