
import React, { useState} from "react";
import { useRouter } from "next/router";
import Header from "./components/Header";

import { Poppins, } from "next/font/google";
import { useQuestions } from "@/context/Context";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Questions() {

    const { questions, topics, setSelected, selected } = useQuestions();
    const router = useRouter();
    const [inputTerm, setInputTerm] = useState("");
    const [topic, setTopic] = useState("");

    const filtered = questions.filter(
        (question) =>
            (!topic || question.type.toLowerCase() === topic.toLowerCase()) &&
            (question.title.toLowerCase().includes(inputTerm.toLowerCase()) ||
                question.description.toLowerCase().includes(inputTerm.toLowerCase()) ||
                question.difficulty.toLowerCase().includes(inputTerm.toLowerCase())),
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

    const onClickselected = (question) => {
        setSelected(question);
        console.log("from selected quest, ", selected);
        router.push({
            pathname: `/questions/${question.title}`,
        });
    };


    return (
        <>
            <Header />
            <div className="justify-center items-center grid md:grid-cols[1fr,18rem] md:gap-8 md:[&>aside]:order-1 min-h-[calc(100vh-28rem)] mb-4">
                <div className="mt-20 md:sticky md:top-16 md:h-fit md:self-start">
                    <p className="mt-6 md:mt-12 text-lg text pl-2">Choose topics</p>
                    <div className="mt-6 pl-2 flex flex-wrap justify-start pb-4 border-b-2 items-baseline gap-2 text-sm text-gray-600">
                        {topics.map((type, index) => (
                            <div
                                key={index}
                                onClick={() => setTopic(topic === type ? "" : type)}
                                className={`inline-block rounded-md px-1.5 py-0.5 font-medium ${topic == type ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"} hover:text-black dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white`}
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                    <div className="max-w-lg mx-auto">
                        <form>
                            <div className="flex items-center gap-2 py-3 px-2">
                                <div className="relative w-full">
                                    <input
                                        onChange={(e) => {
                                            setInputTerm(e.target.value)
                                        }}
                                        
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
