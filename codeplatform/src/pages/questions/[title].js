import { useRouter } from "next/router";
import Header from "../components/Header";


import { Poppins, } from "next/font/google";
import CodeEditor from "../components/CodeEditor";
import Output from "../components/Output";
import { useEffect, useRef, useState } from "react";
import { execute } from "../api/api_Piston";
import QuestionsComponent from "../components/QuestionsComponent";
import DiscussionComponent from "../components/DiscussionComponent";
import SolutionsComponent from "../components/SolutionsComponent";
import { useQuestions } from "@/context/Context";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function QuestionPage() {
    const router = useRouter();
    //const { title } = router.query;

    //const { questions, topics } = useQuestions();
    const eRef = useRef(null);
    const [output, setOutput] = useState("");
    const [visibleDis, SetVisibleDis] = useState(false);
    const [visibleQuest, setVisibleQuest] = useState(true);
    const [visibleSol, setVisibleSol] = useState(false);
    const [lang, setLang] = useState("java");
    const { selected } = useQuestions();
    const [codeData, setCodeData] = useState([]);


    useEffect(() => {
        if (selected) {
            getCodes(selected.question_id);
            console.log("Selected id is ", selected.question_id);
        }
    }, [selected]);
    if (lang) {
        console.log("Lang is , ", lang);
    }


    const getCodes = async (question_id) => {
        try {
            // Replace with your API call or data fetching logic
            const response = await fetch(`/api/codeSnippets/${question_id}`);
            const data = await response.json();
            console.log("data title.js: ", data);
            setCodeData(data); // Assuming the API returns { code: "..." 

        } catch (error) {
            console.error("Failed to fetch code:", error);
        }
    };

    /*const current = codeData.find(snippet => snippet.language.toLowerCase() === lang.toLowerCase());
    const currentCode = current ? current.code :  "// Code snippet not found for the selected language.";*/

    const current = Array.isArray(codeData)
        ? codeData.find(snippet => snippet.language.toLowerCase() === lang.toLowerCase())
        : null;
    const currentCode = current ? current.code : "// Code snippet not found for the selected language.";
    console.log("Current code is, ", currentCode);
    console.log("Current codeData is, ", codeData);
    console.log("Lang in questionpage.js ",lang);



    const runCode = async () => {
        const source = eRef.current.getValue();
        if (!source) {
            setOutput("No code provided.");
            console.log("source from, runCode ", source);
            return;
        }

        try {
            const result = await execute(lang, source);
            console.log("Result from Piston:", result);

            setOutput(result.output || "No output returned.");
        } catch (error) {
            console.error("Error from code execution:", error);

        }
    };

    const toggleDis = () => {
        SetVisibleDis(true);
        setVisibleQuest(false);
        setVisibleSol(false);
        console.log("Dis pressed!, ", "Dis: ", visibleDis, "Quest: ", visibleQuest, "Sol: ", visibleSol);
    };

    const toggleQuest = () => {
        SetVisibleDis(false);
        setVisibleQuest(true);
        setVisibleSol(false);
        console.log("Quest pressed!, ", "Dis: ", visibleDis, "Quest: ", visibleQuest, "Sol: ", visibleSol);
    };
    const toggleSol = () => {
        SetVisibleDis(false);
        setVisibleQuest(false);
        setVisibleSol(true);
        console.log("Sol pressed!, ", "Dis: ", visibleDis, "Quest: ", visibleQuest, "Sol: ", visibleSol);
    };

    /*
        const codesfromId = async () => {
           try {
               const response = await fetch(`/api/codeSnippets/${id}`);
               const d = await response.json();
               setCodes(d);
               console.log("codes from QuestionComp, ", codes);
    
           } catch (error){
               console.error("codes from Contex failed:", error);
           }
       }
    
       useEffect(() => {
        if(selectedQ){
            setQuestionDetails(selectedQ);
            codesfromId(selectedQ.id);
        }
       }, [selectedQ]);
    
    */
    // auto_auto

    return (
        <div className="pt-24">
            <Header />
            <div className="grid-cols-1 grid-rows-[auto_auto] lg:grid grid-cols-[600px,_1fr] bg-slate-100 px-2 py-2">
                <div className="flex space-x-2 ml-2 mb-1 space-x-4 font-extralight">
                    <div>
                        <button onClick={toggleQuest}>
                            <p className="hover:underline">Question</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={toggleDis}>
                            <p className="hover:underline">Discussion</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={toggleSol}>
                            <p className="hover:underline">Solutions</p>
                        </button>
                    </div>
                </div>
                <div></div>
                <div>
                    <div className="grid pt-8 mb-2 px-4 rounded-md bg-slate-200">
                        {visibleQuest && <QuestionsComponent />}
                        {visibleDis && <DiscussionComponent />}
                        {visibleSol && <SolutionsComponent />}
                    </div>
                </div>
                <div className="grid-rows-[,_50%] pt-2 md:pt-0 lg:px-2 lg:pr-6">
                    <div className="bg-slate-200 rounded-md"><CodeEditor eRef={eRef} codeData={currentCode} runCodeOn={runCode} lang={lang} setLang={setLang} /></div>
                    <div className=" mt-2 bg-slate-200 rounded-md "><Output output={output} eRef={eRef} lang={lang} /></div>
                </div>
            </div>
        </div>
    );
}

/*
import { useQuestionContext } from "../../context/Context";

const QuestionDetails = ({ questionId }) => {
    const { questions, codeSnippets } = useQuestionContext();

    const question = questions.find((q) => q.id === questionId);
    const snippets = codeSnippets[questionId];

    return (
        <div>
            <h1>{question?.title}</h1>
            <p>{question?.description}</p>
            <h3>Code Snippets:</h3>
            <pre>{snippets ? JSON.stringify(snippets, null, 2) : "No snippets available"}</pre>
        </div>
    );
};

export default QuestionDetails;

*/



/* <div className="flex flex-row">
                    <div className="basis-1/2 bg-orange-400 text-center text-slate-200">
                        <p className="justify-center items-center">1</p>
                    </div>
                    <div className="flex-col">
                        <div className="basis-1/3 bg-green-600 text-center text-slate-200">2</div>
                        <div className="basis-1/3 bg-gray-400 text-center text-slate-200">3</div>
                    </div>
                </div> */


/* <div className="grid pt-8 px-4 rounded-md bg-slate-200">
                    <div className="text-2xl">
                        <h2>{title}</h2>
                        <div className="mt-3 h-px bg-neutral-500 h-[18px]"></div>
                        <div className=" text-base my-4">
                            <p> Given a string s which consists of lowercase or uppercase letters, return the length of the longest
                                palindrome
                                that can be built with those letters.</p>
                            <p>Letters are case sensitive, for example, "Aa" is not considered a palindrome.</p>
                            <div className="pl-3 mt-8 text-base font-semi  space-x-4">
                                Example:
                                <div className="pl-2 text-base font-light">Input: s = "abccccdd"
                                    Output: 7</div>
                                <div className=" mt-4 text-base font-semi">
                                    Example:
                                    <div className="pl-2 text-base font-light">Input: s = "a"
                                        Output: 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */
