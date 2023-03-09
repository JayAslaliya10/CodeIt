import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/onlinecompiler">Online Compiler</Link>
                </li>
                <li>
                    <Link to="/">Web Devlopment</Link>
                </li>
                </ul>
            </nav>
        </>
    )
}