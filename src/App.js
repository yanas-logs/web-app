import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div>
            <Navbar />
            <div className="flex-text">
                <h1>Hello, world</h1>
            </div>
        </div>
    )
}

export default App;