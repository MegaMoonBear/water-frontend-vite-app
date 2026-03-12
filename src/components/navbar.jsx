// don't need to refer to "react"  unless explicitly using React 
    // (e.g., React.Component or React.createElement)
import React from 'react'; 
import '/navbar>.css';

function Navbar() {
    return (
        <div id="navbar">
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="contact.html">Feedback or Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;    
