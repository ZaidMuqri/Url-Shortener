import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className="cont w-screen h-[91.7%] bg-purple-100 absolute top-11 left-0 flex justify-center ">

            <div className="img h-70 w-120 mt-20 relative">

                <Image src={"/oops.jpg"} fill={true} alt="Not Found" className="oops z-10 mix-blend-darken absolute" />
            </div>
            <div className=' font-semibold w-[50vw] h-[50vh] mt-15 mr-30 flex flex-col justify-center items-center text-xl'>

                <div className="oops text-6xl text-purple-900 my-5 font-bold">
                    OOPS!
                </div>

                <div>
                    <span className='text-2xl font-bold'>404</span> - We Couldn't Find The Page You're Looking For...
                </div>
            </div>
        </div>
    )
}

export default page
