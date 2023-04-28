import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../css/home.css';
import { Navbar } from "./Navbar";
import img1 from "../images/img2-removebg.png"
import img2 from "../images/background.png"
import img3 from "../images/moon.png"
import img4 from "../images/sun.png"
import {createContext,useState} from "react";
import ReactSwitch from 'react-switch'
export const ThemeContext=createContext(null);


export const Home = () => {
    const[theme,setTheme] = useState("dark");

    const toggleTheme= () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }
    return (
        <>
            <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className="header" id={theme}>
                <Navbar/>
                
                <div className="toggle-btn" id="btn">
                <span id="btnText">{theme === "light" ? "Light": "Dark"}</span>
                <img src={theme === "light" ? img4 : img3} alt="" id="btnIcon"/>
                <div className="switch" id="btn1">
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                 </div>

                
                </div>
                <div className="content">
                    <h1>Hello!</h1>
                    <h1><span>We're</span> Code~It...</h1><br/>
                    <p>"Unleash your coding potential with ease: Join our platform today."</p>
                    <Link to="/contestpage">Contests</Link>
                    
                </div>
                <div className="image-box">
                    <img className="pc" src={img1} alt=""/>
                    <div className="pattern">
                        <img src={img2} />
                        <img src={img2} />
                    </div>
                  
                </div>
            </div>
            </ThemeContext.Provider>
            
        </>
        
    )
}