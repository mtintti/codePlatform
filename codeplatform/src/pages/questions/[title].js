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
            const response = await fetch(`/api/codeSnippets/${question_id}`);
            const data = await response.json();
            console.log("data title.js: ", data);
            setCodeData(data);

        } catch (error) {
            console.error("Failed to fetch code:", error);
        }
    };


    const current = Array.isArray(codeData)
        ? codeData.find(snippet => snippet.language.toLowerCase() === lang.toLowerCase())
        : null;
    const currentCode = current ? current.code : "// Code snippet not found for the selected language.";
    console.log("Current code is, ", currentCode);
    console.log("Current codeData is, ", codeData);
    console.log("Lang in questionpage.js ", lang);



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

    return (
        <div>
            <Header />
            <div className="pt-24 grid-cols-1 grid-rows-[auto_auto] lg:grid grid-cols-[600px,_1fr] bg-slate-100 px-2 py-2">
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
