import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-brand">
                    <svg width="24" height="24" >
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                    </svg>
                    Navbar
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>


        </div>

    )
}

export default Navbar;