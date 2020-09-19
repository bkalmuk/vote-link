import React, { createContext, useReducer } from 'react';
import { linkReducer } from '../reducers/linkReducer';

export const LinkContext = createContext();

const LinkContextProvider = (props) => {
  const [linkList, dispatch] = useReducer(linkReducer, []);

  return (
    <LinkContext.Provider value={{linkList, dispatch }}>
      { props.children }
    </LinkContext.Provider> 
  );
}

export default LinkContextProvider;