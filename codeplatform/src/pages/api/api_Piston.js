
import { LANG_VERSION } from "../../../constraits";

const { default: axios } = require("axios");


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

  // Returnataan "run" osa responsesta
  return response.data.run;
};

