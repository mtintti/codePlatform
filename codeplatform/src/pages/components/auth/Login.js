import { useAuth } from "@/context/AuthContext";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function Login({switchSignin, SetIsSignedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn} = useAuth()
        console.log("SetIsSignedIn in Login comp", SetIsSignedIn);

    const loginHandle = async () => {
        try{
            const res = await fetch('/api/auth/login',{
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type' : 'application/json'},
                credentials: 'include',
            });
            if(res.ok){
                setIsLoggedIn(true);
                console.log("login success");

            }
        } catch (error){
            console.log(error);
        }
    };

    return (
        <div className="w-full md:w-96">
            <div className="py-2">
                <div className="font-bold text-lg text-left">Login</div>
            </div>
            <div className="space-y-4">
                <div className="rounded-md bg-gray-200">
                    <input onChange={(e) => (setUsername(e.target.value))} className="w-full p-2 border-none outline-none bg-transparent" placeholder="username">
                    </input>
                </div>
                <div className="rounded-md bg-gray-200">
                    <input onChange={(e) => (setPassword(e.target.value))} className="w-full p-2 border-none outline-none bg-transparent" placeholder="password" type="password">
                    </input>
                </div>
            </div>
            <div className="pt-2 items-center justify-center text-center">
                <button onClick={loginHandle} className="rounded-full p-2 w-1/3 bg-neutral-500 text-lg text-neutral-200 hover:bg-neutral-400">Login</button> {/*</div>onClick={() => signIn()}*/}
            </div>
            <div className="mt-4 text-center">
                <div className="font-light">Aready have a account?<span className="ml-1 hover:text-gray-900 hover:underline" onClick={switchSignin}>Signin</span></div>
            </div>
        </div>
    )
}
