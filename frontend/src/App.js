import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
<<<<<<< HEAD
=======
import { Boards } from './pages/Boards.jsx';
import { BoardDetails } from './pages/BoardDetails.jsx';
>>>>>>> 60ea8b5593b0c662523ede98c2618fe3625054d7

function App() {
  return (
    <BrowserRouter>

      <Switch>
<<<<<<< HEAD
=======
        <Route component={Boards} path="/:username/boards" />
        <Route component={BoardDetails} path="/b/:boardid/:boardname"/>
>>>>>>> 60ea8b5593b0c662523ede98c2618fe3625054d7
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;