import { signOut, useSession } from "next-auth/react"

export default function Profile() {
  const {data: session, status} = useSession();
  return (
    <div className="">
      <div>Profile</div>
      {(status === "authenticated") ? (<div className="mt-4">
        <p className="font-light text-neutral-200">Want to sign Out?</p>
        <button onClick={() => signOut} className="rounded-md bg-neutral-400 text-white py-2 px-4">Sign Out</button>
      </div>) : null}
    </div>
  )
}
