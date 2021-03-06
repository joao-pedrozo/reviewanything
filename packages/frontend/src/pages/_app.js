import { RelayEnvironmentProvider } from 'relay-hooks';
import { Provider } from 'next-auth/client';
import relayEnviroment from '../relay/relayEnviroment';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={relayEnviroment}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </RelayEnvironmentProvider>
  );
}
