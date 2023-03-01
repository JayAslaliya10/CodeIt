import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export const CodeEditorWindow = ({ updateCode, language, code, theme }) => {
    const [value, setValue] = useState("");
    const handleEditorChange = (value) => {
        setValue(value);
        updateCode("code", value);
    };
    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
            height="85vh"
            width="50%"
            language={language || "cpp"}
            value={value}
            theme="vs-dark"
            defaultValue="// some comment"
            onChange={handleEditorChange}
        />
        </div>
    )
}