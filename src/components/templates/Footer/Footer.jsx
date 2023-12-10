import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <footer className='app-footer'>
            <div className="app"><small>Basketball Statistics App © 2023</small></div>
            <div className="version">
                <small>
                    <span>Version: 1.0.0.0</span>
                </small>
            </div>
        </footer>
    );
}

export default Footer;