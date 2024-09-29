"use client"
import {useRouter} from 'next/navigation'
import Link from 'next/link'


function Navbar() {
    const route = useRouter()
    
  return (

    <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
        <div className="flex justify-between item-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
            <h1 className='hidden xl:flex m-2 gap-12 font-semibold text-base'>Navbar</h1>
            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <Link href="/Home"className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</Link>
                <Link href="/about"className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">About</Link>
                <Link href="/contact"className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</Link>
                <Link href="/Logo"className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Logo</Link>
            </ul>
        </div>

        

    </div>
  )
}

export default Navbar