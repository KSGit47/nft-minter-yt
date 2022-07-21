import React from 'react'

function Dashboard() {
    const {isAuthenticated} = useMoralis(); 
    const router=useRouter();

  return (
    <div    className="flex w-screen h-screen items-center justify-center"></div>
  );
}

export default Dashboard