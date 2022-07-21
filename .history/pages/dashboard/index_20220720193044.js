import React from 'react'
import { useEffect } from 'react';

function Dashboard() {
    const {isAuthenticated} = useMoralis(); 
    const router=useRouter();
    useEffect(90=>{
        if(!isAuthenticated)router.push("/")
    },[isAuthenticated]);

  return (
    <div    className="flex w-screen h-screen items-center justify-center"></div>
  );
}

export default Dashboard