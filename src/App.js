import React from 'react';
import LinkContextProvider from './contexts/LinkContext';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListScreen from './containers/ListScreen';
import AddScreen from './containers/AddScreen';

function App() {
  return (
    <>
      <LinkContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListScreen} />
            <Route exact path="/add" component={AddScreen} />
          </Switch>
        </BrowserRouter>
      </LinkContextProvider>
    </>
  );
}

export default App;
