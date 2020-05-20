import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/global.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//register before build
serviceWorker.unregister();
