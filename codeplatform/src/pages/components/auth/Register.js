import { signIn, useSession } from "next-auth/react";
import { useState } from "react"

export default function Register({ switchLogin }) {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {data: session, status} = useSession();
    //console.log("Curr session", session);
    function signedin(){
      if(status === "authenticated"){
        console.log("session.user from app",session.user.name);
      }
      console.log("session.guest from app",session);
    }

    const handleSignup = async () => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (res.ok) {
                console.log("signin success");
                signedin();

            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };


        return (
            <div className="w-full md:w-96">
                <div className="py-2">
                    <div className="font-bold text-lg text-left">Create a account</div>
                </div>
                <div className="space-y-4">
                    <div className="rounded-md bg-gray-200">
                        <input onChange={(e) => (setUsername(e.target.value))} className="w-full p-2 border-none outline-none bg-transparent" placeholder="username">
                        </input>
                    </div>
                    <div className="rounded-md bg-gray-200">
                        <input onChange={(e) => (setEmail(e.target.value))} className="w-full p-2 border-none outline-none bg-transparent" placeholder="email">
                        </input>
                    </div>
                    <div className="rounded-md bg-gray-200">
                        <input onChange={(e) => (setPassword (e.target.value))} className="w-full p-2 border-none outline-none bg-transparent" placeholder="password" type="password">
                        </input>
                    </div>
                </div>
                <div className="pt-2 items-center justify-center text-center">
                    <button onClick={handleSignup} className="rounded-full py-2 w-1/3 bg-neutral-500 text-lg text-neutral-200 hover:bg-neutral-400" >Sign in</button>
                </div>
                <div className="mt-4 text-center">
                    <div className="font-light">Aready have a account?<span className="ml-1 hover:text-gray-900 hover:underline" onClick={switchLogin}>Login</span></div>
                </div>
            </div>
        )
    }
