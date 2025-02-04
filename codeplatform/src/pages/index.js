import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header";
import CardLines from "./components/cardLineComponent";
import Landing from "./components/Landing";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import { useSession } from "next-auth/react";
import Statements from "./components/Statements";
import Footer from "./components/footer";
import TextStatement from "./components/Text";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});*/
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
 /* const {data: session, status} = useSession();
    console.log("Curr session", session);
      if(status === "authenticated"){
        console.log("session.user from app",session.user.name);
      }
      console.log("session.guest from app",session);*/
  return (
    <div className=" w-full">
      <Header />
      <Landing />
      <Slider/>
      <Statements/>
      <TextStatement/>
      <Footer/>
    </div>
  );
}

// <Cards/>

/* <div className="grid md:grid-cols-3 gap-3 justify-center text-center">
        <div className="my-11 space-y-8">
        <div className="bg-zinc-200 rounded-md py-8 px-8">
          <div className="text-xl md:text-3xl">
            <p>HJASDISASD  AISDSA HD JASDIA</p>
          </div>
          <div className="mx-4 my-4">
            <p>aksdoskad aoksdakd kasdoa</p>
          </div>
        </div>
        <div className="bg-zinc-200 rounded-md py-8 px-8 grid-cols-2">
          <div className="text-xl md:text-3xl">
            <p>HJASDISASD  AISDSA HD JASDIA</p>
          </div>
          <div className="mx-4 my-4">
            <p>aksdoskad aoksdakd kasdoa</p>
          </div>

        </div><div className="bg-zinc-200 rounded-md py-8 px-8 grid-col-3">
          <div className="text-xl md:text-3xl">
            <p>HJASDISASD  AISDSA HD JASDIA</p>
          </div>
          <div className="mx-4 my-4">
            <p>aksdoskad aoksdakd kasdoa</p>
          </div>
        </div>
        </div>
      </div> */


// start code

// <img src="https://unsplash.it/700/600" />

/* <div className="flex justify-center items-center text-2xl mx-4 md:mx-20 my-20">
        <div className="flex ">Start getting better at Algorithms today!</div>
      </div> */

/* <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */

//second
/* <div className="bg-slate-100 h-16 flex items-center px-10">
        <div className="flex-shrink-0">
          <p className="text-lg font-bold">codePlatform</p>
        </div>

        <div className="hidden md:flex space-x-8 font-medium ml-20">
          <p className="cursor-pointer hover:text-slate-400">Questions</p>
          <p className="cursor-pointer hover:text-slate-400">About</p>
          <p className="cursor-pointer hover:text-slate-400">kdsaodsa</p>
        </div>

        <div className="flex space-x-4 text-right">
          <button className="font-medium hover:underline">Log In</button>
          <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div> */