import Header from "./components/Header";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Profile() {
  const {isLoggedIn, setIsLoggedIn} = useAuth();

  const loggingOut = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    setIsLoggedIn(false);
  }
  console.log("is loggedin? ",isLoggedIn);

  return (
    <div>
      <Header/>
      <div className="pt-24 px-4">Profile</div>
      {(isLoggedIn) ? (<div className="mt-4 px-10 text-left">
        <p className="font-light ">Want to sign Out?</p>
        <Link href="/">
        <button onClick={loggingOut} className="rounded-md bg-neutral-400 text-white py-2 px-4 hover:bg-neutral-500 hover:text-black">Sign Out</button> </Link>
      </div>) : null}
      
    </div>
  )
}
