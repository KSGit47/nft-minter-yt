
import Head from 'next/head'; 
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

export default function Home(){
  const {authenticate ,is Authenticated}=useMoralis();
  const router=useRouter();
  useEffect(()=>{
    
  }
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Head>
        <title>Create Minter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<button onClick={authenticate} className='bg-yellow-300 px-8 py-5 rounded-xl text-lg animate-pulse'>Login using Metamask</button>
    </div>
  );
}

 
