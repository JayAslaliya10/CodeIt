import React, { useState } from "react"
import { CodeEditorWindow } from "./CodeEditorWindow"
import axios from "axios"
import "../css/editor.css"

export const LandingIDE = () => {
    const [code, changeCode] = useState("");
    const [input, ChangeInput] = useState("");
    const [output, changeOutput] = useState("");
    const inputHover = (e) => {
        ChangeInput(e.target.value);
    }
    const updateCode = (s, value) => {
        if(s == "code") changeCode(value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        const data = {
            code : code,
            stdin : input,
            language : "cpp"
        }
        console.log(data);
        axios.post("http://localhost:3001/submitcode", data).then((res)=>{
            console.log(res.data.output);
            changeOutput(res.data.output.output);
        })
    }
    return (
        <>
            <div className="url-input-cont">
                <input placeholder="Enter the question URL" className="input-url"/>
                <button className="fetch-btn">Fetch</button>
            </div>
            <CodeEditorWindow updateCode={updateCode}/>
            <button onClick={handleClick}>Compile and Run</button>
            <textarea placeholder="Enter the testcases" onChange={inputHover}></textarea>
            <textarea placeholder="Your Outpue" value={output}/>
        </>
    )
}