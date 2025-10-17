"use client"

import Link from 'next/link'
import "./page.css";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export default function Page({ params }) {

    const [urls, seturls] = useState([])

    useEffect(() => {

        const fetchurls = async () => {

            const res = await fetch("/api/generate")
            const data = await res.json()
            seturls(data)
        }
        fetchurls()

    }, [])

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
        <div className="cont w-screen h-[91.7%] absolute top-11 left-0 flex ">

            <ToastContainer />

            <div className="all flex flex-col justify-start h-fit w-full mx-10 my-10 bg-purple-100 rounded-2xl">

                <div className='font-bold text-xl mx-5 mt-7 my-5 '>
                    Your Url's:
                </div>
                <div className="urls ">
                    {urls.map((item) => (

                        <div className='url my-10 mx-5 px-2 w-[70vw] bg-purple-400 rounded-lg flex' key={item._id}>
                            <div className="urls">
                                <Link className=' cursor-pointer ' target="_blank" href={item.url}><div ><span className='font-bold  w-[60vw] truncate ellipsis'>Original Url: </span><code>{item.url}</code></div></Link>
                                <Link target='_blank' href={`https://cuturl-cz24tyep2-zaid-muqris-projects.vercel.app/${item.shorturl}`}><div><span className='font-bold w-[60vw] truncate ellipsis'>Shortened Url: </span><code >{item.shorturl}</code></div></Link>
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

            </div>
        </div>
    )
}

