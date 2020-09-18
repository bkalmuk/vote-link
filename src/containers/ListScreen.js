import React, { useState } from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Container, Pagination } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';
import ListItem from '../components/ListItem';

const linkList = [
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 1
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 2
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 3
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 4
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 5
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 6
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 7
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 8
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 9
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 10
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 11
  },
  {
    name: 'hacker rank',
    url: 'https://hackerrank.com/',
    vote: 12
  },
];

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
  const [activePagination, setActivePagination] = useState(1);
  console.log(linkList);
  let linkListFiltered = linkList.filter((e,i) => i >= (activePagination - 1) * 5);
  console.log(linkListFiltered);
  linkListFiltered = linkListFiltered.filter((e,i) => i < 5);
  console.log(linkListFiltered);

  
  return (
    <>
      <NavBar />
      <Container>
        <div className="menu">
          <Link to="/add" className="btn btn-dark btn-submit">SUBMIT A LINK</Link>
          <DropDown />
        </div>

        <div className="list">
          {linkListFiltered.map((item, index) => <ListItem key={item.name + index} data={item} /> )}
        </div>

        <PaginationBasic active={activePagination} listLength={linkList.length} setActive={setActivePagination}/>
      </Container>
    </>
  );
}

export default ListScreen;
