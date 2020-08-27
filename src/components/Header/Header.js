import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
       
       <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/courses">Courses</a>
                <a href="/review">Courses Review</a>
                <a href="/manage">Manage Course</a>
            </nav>
        </div>
    
    );
};

export default Header;