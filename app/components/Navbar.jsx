import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='z-10 md:flex md:flex-row flex flex-col justify-between list-none  md:h-11 min-w-[100vw] bg-purple-700 items-center px-5 py-2 text-white text-md'>
            <Link href="/"><div className="heading font-bold px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer">
                CutURL
            </div></Link>
            <div className="lists flex justify-around md:gap-10 cursor-pointer">
                <Link href="/"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>Home</li></Link>
                <Link href="/shorten"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>Shortener</li></Link>
                <Link href="/myurls"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>MyURL's</li></Link>
                <Link target='_blank' href="https://github.com/ZaidMuqri"><li className='px-3 py-1 rounded-lg hover:bg-purple-400 cursor-pointer bg-purple-500'>GitHub</li></Link>
            </div>
        </div>
    )
}

export default Navbar
