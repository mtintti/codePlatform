export default function Header() {
    return (
        <div className="bg-slate-100 h-16 flex items-center flex flex:row w-full"> 
        <div className="flex-1 ml-3">
            <p className="text-3xl">codePlatform</p>
        </div>

        <div className="flex flex-1 space-x-8 font-medium text-lg md:ml-20 text-slate-700 items-center">
            <p className="cursor-pointer hover:border-b-2 border-blue-400">Questions</p>
            <p className="cursor-pointer hover:border-b-2 border-blue-400">About</p>
            <p className="cursor-pointer hover:border-b-2 border-blue-400">kdsaodsa</p>
            <div className="rounded-full bg-slate-700 justify-center items-center hidden md:flex">
                <input className="py-2 pl-5 rounded-full placeholder:italic placeholder:text-slate-400" placeholder="search for any question.."></input>
            </div>
        </div>

        <div className="flex flex-1 space-x-4 text-right mr-4">
            <button className="bg-slate-500 text-white font-medium px-4 py-2 rounded-full hover:bg-slate-200 hover:text-black">
                Sign In
            </button>
        </div>
    </div>
    );
}