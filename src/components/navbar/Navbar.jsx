import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Group4 from './../commons/images/Group 4.png';
import './navbar.css'


const Navbar = () => {

    const navLink = document.querySelectorAll(".nav-link");

    function toggleMenu() {
        document.querySelector(".nav-menu").classList.toggle("active-menu");
    }

    function closeMenu() {
        document.querySelector(".nav-menu").classList.remove("active-menu");
        console.log(navLink)
    }
    navLink.forEach(n => n.addEventListener("click", closeMenu()));


    return (

        <div className="navbar">
            <Link className="navbar-brand" to="/"><img className="logo" src={Group4} alt="asls" /></Link>

            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName="nav-link-active" to="/" >HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/products">PRODUCTS</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/aboutus">ABOUT US</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/contactus">CONTACT US</NavLink>
                </li>
            </ul>

            <div onClick={toggleMenu} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>


    );
}

export default Navbar;