import React from "react";
import '../css/home.css';
import { Outlet, Link } from "react-router-dom";
import moon from "../images/moon.png"
import logo from "../images/logo.png"

export const Navbar = () => {
    return (
        <nav>
            <a href="#" class="logo"><img src={logo} alt="" id="logo"/></a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/onlinecompiler">Online IDE</Link></li>
                <li><Link to="/webcompiler">Web-dev</Link></li>
                <li><Link to="#">Contact Us</Link></li>
            </ul>
            <div class="toggle-btn" id="btn">
                <span id="btnText">Dark</span>
                <img src={moon} alt="" id="btnIcon"/>
            </div>
        </nav>
    )
}