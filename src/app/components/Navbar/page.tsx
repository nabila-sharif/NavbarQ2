

import Link from 'next/link'

import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
            <div className='flex justify-between item-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
             <h1 className='hidden xl:flex m-2 gap-12 font-semibold text-base'>Navbar</h1>
             <ul className="hidden xl:flex items-center m-2 gap font-semibold text-base">
                <Link href="/home"className="p-3 hover:bg-sky-400 hover:text-white rounded=md transition-all cursor-pointer">Home</Link>
                <Link href="/about"className="p-3 hover:bg-sky-400 hover:text-white rounded=md transition-all cursor-pointer">About</Link>

                <Link href="/contact"className="p-3 hover:bg-sky-400 hover:text-white rounded=md transition-all cursor-pointer">Contact</Link>

                <Link href="/logo"className="p-3 hover:bg-sky-400 hover:text-white rounded=md transition-all cursor-pointer">Logo</Link>
                </ul>
            </div>

    </div>          

   )


}
export default Navbar