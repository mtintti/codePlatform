/*import React, { createContext, useState, useContext } from "react";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [codeSnippets, setCodeSnippets] = useState({});

    // Function to update questions
    const allQuestions = (fetchedQuestions) => {
        setQuestions(fetchedQuestions);
    };

    // Function to update code snippets
    const allCodeSnippets = (id, snippets) => {
        setCodeSnippets((prev) => ({ ...prev, [id]: snippets }));
    };

    return (
        <QuestionContext.Provider value={{ questions, codeSnippets, allQuestions, allCodeSnippets }}>
            {children}
        </QuestionContext.Provider>
    );
};

// Custom Hook for easier access
export const useQuestionContext = () => {
    return useContext(QuestionContext);
};
*/
import { createContext, useState, useEffect, useContext } from "react";

const QuestionContext = createContext();

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selected, setSelected] = useState([])

    const allquestionsFetch = async () => {
        try {
            const response = await fetch("/api/questions/getAll");
            const data = await response.json();

            // Extract unique topics
            const fetchedTopics = [...new Set(data.map((q) => q.type))];
            setTopics(fetchedTopics);
            setQuestions(data);
            console.log("Data from question database from Context, ", questions);
        } catch (error) {
            console.error("questionsContext failed:", error);
        }
    };

    useEffect(() => {
        allquestionsFetch();
      }, []);

    
    return (
        <QuestionContext.Provider value={{ questions, topics, allquestionsFetch, selected, setSelected }}>
            {children}
        </QuestionContext.Provider>
    );
};

// Custom hook to use the Questions context
export const useQuestions = () => {
    return useContext(QuestionContext);
};
