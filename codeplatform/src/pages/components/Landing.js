import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});


export default function Landing() {

  return (
    <div className="min-h-screen flex">
      <div className="w-full flex flex-col content-center justify-center items-center bg-gray-200 px-4"
        
      >
        <h1 className="text-5xl md:text-5xl lg:text-6xl leading-tight tracking-wide italic font-bold">Unlock Your Coding Potential </h1>
        <h1 className="text-xs md:text-base mt-3 mb-20 text-gray-600 tracking-wide font-bold">Improve your problem-solving skills, and prepare for your next big interview!</h1>
        <div>
          <button className="rounded-full hover:text-slate-400 hover:scale-105 bg-slate-100 py-3 px-3 font-semibold text-slate-300">Create account</button>
        </div>
      </div>
    </div>
  );
}
