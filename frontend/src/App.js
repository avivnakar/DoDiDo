import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
import { Boards } from './pages/Boards.jsx';
import { BoardDetails } from './pages/BoardDetails.jsx';
import { BoardNav } from './cmps/board/BoardNav';



function App() {

  return (

    <BrowserRouter>
      <BoardNav />
      <Switch>
        <Route component={Boards} path="/:username/boards" />
        <Route component={BoardDetails} path="/b/:boardId/:boardname" />
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;