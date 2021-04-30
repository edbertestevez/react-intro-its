import React from 'react';
import './Header.css';

function Header({color, title}){
    return (
        <div 
            className="app-header" 
            style={{backgroundColor: color}}
        >
            {title}
        </div>
    )
}

export default Header;