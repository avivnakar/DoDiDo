import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <navBar />
      </nav>
      <Route component={Homepage} path="/" />
    </BrowserRouter>
  );
}

export default App;