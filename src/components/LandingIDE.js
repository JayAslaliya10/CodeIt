import React, { useState } from "react"
import { CodeEditorWindow } from "./CodeEditorWindow"
import axios from "axios"
import "../css/editor.css"

export const LandingIDE = () => {
    const [code, changeCode] = useState("");
    const [input, ChangeInput] = useState("");
    const [output, changeOutput] = useState("");
    const [expected, changeExpected] = useState("");
    const [message, updateMsg] = useState({
        msg : "",
        color : ""
    });
    const inputHover = (e) => {
        ChangeInput(e.target.value);
    }
    const updateCode = (s, value) => {
        if(s == "code") changeCode(value)
    }
    const expectedOutputHover = (e) => {
        changeExpected(e.target.value);
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            code : code,
            stdin : input,
            language : "cpp"
        }
        // console.log(data);
        await axios.post("http://localhost:3001/submitcode", data).then((res)=>{
            console.log(res.data.output);
            changeOutput(res.data.output.output);
        })
        if(output == expected){
            updateMsg({
                msg: "Accepted",
                color : "green"
            })
        }else{
            updateMsg({
                msg: "Wrong Answer",
                color : "red"
            })
        }
    }
    return (
        <>
            <div className="url-input-cont">
                <input placeholder="Enter the question URL" className="input-url"/>
                <button className="fetch-btn">Fetch</button>
            </div>
            <div className="ide-input-container">

            <CodeEditorWindow updateCode={updateCode}/>
            <div className="input-container">
                <div className="submitbtn-div"><button onClick={handleClick} className="submit-btn">Compile and Run</button> </div>
                <div className="test-input-div"><textarea className="test-input" placeholder="Enter the testcases" onChange={inputHover}></textarea></div>
                <div className="test-input-div"><textarea className="test-input" placeholder="Enter the Expected Output" onChange={expectedOutputHover}></textarea></div>
                <div className="test-input-div">
                    <div className="output-msg">
                        <h3>Output</h3>
                        {/* <h3>{message.msg}</h3> */}
                        <h3 style={{color: `${message.color}`}}> {message.msg} </h3>
                    </div>
                    <textarea className="test-input" placeholder="Your Output" value={output}/ > 
                </div>
            </div>
            </div>
        </>
    )
}