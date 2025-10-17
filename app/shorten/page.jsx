"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [message, setmessage] = useState("")
    const [shortlink, setshortlink] = useState("")
    const [generated, setgenerated] = useState(false)


    const changeint = (e) => {

        seturl(e.target.value)
        setgenerated(false)
        setshortlink("")
        setmessage("")
    }

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setmessage(result.message)
                seturl("")
                setshorturl("")
                if(result.success){

                    setgenerated(true)
                    setshortlink(`https://cuturl-cz24tyep2-zaid-muqris-projects.vercel.app/${shorturl}`)
                }
            }

            )
            .catch((error) => console.log("error", error));


    }
    return (
        <div className="cont w-screen h-[91.7%] bg-purple-100 absolute top-11 left-0 flex justify-center ">

            <div className='rounded-lg flex flex-col items-center justify-center mt-17 bg-purple-200 px-15 py-8 w-120 h-70 '>
                <div className="inputs flex flex-col items-start">
                    <div className="gen font-bold text-lg w-full ml-4 my-2">Generate your short URL's</div>
                    <div className="message text-purple-900 font-bold ml-4">{message}</div>
                    <input
                        className='focus:outline-purple-600 h-8 w-90 my-2 px-2 rounded-lg mx-4 bg-white'
                        type="text"
                        value={url}
                        onChange={changeint}
                        placeholder='Enter your URL' />
                    <input
                        className='focus:outline-purple-600 h-8 w-90 my-2 px-2 rounded-lg mx-4 bg-white'
                        type="text"
                        value={shorturl}
                        onChange={(e) => setshorturl(e.target.value)}
                        placeholder='Enter your preferred URL' />
                </div>
                <div className="generate w-[100%] flex flex-col items-center">

                    <button onClick={generate} className="generate h-9 w-full bg-purple-600 flex items-center justify-center rounded-xl py-1 cursor-pointe border hover:border-black hover:shadow-xl/30 text-white my-4">Generate</button>
                    
                    {generated && <Link target='_blank' href={shortlink}><div className="link"><span className='font-bold'>Your Link:</span> <code>{shortlink}</code></div></Link>}
                    

                </div>
            </div>
        </div>
    )
}

export default page
