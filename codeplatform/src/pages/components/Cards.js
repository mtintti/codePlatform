
export default function Cards() {
    return (

        <div className="bg-slate-100">
            <div className="px-4 py-4 lg:px-10 pt-5 gap-2 grid md:grid-cols-2 grid-rows-3 mb-5">
                <div className="hover:shadow-md rounded-md bg-orange-300 text-left md:row-span-3 grid grid-cols-2 text-white text-4xl font-bold p-4">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mollis arcu.</h2>
                </div>

                <div className="hover:shadow-md z-10 grid grid-row-2 md:row-span-2 rounded-md bg-slate-400 text-left text-3xl pt-4 text-white flex p-4">
                    <h1>
                        Quisque aliquet nisi et pellentesque egestas. Mauris at purus maximus,
                        vehicula elit non, tempor lacus.
                    </h1>

                    <div className="flex pt-56">
                        <div dir="lts">
                            <button className="hover:bg-gray-300 rounded-s-lg font-light text-sm bg-gray-200 py-4 px-2">
                                Button
                            </button>
                        </div>
                        <div dir="rtl">
                            <button className="hover:bg-gray-300 rounded-s-lg bg-gray-200 font-light text-sm ml-1 py-4 px-2 ">
                                Button
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hover:shadow-md grid grid-row-2 rounded-md bg-slate-300 text-left text-3xl pt-4 text-white flex p-4">
                    <h1>
                        Quisque aliquet nisi et pellentesque egestas. Mauris at purus maximus,
                        vehicula elit non, tempor lacus pellentesque egestas at purus.
                    </h1>
                    <div className="flex mt-2">
                        <div dir="lts">
                            <button className="hover:bg-gray-300 rounded-s-lg font-light text-sm bg-gray-200 py-4 px-2">
                                Button
                            </button>
                        </div>
                        <div dir="rtl">
                            <button className="hover:bg-gray-300 rounded-s-lg bg-gray-200 font-light text-sm ml-1 py-4 px-2 ">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// hover:shadow-md grid grid-row-2 md:row-span-2 rounded-md bg-slate-300 text-left text-3xl pt-4 text-white flex p-4