import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
import { Boards } from './pages/Boards.jsx';
import { BoardDetails } from './pages/BoardDetails.jsx';
import { BoardNav } from './cmps/board/BoardNav';
import { Profile } from './pages/Profile.jsx';
import { Signup } from './pages/Signup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={BoardNav} />
      <Switch>
        <Route component={Boards} path="/:username/boards" />
        <Route component={BoardDetails} className="yuval" path="/b/:boardId/:boardname" />
        <Route component={BoardDetails} path="/c/:cardId/:cardTitle" />
        <Route component={Statistics} path="/b/:boardId/:boardname/statistics" />
        <Route component={Signup} path="/signup" />
        <Route component={Profile} path="/:username" />
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

function Statistics(props) {
  return (<div>Statistics</div>)
}

// function Signup(props) {
//   return (<div>Signup</div>)
// }