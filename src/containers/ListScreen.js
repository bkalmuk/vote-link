import React, { useState, useContext } from 'react';
import { LinkContext } from '../contexts/LinkContext';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Container, Pagination } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';
import ListItem from '../components/ListItem';

// HOC
const PaginationBasic = props => {
  const { listLength, active, setActive } = props;
  let items = [];
  const modd = listLength % 5;
  const maxPaginationNumber = modd === 0 ? listLength / 5 : (listLength - modd) / 5 + 1;

  for (let number = 1; number <= maxPaginationNumber; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

function ListScreen() {
  const { linkList, removeLink } = useContext(LinkContext);

  const [activePagination, setActivePagination] = useState(1);
  // Filtering is for showing only 5 items in the page by the pagination changes
  let linkListFiltered = linkList.filter((e,i) => i >= (activePagination - 1) * 5);
  linkListFiltered = linkListFiltered.filter((e,i) => i < 5);

  return (
    <>
      <NavBar />
      <Container>
        <div className="menu">
          <Link to="/add" className="btn btn-dark btn-submit">SUBMIT A LINK</Link>
          <DropDown />
        </div>

        <div className="list">
          {linkListFiltered.map((link) => <ListItem key={link.id} data={link} removeItem={() => removeLink(link.id)} /> )}
        </div>

        <PaginationBasic active={activePagination} listLength={linkList.length} setActive={setActivePagination}/>
      </Container>
    </>
  );
}

export default ListScreen;
