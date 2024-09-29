'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

const About = () => {
    const route = useRouter()
    return (
        <div>About
            <br/>
          <button onClick={()=>route.push('/')}>Go To Home</button>
        </div>
        
    )
}

export default About