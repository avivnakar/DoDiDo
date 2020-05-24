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
        <Route component={BoardDetails} className="yuval" path="/b/:boardId/:boardname" />
        <Route component={BoardDetails} path="/c/:cardId/:cardTitle" />
        <Route component={Statistics} path="/b/:boardId/:boardname/statistics" />
        <Route component={Homepage} path="/" />
        <Route compoFnent={Profile} path="/:username" />
        <Route component={Signup} path="/signup" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

function Statistics(props) {
  return (<div>Statistics</div>)
}
function Profile(props) {
  return (<div>Profile</div>)
}
function Signup(props) {
  return (<div>Signup</div>)
}