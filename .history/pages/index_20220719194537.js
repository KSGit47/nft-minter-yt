
import Head from 'next/head' 

export default function Home(){
  return (
    <div className="flex w-screen h-screen items-center ">
      <Head>
        <title>Create Minter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<button className='bg-yellow-300 px-8 py-5 rounded-xl text-lg animate-pulse'>Login using Metamask</button>
    </div>
  )
}


