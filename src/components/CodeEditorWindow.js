import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "../css/editor.css"

export const CodeEditorWindow = ({ updateCode, language, code, theme }) => {
    const [value, setValue] = useState("");
    const handleEditorChange = (value) => {
        setValue(value);
        updateCode(value);
    };
    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
            height="80vh"
            width="100%"
            language={language || "cpp"}
            value={value}
            theme="vs-dark"
            defaultValue="// Enter Your Code Here..."
            onChange={handleEditorChange}
        />
        </div>
    )
}