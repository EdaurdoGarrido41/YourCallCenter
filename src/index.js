import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import GenerateStore from './redux/store';



const store = GenerateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


