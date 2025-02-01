/*import Link from "next/link";
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
*/

/*
// ready database connect

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./components/Header";

import { Poppins, } from "next/font/google";


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Questions() {
    const [topics, setTopics] = useState([]); // State for topics
    const [questions, setQuestions] = useState([]); // State for questions
    const router = useRouter();

    // Function to fetch questions from the database
    const fetchQuestions = async () => {
        try {
            // Replace with your API/database fetch logic
            const response = await fetch("/api/questions/getAll"); // Example endpoint
            const data = await response.json();

            // Set topics and questions from the database
            const fetchedTopics = [...new Set(data.map((q) => q.type))]; // Extract unique question types
            setTopics(fetchedTopics);
            setQuestions(data);
        } catch (error) {
            console.error("Failed to fetch questions:", error);
        }
    };

    // Fetch questions on component mount
    useEffect(() => {
        fetchQuestions();
    }, []);

    const navigateToQuestion = (title) => {
        router.push({
            pathname: `/questions/${title}`,
        });
    };

    return (
        <>
            <Header />
            <div className="justify-center mt-8 md:mt-0 items-center grid md:grid-cols[1fr,18rem] md:gap-8 md:[&>aside]:order-1 min-h-[calc(100vh-28rem)] mb-4">
                <div className="mt-8 md:sticky md:top-16 md:h-fit md:self-start">
                    <p className="mt-6 md:mt-12 text-lg text pl-2">Choose topics</p>
                    <div className="mt-6 pl-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="inline-block rounded-md px-1.5 py-0.5 font-medium bg-gray-100 text-gray-700 hover:text-black"
                            >
                                {topic}
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
                    <div className="mt-3 h-px bg-gray-300 h-[18px]"></div>

                    <div className="grid grid-cols-1 gap-6 mt-8">
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
                                    <div className="inline-block font-light text-sm text-gray-700 dark:text-neutral-500">
                                        {question.difficulty}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    {question.description}
                                </p>
                                <div className="space-x-2 pt-3">
                                    <div className="inline-block rounded-md px-1.5 py-0.5 font-light text-sm bg-gray-100 text-gray-700">
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

*/


/*
import Link from "next/link";
import Header from "./components/Header";

import { Poppins, } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuestionContext } from "@/context/Context";
//import { useQuestionContext } from "../context/Context";


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Questions() {

    const router = useRouter();
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);

    const navigateToQuestion = (title) => {
        router.push({
            pathname: `/questions/${title}`,
        });
    };


    /*const navigateToQuestion = (question) => {
        router.push({
            pathname: `/questions/${question.title}`,
            query: { id: question.id }, // Pass question_id
        });
    };*/

/*const navigateToQuestion = (title, question_id) => {
    router.push({
        pathname: `/questions/${title}`,
        query: { question_id }, // Include the question_id
    });
};// end
 

const allquestionsFetch = async () => {
    const {allQuestions, allCodeSnippets} = useQuestionContext();
    try {
        const response = await fetch("/api/questions/getAll");
        const data = await response.json();
        allQuestions(data);
        console.log("fetched data in questions page, ", data);

         // Fetch code snippets for each question
        data.forEach(async (question) => {
            const snippetsResponse = await fetch(`/api/code_snippets/${question.id}`);
            const snippets = await snippetsResponse.json();
            allCodeSnippets(question.id, snippets);
        }); // new ^

        const topicsFetched = [...new Set(data.map((q) => q.type))]; // Get question types and add them to Set
        setTopics(topicsFetched);
        setQuestions(data);
    } catch (error) {
        console.error("fetching questions in questions page failed, ", error);
    }
};

// getAll questions on Page load
useEffect(() => {
    allquestionsFetch();
}, []);


return (
    <><Header />
        <div className="justify-center mt-8 md:mt-0 items-center grid md:grid-cols[1fr,18rem] md:gap-8 md:[&>aside]:order-1 min-h-[calc(100vh-28rem)] mb-4">
            <div className="mt-8 md:sticky md:top-16 md:h-fit md:self-start">
                <p className="mt-6 md:mt-12 text-lg text pl-2">Choose topics</p>
                <div className="mt-6 pl-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="inline-block rounded-md px-1.5 py-0.5 font-medium bg-gray-100 text-gray-700 disabled:bg-gray-200 disabled:text-gray-300 dark:bg-neutral-900 dark:text-neutral-500 dark:disabled:bg-neutral-800 dark:disabled:text-gray-500 dark:hover:text-white hover:text-black disabled:opacity-40 dark:data-[selected=true]:bg-accent-bg dark:data-[selected=true]:text-accent focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
                        >
                            {topic}
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

                            //onClick={() => navigateToQuestion(question,)}
                            //onClick={() => navigateToQuestion(question.title, question.question_id)}
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
*/

/*
// latest from chat 
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuestionContext } from "@/context/Context";
import Header from "./components/Header";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function Questions() {
    const router = useRouter();
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);

    // Context hooks
    const { allQuestions, allCodeSnippets } = useQuestionContext();

    // Navigation function
    const navigateToQuestion = (title) => {
        router.push({
            pathname: `/questions/${title}`,
        });
    };


    // Fetch all questions
    const allquestionsFetch = async () => {
        try {
            const response = await fetch("/api/questions/getAll");
            const data = await response.json();

            // Update context with questions
            allQuestions(data);
            console.log("Fetched questions:", data);

            // Fetch code snippets for each question and update context
            for (const question of data) {
                const snippetsResponse = await fetch(`/api/codeSnippets/${question.id}`);
                const snippets = await snippetsResponse.json();
                allCodeSnippets(question.id, snippets);
            }

            // Set state for topics and questions
            const topicsFetched = [...new Set(data.map((q) => q.type))];
            setTopics(topicsFetched);
            setQuestions(data);
        } catch (error) {
            console.error("Fetching questions failed:", error);
        }
    };*/


/*const allquestionsFetch = async () => {
    try {
        const response = await fetch("/api/questions/getAll");
        const data = await response.json();
        console.log("fetched data is here: ", data);
        allQuestions(data);

        data.map((question) => {
            console.log("Current question object:", question);
            console.log("Current question ID:", question.question_id); // Should not be undefined
        });

        // Fetch all code snippets in parallel
        const snippetsPromises = data.map((question) =>{
            console.log("Fetching snippets for question ID:", question.question_id);
            return fetch(`/api/codeSnippets/${question.question_id}`).then((res) => res.json())
    });
        const snippetsResults = await Promise.all(snippetsPromises);

        snippetsResults.forEach((snippets, index) => {
            allCodeSnippets(data[index].id, snippets);
        });
    } catch (error) {
        console.error("Fetching questions or snippets failed:", error);
    }
};*/



// ready database connect

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./components/Header";

import { Poppins, } from "next/font/google";
import { useQuestions } from "@/context/Context";
import { usePathname, useSearchParams } from "next/navigation";
import SearchQuestionsComp from "./components/search/questionsComp";
import FilteredComp from "./components/search/filteredComp";


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Questions() {

    const { questions, topics, setSelected, selected } = useQuestions();
    //const searchParams = useSearchParams;
    const [searchParams] = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const router = useRouter();

    const { query } = useRouter();
    const [inputTerm, setInputTerm] = useState("");
    const [topic, setTopic] = useState("");
    //const [clickedSearch, setClickedSearch] = useState(false);

    /*const [topics, setTopics] = useState([]); // State for topics
    const [questions, setQuestions] = useState([]); // State for questions
    const router = useRouter();

    // Function to fetch questions from the database
    const fetchQuestions = async () => {
        try {
            // Replace with your API/database fetch logic
            const response = await fetch("/api/questions/getAll"); // Example endpoint
            const data = await response.json();

            // Set topics and questions from the database
            const fetchedTopics = [...new Set(data.map((q) => q.type))]; // Extract unique question types
            setTopics(fetchedTopics);
            setQuestions(data);
            console.log("Data from question database, ", questions);
        } catch (error) {
            console.error("Failed to fetch questions:", error);
        }
    };

    // Fetch questions on component mount
    useEffect(() => {
        fetchQuestions();
    }, []);

    const navigateToQuestion = (title) => {
        router.push({
            pathname: `/questions/${title}`,
        });
    };*/
    //const queryFromSearch = searchParams.get('query')?.toLowerCase() || '';

    //const queryFromSearch = query.query?.toLowerCase() || '';

    //const queryFromSearch = router.query.query?.toLowerCase() || "";
    //const inputTerm = router.query.query?.toLowerCase() || "";

    /*const filtered = questions.filter((question) => question.title.toLowerCase().includes(queryFromSearch) ||
        question.description.toLowerCase().includes(queryFromSearch)
    );*/

    const filtered = questions.filter(
        (question) =>
            (!topic || question.type.toLowerCase() === topic.toLowerCase()) &&
            (question.title.toLowerCase().includes(inputTerm.toLowerCase()) ||
                question.description.toLowerCase().includes(inputTerm.toLowerCase()) ||
                question.difficulty.toLowerCase().includes(inputTerm.toLowerCase())),
        //console.log("topics, ", topic)
    );

    const suffle = (questions) => {
        const toBeSuffeled = [...questions];

        for (let i = toBeSuffeled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [toBeSuffeled[i], toBeSuffeled[j]] = [toBeSuffeled[j], toBeSuffeled[i]];
        }
        let chosen = toBeSuffeled[0];
        console.log("Chosen from rand ", chosen);
        setInputTerm(chosen.title);
    }

    //let chosen = questions[0];
    //console.log("Chosen from rand ", chosen);
    //let firstTerm = chosen.title;
    //console.log("Chosen from rand ", firstTerm);
    //setInputTerm(chosen);

    const onClickselected = (question) => {
        setSelected(question);
        console.log("from selected quest, ", selected);
        router.push({
            pathname: `/questions/${question.title}`,
        });
    };
    /*function handleSearch(term) {
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }*/

    /*function handleSearch(term) {
        //let clickedSearch = false;
        console.log(term);
        const currentQuery = { ...router.query }; // Clone existing query parameters
        //let clickedSearch = false;
        if (term) {
            currentQuery.query = term;
        } else {
            delete currentQuery.query; // Remove the query parameter if the term is empty
        }
        // router.push({ pathname: router.pathname, query: currentQuery });
        if (clickedSearch == true) {
            console.log("clickedSearch is, ", clickedSearch);
            router.push({ pathname: router.pathname, query: currentQuery });
        }
        clickedSearch == false;
        console.log("clickedSearch is, ", clickedSearch);
    };*/

    /*const handleSearch = () => {
        const currentQuery = {...router.query};
        if(inputTerm){
            currentQuery.query = inputTerm;
        } else {
            delete currentQuery.query;
        }
        /*if(clickedSearch){
            router.push({pathname: router.pathname, query: currentQuery});
            setClickedSearch(false);
        }//
    };*/



    return (
        <>
            <Header />
            <div className="justify-center items-center grid md:grid-cols[1fr,18rem] md:gap-8 md:[&>aside]:order-1 min-h-[calc(100vh-28rem)] mb-4">
                <div className="mt-20 md:sticky md:top-16 md:h-fit md:self-start"> {/* mt-8 / replaced from mt-20 md:mt-0  */}
                    <p className="mt-6 md:mt-12 text-lg text pl-2">Choose topics</p>
                    <div className="mt-6 pl-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                        {topics.map((type, index) => (
                            <div
                                key={index}
                                onClick={() => setTopic(topic === type ? "" : type)}
                                //defaultValue={type}
                                className={`inline-block rounded-md px-1.5 py-0.5 font-medium ${topic == type ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"} hover:text-black dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white`}
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                    <div className="max-w-lg mx-auto"> {/* mx-auto */}
                        <form>
                            <div className="flex items-center gap-2 py-3 px-2">
                                <div className="relative w-full">
                                    <input
                                        onChange={(e) => {
                                            //handleSearch(e.target.value)
                                            setInputTerm(e.target.value)
                                        }}
                                        //defaultValue={searchParams.get('query')?.toString()}
                                        //defaultValue={searchParams.get('query') || ''}
                                        defaultValue={inputTerm}
                                        type="search"
                                        className="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300"
                                        placeholder="Search questions"
                                    />

                                </div>
                                <button
                                    type="button"
                                    className="rounded-full bg-green-500 p-2.5 flex-shrink-0"
                                    onClick={() => suffle(questions)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-shuffle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
                                        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="border-b-2 mt-2"></div>


                    <div className="grid grid-cols-1 gap-6 mt-8">
                        {(filtered.length > 0 ?
                            (<>
                                {filtered.map((question, index) => (
                                    //filtered.length < 0 ? (
                                    <button
                                        key={index}
                                        onClick={() => onClickselected(question)}
                                        className="text-left block p-4 shadow-md bg-neutral-50"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {question.title}
                                            </h3>
                                            <div className="w-[1px] bg-neutral-600 h-[40px] sm:h-[18px]"></div>
                                            <div className="inline-block font-light text-sm text-gray-700">
                                                {question.difficulty}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {question.description}
                                        </p>
                                        <div className="space-x-2 pt-3">
                                            <div className="inline-block rounded-md px-1.5 py-0.5 font-light text-sm bg-gray-100 text-gray-700">
                                                {question.type}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </>
                            )
                            : (
                                <div className="grid grid-cols-1 w-full min-w-6xl gap-6 mt-8">
                                    <div className="justify-center text-center items-center">
                                        <p className="font-bold">Use different terms, no questions found. 😞</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

/* <button
                                        type="submit"
                                        onClick={() => {
                                            setClickedSearch(true);
                                            handleSearch();
                                        }}
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-neutral-500 rounded-e-lg"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button> */



/*  <div className={`${poppins.className} grid grid-cols-1 gap-6 mt-8`}>
                        {questions.map((question, index) => (
                            <button
                                key={index}
                                onClick={() => onClickselected(question)}
                                className="text-left block p-4 shadow-md bg-white dark:bg-neutral-800"
                            >
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {question.title}
                                    </h3>
                                    <div className="w-[1px] bg-neutral-600 h-[40px] sm:h-[18px]"></div>
                                    <div className="inline-block font-light text-sm text-gray-700 dark:text-neutral-500">
                                        {question.difficulty}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    {question.description}
                                </p>
                                <div className="space-x-2 pt-3">
                                    <div className="inline-block rounded-md px-1.5 py-0.5 font-light text-sm bg-gray-100 text-gray-700">
                                        {question.type}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div> */