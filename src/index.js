import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import './index.css';
import App from './App';
import config from './config'
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

ReactDOM.render(
  <MoralisProvider appId={config.APP_ID} serverUrl={config.SERVER_URL}>
    <MoralisDappProvider>
      <App />
    </MoralisDappProvider>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
