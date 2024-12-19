import Link from "next/link";
import Header from "./components/Header";

import { Poppins, } from "next/font/google";
import { useRouter } from "next/router";


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Questions() {

    const topics = ["Arrays", "Sorting", "Graphs", "Dynamic Programming", "Greedy Algorithms", "Backtracking", "Divide and Conquer", "Recursion", "Hashing", "Trees", "Search Algorithms", "Graph Traversal"]
    const questions = [
        {
            title: "Implement Subsequence Search in a Text",
            description: "Write a function to determine if a given string is a subsequence of another string.",
            diff: "Medium",
            type: "Sorting",
        },
        {
            title: "Find the Longest Palindromic Substring",
            description: "Develop an algorithm to find the longest substring in a given string that is a palindrome.",
            diff: "Easy",
            type: "Sorting",
        },
        {
            title: "Two Sum Problem",
            description: "Design a function to find two numbers in an array that add up to a target value.",
            diff: "Easy",
            type: "Sorting",
        },
        {
            title: "Binary Search Implementation",
            description: "Implement the binary search algorithm to find the position of a target element in a sorted array.",
            diff: "Medium",
            type: "Binary Search"
        },
        {
            title: "Fibonacci Sequence Using Recursion",
            description: "Create a recursive function to generate the nth Fibonacci number.",
            diff: "Hard",
            type: "recursive"
        }
    ]

    const router = useRouter();

    const navigateToQuestion = (title) => {
        router.push({
            pathname: `/questions/${title}`,
        });
    }; 

    return (
        <><Header />
            <div className="justify-center mt-8 md:mt-0 items-center grid md:grid-cols[1fr,18rem] md:gap-8 md:[&>aside]:order-1 min-h-[calc(100vh-28rem)] mb-4">
                <div className="mt-8 md:sticky md:top-16 md:h-fit md:self-start">
                    <p className="mt-6 md:mt-12 text-lg text pl-2">Choose topics</p>
                    <div className="mt-6 pl-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                        {topics.map((item, index) => (
                            <div
                                key={index}
                                className="inline-block rounded-md px-1.5 py-0.5 font-medium bg-gray-100 text-gray-700 disabled:bg-gray-200 disabled:text-gray-300 dark:bg-neutral-900 dark:text-neutral-500 dark:disabled:bg-neutral-800 dark:disabled:text-gray-500 dark:hover:text-white hover:text-black disabled:opacity-40 dark:data-[selected=true]:bg-accent-bg dark:data-[selected=true]:text-accent focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="max-w-lg mx-auto">
                        <form>
                            <div className="flex items-center gap-2 py-3 px-2">
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        className="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300"
                                        placeholder="Search questions"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-neutral-500 rounded-e-lg"
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
                                <button
                                    type="button"
                                    className="rounded-full bg-green-500 p-2.5 flex-shrink-0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-shuffle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
                                        />
                                        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="border-b-2 mt-2"></div>
                    <div className={`${poppins.className} grid grid-cols-1 gap-6 mt-8`}>
                        {questions.map((question, index) => (
                             <button
                                    key={index}
                                    onClick={() => navigateToQuestion(question.title)}
                                    className="text-left block p-4 shadow-md bg-white dark:bg-neutral-800"
                                >
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            {question.title}
                                        </h3>
                                        <div className="w-[1px] bg-neutral-600 h-[40px] sm:h-[18px]"></div>
                                        <div className="inline-block font-light text-sm text-gray-700 disabled:bg-gray-200 disabled:text-gray-300 dark:bg-neutral-900 dark:text-neutral-500 dark:disabled:bg-neutral-800">
                                            {question.diff}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        {question.description}
                                    </p>
                                    <div className="space-x-2 pt-3">
                                        <div className="inline-block rounded-md px-1.5 py-0.5 font-light text-sm bg-gray-100 text-gray-700 disabled:bg-gray-200 disabled:text-gray-300 dark:bg-neutral-900 dark:text-neutral-500 dark:disabled:bg-neutral-800">
                                            {question.type}
                                        </div>
                                    </div>
                                </button>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
