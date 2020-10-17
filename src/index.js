import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
// import Scrollbar from 'smooth-scrollbar'

// Scrollbar.init(document.querySelector('#root'), {});

=======
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './Reducer';
>>>>>>> 0513fc0a847bd80d22a7cd62a628a20b7850a6c9
ReactDOM.render(
  
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
       <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
