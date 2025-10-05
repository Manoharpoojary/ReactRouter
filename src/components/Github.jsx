import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data =useLoaderData();
  return (
     <div className='h-[200px] w-[200px] bg-red-400 text-center '> <p>Followers:{data.followers}</p>
     <img src={data.avatar_url}></img>
     </div>
    
  )
}

export default Github

export const getDetails= async()=>{
    const details=await fetch('https://api.github.com/users/Manoharpoojary');
    return details.json();
}