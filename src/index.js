import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { DAppProvider} from '@usedapp/core';


ReactDOM.render(
  <DAppProvider config={{supportedChains: [25]}}>
    <App />
  </DAppProvider>,
  document.getElementById('root')
);


