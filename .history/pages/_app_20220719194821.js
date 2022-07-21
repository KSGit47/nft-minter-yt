import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}><Component {...pageProps} /></MoralisProvider>;
}

export default MyApp
