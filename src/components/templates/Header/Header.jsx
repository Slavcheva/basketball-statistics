import React from 'react';
import "./Header.css"
import logo from "../../../assets/logo.png"


function Header() {
    return (
        <header className="app-header">
            <div className="banner">
                <div className="logo-wrapper"><img src={logo} alt="basketball"/></div>
                <h1>Basketball Statistics</h1>
            </div>
        </header>
    );
}

export default Header;