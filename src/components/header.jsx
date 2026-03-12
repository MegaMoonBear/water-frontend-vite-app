// don't need to refer to "react"  unless explicitly using React 
    // (e.g., React.Component or React.createElement)
import React from 'react'; 
import './header.css';

function Header() {
    return (
        <div id="header">
            <header>
                <img src="WaterSnapMap_Logo_ChatGPT.png" alt="Logo" style={{width: '50px', height: 'auto'}} />
                <h2>Try Water Snap & Map!</h2>
            </header>
        </div>
    );
};

export default Header;