
export default function Searchbar({placeholder}) {
    return (
        <div>
            <form>
                <div className="flex items-center gap-2 py-3 px-2">
                    <div className="relative w-full">
                        <input
                            type="search"
                            className="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full"
                            placeholder={placeholder}
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-neutral-500 rounded-r-lg"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
