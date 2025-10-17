import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-[91.6vh] bg-purple-200 ">
    <div className="home flex ">
      <div className="wel w-[70vw] flex flex-col items-center pt-25 gap-10">

        <div className="welcome font-bold text-3xl ">
          Welcome To CutURL.
        </div>
        <div className="desc text-lg w-100">
          Where you can shorten your URL for free Online.
          Use our website to shorten your URL's for free without any subscription or any login.
        </div>
      </div>
      <div className="image relative h-full w-100% flex justify-end ">

        <Image src={"/group.jpg"} height={600} width={700} alt="" className="mix-blend-darken" />
      </div>

    </div>
      <div className="buttons flex h-[7.9vh] w-[55%] items-center justify-center gap-10 mb-10">
        <Link href="/shorten"> <div className="trynow h-10 w-50 bg-purple-600 flex items-center justify-center rounded-xl py-1 cursor-pointer  border hover:border-black hover:shadow-xl/30 text-white">Try Now</div></Link>
        <Link target="_blank" href="https://github.com/ZaidMuqri"><div className="github h-10 w-50 bg-purple-600 flex items-center justify-center rounded-xl py-1 cursor-pointer  border hover:border-black hover:shadow-xl/30 text-white">GitHub</div></Link> 
      </div>
    </div>
  );
}
