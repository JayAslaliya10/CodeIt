import React from "react";
import { Navbar } from "./Navbar";
// import {Con}
import '../css/contest.css';
// import img4 from '../images/3d-character-illustration-of-programmer.png'
import { ContestTable } from "./ContestTable";

export const Contest = () => {
    return (
        <>
            <div className="header">
            <Navbar/>
            <h1 className="title">Upcoming Contests</h1>
                <div className="boxes">
                    <ContestTable platformName="Codeforces" url="codeforces"/>
                    <ContestTable platformName="Leetcode" url="leetcode"/>
                    <ContestTable platformName="CodeChef" url="codechef"/>     
                </div>
            </div>
            
        </>
    )

}  

export default Contest;