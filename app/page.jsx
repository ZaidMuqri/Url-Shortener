import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import "./page.css"



export default function Home() {
  return (
    <div className="h-screen w-[100vw] absolute ">
      <Navbar />

      <div className="home md:flex md:flex-row flex flex-col items-center mt-25 md:mt-0">

        <div className="wel w-[70vw] items-center gap-10 pt-10">

          <div className="intro flex flex-col justify-center items-center gap-7 px-10">

            <div className="welcome cursor-pointer font-bold text-xl md:text-3xl ">
              Welcome To CutURL.
            </div>
            <div className="desc cursor-pointer text-sm md:text-md xl:text-xl w-full px-5 flex justify-center items-center">
              Where you can shorten your URL for free Online.
              Use our website to shorten your URL's for free without any subscription or any login.
            </div>
          </div>
        </div>

        <div className="image relative md:block hidden md:w-[55vw] ">
          <Image src={"/group.jpg"} height={600} width={700} alt="" className="mix-blend-darken " />
        </div>

      </div>
      <div className="buttons flex w-[100%] items-center justify-center gap-20 mt-10 md:mt-0">
        <Link href="/shorten"> <div className="trynow h-[10%] w-[200%] md:h-10 md:w-70 bg-purple-600 flex items-center justify-center rounded-xl py-1  cursor-pointer  border hover:border-black hover:shadow-xl/30 text-white">Try Now</div></Link>
        <Link target="_blank" href="https://github.com/ZaidMuqri"><div className="github h-[10%] w-[200%] md:h-10 md:w-70 bg-purple-600 flex items-center justify-center rounded-xl py-1 cursor-pointer  border hover:border-black hover:shadow-xl/30 text-white">GitHub</div></Link>
      </div>
    </div>
  );
}
