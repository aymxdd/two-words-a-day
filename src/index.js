import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { HashRouter } from 'react-router-dom';
import GlobalStyles from './styles/global'
import reportWebVitals from './reportWebVitals';
import { DataProvider } from 'stores'

ReactDOM.render(
  <HashRouter>
    <DataProvider>
      <Routes />
      <GlobalStyles />
    </DataProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
