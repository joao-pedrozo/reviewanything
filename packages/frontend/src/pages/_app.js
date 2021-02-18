import { RelayEnvironmentProvider } from 'relay-hooks'
import relayEnviroment from '../relay/relayEnviroment';
import GlobalStyles from '../styles/global';


export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider
      environment={relayEnviroment}
    >
      <Component {...pageProps} />
      <GlobalStyles />
    </RelayEnvironmentProvider>
  )
}