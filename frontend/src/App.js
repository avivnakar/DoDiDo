import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';

function App() {
  return (
    <BrowserRouter>
      <header>sccsc</header>
      <Route component={HomePage} path="/" />
    </BrowserRouter>
  );
}

export default App;