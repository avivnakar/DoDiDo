import React from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
import { Boards } from './pages/Boards.jsx';
import { BoardDetails } from './pages/BoardDetails.jsx';
import { CardDetails } from './cmps/board/card/CardDetails.jsx';


function App() {
  
  return (

    <BrowserRouter>
        <Route component={CardDetails} path="/c/:cardId/:cardTitle" />
      <Switch>
        <Route component={Boards} path="/:username/boards" />
        <Route component={BoardDetails} path="/b/:boardId/:boardname" />
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;