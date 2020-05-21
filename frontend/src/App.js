import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route component={Homepage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;