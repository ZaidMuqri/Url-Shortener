"use client"

import Link from 'next/link'
import "./page.css";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar';


export default function Page({ params }) {

    const [empt_list, setempt_list] = useState(false)
    const [urls, seturls] = useState([])


    useEffect(() => {

        const fetchurls = async () => {

            const res = await fetch("/api/generate")
            const data = await res.json()
            seturls(data)
        }
        fetchurls()
        if (urls.length === 0) {
            setempt_list(true)
        }
        else{
            setempt_list(false)
        }

    })

    const DeleteUrl = async (id) => {
        try {
            const res = await fetch(`/api/delete/${id}`, { method: 'DELETE' })
            const data = await res.json() // ✅ safe now
            if (data.success) {
                toast("Deleted", { autoClose: 1000 })
                seturls(urls.filter(u => u._id !== id))
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error("Error deleting:", error)
            alert("Something went wrong.")
        }
    }



    return (
        <div className="h-screen w-[screen] absolute flex flex-col items-center">
            <Navbar />
            <ToastContainer />

            <div className="all flex flex-col justify-start h-fit w-[90vw] my-10 bg-purple-100 rounded-2xl">

                <div className='font-bold text-xl mx-5 mt-7 my-5 '>
                    Your Url's:
                </div>
                {empt_list ? <span className='text-xl my-5 mx-5'>No Url's...</span> : 
                    <div className="urls h-[65vh] overflow-auto">
                        {urls.map((item) => (

                            <div className='url my-10 mx-5 px-2 w-fit bg-purple-400 rounded-lg flex' key={item._id}>
                                <div className="urls">
                                    <Link className=' cursor-pointer ' target="_blank" href={item.url}><div className='flex'><span className='font-bold w-30'>Original Url: </span><div className='w-[55vw] overflow-hidden h-[6vh] truncate ellipsis'>{item.url}</div></div></Link>
                                    <Link target='_blank' href={`https://cuturl-cz24tyep2-zaid-muqris-projects.vercel.app/${item.shorturl}`}><div className='flex'><span className='font-bold w-30'>Shortened Url: </span><div className='w-[55vw] h-[6vh] truncate ellipsis'>{item.shorturl}</div></div></Link>
                                </div>
                                <div className="actions flex w-full justify-end items-center h-[10vh]">
                                    <button
                                        className="del hover:bg-purple-500 rounded-full px-1"
                                        onClick={() => DeleteUrl(item._id)}
                                    >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                            trigger="hover"
                                            colors="primary:#242424,secondary:#4f1091">
                                        </lord-icon>

                                    </button>
                                </div>
                            </div>

                        ))}
                    </div> 
                }
            </div>


        </div>
    )
}

