import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={}><Component {...pageProps} /></MoralisProvider>;
}

export default MyApp
