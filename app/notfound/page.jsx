import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <div className="cont w-screen h-screen bg-purple-100">
            <Navbar />
            <div className="flex justify-center ">


                <div className="img h-70 w-120 mt-20 relative sm:block hidden">

                    <Image src={"/oops.jpg"} fill={true} alt="Not Found" className="oops z-10 mix-blend-darken absolute" />
                </div>
                <div className=' font-semibold w-[50vw] h-[50vh] mt-15  flex flex-col justify-center items-center text-xl'>

                    <div className="oops text-6xl text-purple-900 my-5 font-bold">
                        OOPS!
                    </div>

                    <div>
                        <span className='text-2xl font-bold'>404</span> - We Couldn't Find The Page You're Looking For...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
