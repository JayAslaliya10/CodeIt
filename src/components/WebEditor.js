import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import "../css/webeditor.css"

export default function WebEditor(props) {
  const {value, onChange, language, displayName} = props
  const handleEditorChange = (data) => {
      onChange(data)
      console.log(value);
  }
  return (
    <>
     <div className="header-class">
        <h3 className="ide-heading">{displayName}</h3>
      </div>
      <div className='editor-class'>

      <Editor
            height="100%"
            width="100%"
            language={language}
            value={value}
            theme="vs-dark"
            defaultValue={value}
            onChange={handleEditorChange}
            />
      </div>
    </>
  )
}