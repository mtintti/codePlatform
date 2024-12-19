import { useState } from "react";

export default function SolutionsComponent() {

    const topics = ["Javascript", "Java", "Python", "C++"]

    const [visibleJava, SetVisibleJava] = useState(true);
    const [visibleJavaS, SetVisibleJavaS] = useState(false);
    const [visiblePython, SetVisiblePython] = useState(false);
    const [visibleCpp, SetVisibleCpp] = useState(false);

    const toggleJava = () => {
        SetVisibleJava(!visibleJava);
    } 
    const toggleJavaS = () => {
        SetVisibleJavaS(!visibleJavaS);
    }
    const togglePython = () => {
        SetVisiblePython(!visiblePython);
    }
    const toggleCpp = () => {
        SetVisibleCpp(!visibleCpp);
    }


    return (
        <div>
            <div className="text-2xl">
                <h2>Solutions</h2>
            </div>
            <div className="">
                <div className="mt-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                    {topics.map((item, index) => (
                        <div
                            key={index}
                            className="inline-block rounded-md px-1.5 py-0.5 font-medium bg-gray-100 text-gray-700 disabled:bg-gray-200 disabled:text-gray-300 dark:bg-neutral-900 dark:text-neutral-500 dark:disabled:bg-neutral-800 dark:disabled:text-gray-500 dark:hover:text-white hover:text-black disabled:opacity-40 dark:data-[selected=true]:bg-accent-bg dark:data-[selected=true]:text-accent focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="rounded-md bg-white py-2 px-2 text-left">
                    
                </div>
            </div>
        </div>
    );
}