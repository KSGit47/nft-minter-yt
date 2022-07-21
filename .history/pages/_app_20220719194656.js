import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <MoralisProvider></MoralisProvider><Component {...pageProps} />
}

export default MyApp
