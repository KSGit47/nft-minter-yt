import React from 'react'
import {useRouter}from "next/router";

import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
function Dashboard() {
    const {isAuthenticated} = useMoralis(); 
    const router=useRouter();
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
    <div className="mt-3">
<input type="text" 
className="border-[1px] p-2 text-lg border-black w-full"
placeholder="Name"/>


    </div>
    <div>
<input type="text" 
className="border-[1px] p-2 text-lg border-black w-full"
placeholder="Name"/>


    </div>

    </form>
    </div>
  );
}

export default Dashboard;