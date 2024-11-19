import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        
        <nav className="navbar">
            <div>
            <a href="#" className="navbar-brand">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                </svg>
                <span className="navbar-title">Navbar</span>
            </a>
            </div>

            
            <div className="menu">
                <a href="#home">Home</a>
                <a href="#about-us">About Us</a>
            </div>
            

            
        </nav>
        <div className="menu">
                <a href="#home">Home</a>
                <a href="#about-us">About Us</a>
            </div>

    )
}

export default Navbar;