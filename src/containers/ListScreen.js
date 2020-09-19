import React, { useState, useContext } from 'react';
import { LinkContext } from '../contexts/LinkContext';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Container, Pagination } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import DropDown from '../components/DropDown';
import ListItem from '../components/ListItem';
import ModalBasic from '../components/ModalBasic';
import AlertBasic from '../components/AlertBasic';
import { orderByDate, orderByVote } from '../utils/order';
import moment from 'moment';

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
  const { linkList, dispatch } = useContext(LinkContext);

  const [activePagination, setActivePagination] = useState(1);
  const [order, setOrder] = useState('');
  
  // Ordering List
  let list = orderByDate(linkList); // Last added on top
  if (order !== '') list = orderByVote(list, order); // If it is choosen by dropdown (Most Voted/Less Voted)

  // Filtering is for showing only 5 items in the page by the pagination changes
  let linkListFiltered = list.filter((e,i) => i >= (activePagination - 1) * 5);
  linkListFiltered = linkListFiltered.filter((e,i) => i < 5);

  // Remove Item Handling
  const [itemToRemove, setItemToRemove] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);

  function handleRemove(link) {
    setItemToRemove(link);
    setModalShow(true);
  }

  function removeAndCloseModal() {
    dispatch({ type: 'REMOVE_LINK', id: itemToRemove.id });
    setModalShow(false);
    setAlertShow(true);
    setAlertShow(true);
    setTimeout(function () { setAlertShow(false); }, 3000);
  }

  return (
    <>
      <NavBar />
      <ModalBasic show={modalShow} link={itemToRemove.name} positiveFunc={removeAndCloseModal} closeModal={() => setModalShow(false)} />
      <Container>
        <AlertBasic show={alertShow} type="success" text="Link successfully removed!" onClose={() => setAlertShow(false)} />
        <div className="menu">
          <Link to="/add" className="btn btn-dark btn-submit">SUBMIT A LINK</Link>
          <DropDown onClickMost={() => setOrder('most')} onClickLess={() => setOrder('less')} />
        </div>

        <div className="list">
          {linkList.length > 0 ? (linkListFiltered.map((link) => <ListItem 
            key={link.id}
            data={link}
            removeItem={() => handleRemove(link)}
            upVote={() => dispatch({ type: 'UP_VOTE', id: link.id, lastVoteDate: moment().format('YYYY-MM-DD HH:mm:ss)') })}
            downVote={() => dispatch({ type: 'DOWN_VOTE', id: link.id, lastVoteDate: moment().format('YYYY-MM-DD HH:mm:ss)') })} />
          )) : <h4 style={{ textAlign: 'center' }}> There is no link to show yet</h4>}
        </div>

        <PaginationBasic active={activePagination} listLength={linkList.length} setActive={setActivePagination}/>
      </Container>
    </>
  );
}

export default ListScreen;
