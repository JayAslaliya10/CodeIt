import React from "react";
import '../css/home.css';
import { Outlet, Link } from "react-router-dom";
import moon from "../images/moon.png"
import logo from "../images/logowobg.png"
import logo2 from "../images/background1.png"
import '../components/Home'

export const Navbar = () => {
    return (
        <nav>
            <a href="#" className="logo"><img src={logo} alt="" id="logo"/></a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/onlinecompiler">Online IDE</Link></li>
                {/* <li><Link to="/webcompiler">Web-dev</Link></li> */}
                <li><a href="/webcompiler">Web-dev</a></li>
                <li><Link to="#">Contact Us</Link></li>
            </ul>
            {/* <div className="toggle-btn" id="btn">
                <span id="btnText">Dark</span>
                <img src={moon} alt="" id="btnIcon"/>
            </div> */}
        </nav>
    )
}