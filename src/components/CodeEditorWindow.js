import React from "react";
import Editor from "@monaco-editor/react";

export const CodeEditorWindow = () => {
    return (
        <>
        <h1>hello inside codeeditor</h1>
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        />
     </>
    )
}