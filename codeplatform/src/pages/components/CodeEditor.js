import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelect from "./LanguageSelect";
//import { CODE_SNIPPETS } from "../../../constraits";
import RunButton from "./runButton";


export default function CodeEditor({ eRef, runCodeOn, lang, setLang, codeData }) {
  const [val, setVal] = useState("");

  const onMount = (editor) => {
    eRef.current = editor;
    editor.focus();
  }

  useEffect(() => {
    setVal(codeData || "");
  }, [codeData]);
  /*const onSelect = (lang) => {
    setLang(lang);
    setVal(CODE_SNIPPETS[lang]);
  }*/

  /*const onChangeLang = (newlang) => {
    onChangeLang(newlang);
    setVal(CODE_SNIPPETS[newlang]);
  }*/

  const onSelect = (selectedLang) => {
    setLang(selectedLang);
    //setVal(CODE_SNIPPETS[selectedLang]);
    setVal(codeData);
    console.log("Curr Val in CodeEditor.js, ", val);
  };
  console.log("Val is right now ", codeData, " and current lang, ", lang);


  return (
    <div className="py-4 px-4">
      <div className="space-x-3 flex">
        <LanguageSelect lang={lang} onSelect={onSelect} />
        <RunButton runCodeOn={runCodeOn} />
      </div>
        <Editor height="50vh" language={lang}  // CODE_SNIPPETS[lang]
          onMount={onMount} value={val} onChange={(val) => setVal(val)}
          theme="light" />
    </div>
  )
}
