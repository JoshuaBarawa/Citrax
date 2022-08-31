import React from 'react';
import Group4 from './../commons/images/Group 4.png';
import './navbar.css'


const Navbar = () => {


    const toggleMenu = () => {
        document.querySelector(".nav-menu").classList.toggle("active-menu");
    }

    return (

        <div className="navbar">
            <a className="navbar-brand" href="/"><img className="logo" src={Group4} alt="asls" /></a>

            <ul className="nav-menu">
                <a className="nav-link" activeClassName="nav-link-active" href="#/products">PRODUCTS</a>
                <a className="nav-link" activeClassName="nav-link-active" href="#/aboutus">ABOUT US</a>
                <a className="nav-link" activeClassName="nav-link-active" href="#/contactus">CONTACT US</a>
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