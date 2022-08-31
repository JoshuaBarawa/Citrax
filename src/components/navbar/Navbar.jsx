import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Group4 from './../commons/images/Group 4.png';
import './navbar.css'


const Navbar = () => {


    const toggleMenu = () => {
        document.querySelector(".nav-menu").classList.toggle("active-menu");
    }

    return (

        <div className="navbar">
            <Link className="navbar-brand" to="/"><img className="logo" src={Group4} alt="asls" /></Link>

            <ul className="nav-menu">
                <NavLink className="nav-link" activeClassName="nav-link-active" to="/products">PRODUCTS</NavLink>
                <NavLink className="nav-link" activeClassName="nav-link-active" to="/aboutus">ABOUT US</NavLink>
                <NavLink className="nav-link" activeClassName="nav-link-active" to="/contactus">CONTACT US</NavLink>
            </ul>

            <div onClick={toggleMenu} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>


    );
}

export default Navbar;