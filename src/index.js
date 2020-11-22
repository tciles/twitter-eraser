import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux'

import MainNavigation from './navigations/MainNavigation';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./themes"
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MainNavigation />
        </ThemeProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
