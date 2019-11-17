import React from 'react';
import './header.style.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="options">
                <Link className="option" to="shop">SHOP</Link>
                <Link className="option" to="contact">Contact</Link>
                <Link className="option" to="registration">Registration</Link>
            </div>
        </div>
    )
}

export default Header;
