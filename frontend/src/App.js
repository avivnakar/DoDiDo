import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
import { Boards } from './pages/Boards.jsx';
import { BoardDetails } from './pages/BoardDetails.jsx';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Boards} path="/:username/boards" />
        <Route component={BoardDetails} path="/b/:boardid/:boardname"/>
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;