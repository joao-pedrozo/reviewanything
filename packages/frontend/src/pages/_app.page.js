import { RelayEnvironmentProvider } from 'relay-hooks';
import { Provider } from 'next-auth/client';
import relayEnviroment from '../relay/relayEnviroment';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={relayEnviroment}>
      <Provider session={pageProps.session}>
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
      </Provider>
    </RelayEnvironmentProvider>
  );
}
