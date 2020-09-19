import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LinkContext = createContext();

const LinkContextProvider = (props) => {
  const [linkList, setLinkList] = useState([
    {
      id: 1,
      name: 'hacker rank',
      url:'www.hackerrank.com',
      vote: 0
    },
    {
      id: 2,
      name: 'wiki',
      url:'www.wiki.com',
      vote: 0
    }
  ]);

  const addLink = (name, url) => {
    setLinkList([...linkList, {id: uuidv4(), name, url, vote: 0}]);
  };

  const removeLink = (id) => {
    setLinkList(linkList.filter(link => link.id !== id));
  };

  return (
    <LinkContext.Provider value={{linkList, addLink, removeLink}}>
      { props.children }
    </LinkContext.Provider> 
  );
}

export default LinkContextProvider;