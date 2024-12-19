import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelect from "./LanguageSelect";
import { CODE_SNIPPETS } from "../../../constraits";
import RunButton from "./runButton";


export default function CodeEditor({eRef, runCodeOn, lang, setLang}) {
  const[val, setVal] = useState("");

const onMount = (editor) => {
  eRef.current = editor;
  editor.focus();
}
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
  setVal(CODE_SNIPPETS[selectedLang]);
};

  return (
    <div className="py-4 px-4">
      <div className="space-x-3 flex">
      <LanguageSelect lang={lang} onSelect={onSelect}/>
      <RunButton runCodeOn={runCodeOn}/>
      </div>
      <Editor height="50vh" language={lang} defaultValue={CODE_SNIPPETS[lang]} 
      onMount={onMount} value={val} onChange={(val) => setVal(val)}
      theme= "light"/>
    </div>
  )
}
