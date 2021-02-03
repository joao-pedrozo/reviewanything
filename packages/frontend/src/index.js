import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { RelayEnvironmentProvider } from 'relay-hooks';
import GlobalStyles from './styles/global';
import relayEnviroment from './relay/relayEnviroment';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnviroment}>
      <App />
      <GlobalStyles />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
