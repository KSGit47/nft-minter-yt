import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <MoralisProvider serverUrl={process.env.NEXt_}><Component {...pageProps} /></MoralisProvider>;
}

export default MyApp
