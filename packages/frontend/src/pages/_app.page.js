import { RelayEnvironmentProvider } from 'relay-hooks';
import relayEnviroment from '../relay/relayEnviroment';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../context/AuthContext';

import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={relayEnviroment}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
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
