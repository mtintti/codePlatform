// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import axios from "axios";
import { LANG_VERSION } from "../../../constraits";

const { default: axios } = require("axios");


/*export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}*/

/*
const API = axios.create({
  baseURL:"https://emkc.org/api/v2/piston",
});

export const execute = async(lang, source) => {
  const response = await API.post("/execute", {
    language: lang,
    version: LANG_VERSION[lang],
    files: [
      {
        content: source,
      },
    ],
  });
  console.log("From piston api: language ", language, " version: ",version, " and content: ", content);
  //return response.data;
  return response.data.run; 
};*/


const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const execute = async (lang, source) => {
  const response = await API.post("/execute", {
    language: lang,
    version: LANG_VERSION[lang],
    files: [
      {
        content: source,
      },
    ],
  });

  console.log("From Piston API: ", {
    language: lang,
    version: LANG_VERSION[lang],
    source,
    response: response.data,
  });

  // Return the "run" part of the response
  return response.data.run;
};




/*
const API = axios.create({
  baseURL:"https://emkc.org/api/v2/piston",
});

/*
export const execute = async (lang, source, stdin = "") => {
  const language = lang;
  const version = LANG_VERSION[lang.toLowerCase()]; 
  const content = source; 

  //"version:", version, 
  console.log("Piston: language:", language, "version:", version,  "and content:", content);

  try {
    const response = await API.post("/execute", {
      language: language,
      version: version,
      stdin,
      files: [
        {
          content: content,
        },
      ],
    });

    const {stdout, stderr, content: exitCode } = response.data.run;
    const returnValue = response.data.returnValue || "";

    return { stdout, stderr, exitCode, returnValue };
    //return response.data;
  } catch (error) {
    console.error("Piston APIs error:", error);
    throw error;
  }
};*/
/*
export const execute = async (lang, source, stdin = "") => {
  const language = lang;
  const version = LANG_VERSION[lang.toLowerCase()];
  const content = source;

  console.log("Piston: language:", language, "version:", version, "and content:", content);

  try {
    const response = await API.post("/execute", {
      language: language,
      version: version,
      stdin: stdin, // Input to the program
      files: [
        {
          content: content, // Code to run
        },
      ],
    });

    // Destructure stdout, stderr, and return values
    const { stdout = "", stderr = "", code: exitCode } = response.data.run || {};
    console.log("API Response:", response.data.run);

    // Return extracted values
    return { stdout, stderr, exitCode };
  } catch (error) {
    console.error("Piston API error:", error);
    throw error;
  }
};
*/
