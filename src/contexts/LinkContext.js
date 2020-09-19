import React, { createContext, useReducer, useEffect } from 'react';
import { linkReducer } from '../reducers/linkReducer';

export const LinkContext = createContext();

const LinkContextProvider = (props) => {
  const [linkList, dispatch] = useReducer(linkReducer, [], () => {
    const localData = localStorage.getItem('linkList');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('linkList', JSON.stringify(linkList));
  }, [linkList]);

  return (
    <LinkContext.Provider value={{linkList, dispatch }}>
      { props.children }
    </LinkContext.Provider> 
  );
}

export default LinkContextProvider;