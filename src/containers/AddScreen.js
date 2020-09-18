import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';

class ListScreen extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Link to="/">List Screen</Link>
      </>
    );
  }
}

export default ListScreen;
