import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});



export default function Landing() {
  /*const gradientRef = useRef(null); 

  useEffect(() => {
    const colors = [
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0],
    ];

    let step = 0;
    const colorIndx = [0, 1, 2, 3];
    const speed = 0.002;

    function update() {
      const c0_0 = colors[colorIndx[0]];
      const c0_1 = colors[colorIndx[1]];
      const c1_0 = colors[colorIndx[2]];
      const c1_1 = colors[colorIndx[3]];

      const istep = 1 - step;
      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      const color1 = `rgb(${r1}, ${g1}, ${b1})`;

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      const color2 = `rgb(${r2}, ${g2}, ${b2})`;

      if (gradientRef.current) {
        gradientRef.current.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
      }

      step += speed;
      if (step >= 1) {
        step %= 1;
        colorIndx[0] = colorIndx[1];
        colorIndx[2] = colorIndx[3];
        colorIndx[1] = (colorIndx[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndx[3] = (colorIndx[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      }
    }

    const intervalId = setInterval(update, 10);
    return () => clearInterval(intervalId);
  }, []);*/

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

// {`${poppins.className}  bg-gradient-to-r from-blue-400 via-blue-300 to-slate-100

// ref={gradientRef} style={{ transition: "background 0.3s ease" }}