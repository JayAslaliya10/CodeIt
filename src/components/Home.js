import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../css/home.css';
import { Navbar } from "./Navbar";
import img1 from "../images/img2-removebg.png"
import img2 from "../images/background.png"

export const Home = () => {
    return (
        <>
            <div class="header">
                <Navbar/>
                <div class="content">
                    <h1>Hello!</h1>
                    <h1><span>We're</span> Code~It...</h1><br/>
                    <p>"Unleash your coding potential with ease: Join our platform today."</p>
                    <Link to="#">Contests</Link>
                </div>
                <div class="image-box">
                    <img src={img1} alt=""/>
                    
                    <div class="pattern">
                        <img src={img2} alt=""/>
                        <img src={img2} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}