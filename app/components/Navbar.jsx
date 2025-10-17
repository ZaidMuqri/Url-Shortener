import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='z-10 flex justify-between list-none h-11 bg-purple-700 items-center px-5 text-white text-lg'>
            <Link href="/"><div className="heading font-bold px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer">
                CutURL
            </div></Link>
            <div className="lists flex gap-10 cursor-pointer">
                <Link href="/"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>Home</li></Link> 
                <Link href="/shorten"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>Shortener</li></Link> 
                <Link href="/myurls"><li className='px-3 py-1 rounded-full hover:bg-purple-500 cursor-pointer'>MyURL's</li></Link> 
                <Link target='_blank' href="https://github.com/ZaidMuqri"><li className='px-3 py-1 rounded-lg hover:bg-purple-400 cursor-pointer bg-purple-500'>GitHub</li></Link> 
          
            </div>
        </div>
    )
}

export default Navbar
