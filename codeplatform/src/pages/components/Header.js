import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full z-50 transition-opacity duration-300 opacity-100 hover:!opacity-100">
        <nav className="mt-8 px-3 rounded-lg bg-neutral-800/60 w-fit mx-auto text-sm md:text-base">
            <ul className="flex items-center gap-4">
                <Link className="py-3 px-2 text-neutral-200 hover:text-neutral-150" href="/">Home</Link>
                <Link className="py-3 px-2 text-neutral-200 hover:text-neutral-150" href="/questions">Questions</Link>
                <Link className="py-3 px-2 text-neutral-200 hover:text-neutral-150" href="/learn">Learn</Link>
                <Link className="py-3 px-2 text-neutral-200 hover:text-neutral-150" href="/about">About</Link>
                <div className="w-px bg-neutral-50 h-[18px]"></div>
                <Link className="py-3 px-2 text-neutral-200 hover:text-neutral-150" href="/profile">Profile</Link>
            </ul>
        </nav>
    </div>
    
    );
}
