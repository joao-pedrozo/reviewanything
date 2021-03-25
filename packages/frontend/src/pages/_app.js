import { RelayEnvironmentProvider } from 'relay-hooks';
import relayEnviroment from '../relay/relayEnviroment';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={relayEnviroment}>
      <Component {...pageProps} />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </RelayEnvironmentProvider>
  );
}
