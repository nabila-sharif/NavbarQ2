'use client'
import React from 'react'
import {useRouter} from 'next/navigation'


const Home = () => {
    const route = useRouter()

  return (
    <div>Home 

        <br/>

        <button onClick={()=>route.push('/')}> Go To Page</button>

    </div>
  )
}

export default Home