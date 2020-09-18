import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListScreen from './containers/ListScreen';
import AddScreen from './containers/AddScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListScreen} />
          <Route exact path="/add" component={AddScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
