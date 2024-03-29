import React, { useState } from "react"
import { CodeEditorWindow } from "./CodeEditorWindow"
import axios from "axios"
import "../css/editor.css"
import check from "../hooks/testing"

export const LandingIDE = () => {
    const [code, changeCode] = useState("");
    const [input, ChangeInput] = useState("");
    const [output, changeOutput] = useState("");
    const [expected, changeExpected] = useState("");
    const [message, updateMsg] = useState({
        msg : "",
        color : ""
    });
    const [url, updateUrl] = useState("");
    const languages = [
        { label: 'C++', value: 'cpp' },
        { label: 'C++ 14', value: 'cpp14' },
        { label: 'C++ 17', value: 'cpp17' },
        { label: 'C', value: 'c' },
        { label: 'Java', value: 'java' },
        { label: 'Python', value: 'python' },
        { label: 'PHP', value: 'php' },
        { label: 'Perl', value: 'perl' },
        { label: 'GO Lang', value: 'go' },
        { label: 'Pascal', value: 'pascal' },
      ];
    const [selectedLanguage, setSelectedLanguge] = React.useState('cpp');
    const changeLanguage = (event) => {
        setSelectedLanguge(event.target.value);
    };
    const inputHover = (e) => {
        ChangeInput(e.target.value);
    }
    const updateCode = (s, value) => {
        if(s === "code") changeCode(value)
    }
    const expectedOutputHover = (e) => {
        changeExpected(e.target.value);
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            code : code,
            stdin : input,
            language : selectedLanguage
        }
        updateMsg({
            msg:"Compiling ...",
            color:"orange"
        })
        console.log(data);
        updateMsg({
            msg: "Compiling..",
            color : "orange"
        })
        let t1;
        await axios.post("http://localhost:3003/submitcode", data).then((res)=>{
            console.log("inside", res.data.output);
            t1 = res.data.output.output;
            changeOutput(res.data.output.output);
            // console.log(output,  " -  " ,expected);
            // console.log(typeof(output));
            // console.log(typeof(expected));
        })
        console.log("output");
        console.log(t1);
        console.log("expected");
        console.log(expected);
        if(check(t1, expected)){
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
    const fetchTestCases = async () => {
        if(url.length <= 5) return;
        console.log(url)
        const data = {
            qn_url: url
        }
        await axios.post("http://localhost:5000/api/getdata", data).then((res)=>{
            let input = res.data.ip
            input = input.join('\n');
            let op = res.data.op;
            // console.log(input, op);
            ChangeInput(input);
            changeExpected(op);
        })
    }
    return (
        <>
            <span className="heading"> ONLINE COMPILER</span>
            <div className="url-input-cont">
                <input placeholder="Enter the question URL" className="input-url" onChange={(e)=>{updateUrl(e.target.value)}} value={url}/>
                <button className="fetch-btn" onClick={fetchTestCases}>Fetch</button>
            </div>
            <div className="ide-input-container">

            <CodeEditorWindow updateCode={updateCode} language={selectedLanguage}/>
            <div className="input-container">
                <div className="submitbtn-div">
                    <button onClick={handleClick} className="submit-btn">Compile and Run</button>
                    <div>
                    <select className="lang-dropdown" value={selectedLanguage} onChange={changeLanguage}>
                        {languages.map((language) => (
                            <option value={language.value}>{language.label}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className="test-input-div"><textarea className="test-input" placeholder="Enter the testcases" onChange={inputHover} value={input}></textarea></div>
                <div className="test-input-div"><textarea className="test-input" placeholder="Enter the Expected Output" onChange={expectedOutputHover} value={expected}></textarea></div>
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