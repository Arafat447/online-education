import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center">
            <img src={logo} alt=""/>
            <nav>
                <a href="/course">Course</a>
                <a href="/review">Course Review</a>
                <a href="/manage">Manage Courses</a>
            </nav>
        </div>
    );
};

export default Header;