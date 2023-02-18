import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store ={store}>  
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
  ,document.getElementById("root"));

  //le pasamos el store a Provider para que los demas componentes se puedan conectar al store global
