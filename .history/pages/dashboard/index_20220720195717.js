import React from 'react'
import {useRouter}from "next/router";

import { useEffect ,useState} from 'react';
import { useMoralis } from 'react-moralis';
function Dashboard() {
    const {isAuthenticated} = useMoralis(); 
    const router=useRouter();
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [file,setFile]=useState(null);
    useEffect(()=>{
        if(!isAuthenticated)router.push("/");
    },[isAuthenticated]);
    const onSubmit=async(e)=>
    {
        e.preventDefault();
    };
  return (
    <div    className="flex w-screen h-screen items-center justify-center">
    <form onSubmit={onSubmit}>
    <div >
<input type="text" 
className="border-[1px] p-2 text-lg border-black w-full"
placeholder="Name"
value={name}
onChange={e=>setName(e.target.value)}/>

    </div>
    <div className="mt-3">
<input type="text" 
className="border-[1px] p-2 text-lg border-black w-full"
placeholder="Description"
value={description}
onChange={e=>setDescription(e.target.value)}/>


    </div>
    <div className="mt-3">
<input type="file" 
className="border-[1px] p-2 text-lg border-black w-full"
value={file}
onChange={e=>setFile(e.target.files[0])}/>

    </div>
    <button type="submit" className="mt-5 w-full p-5 bg-green-700 text-white text-lg rounded-xl animate-pulse">Mint Now</button>
    <button onClick={} className="mt-5"></button>
    </form>
    </div>
  );
}

export default Dashboard;