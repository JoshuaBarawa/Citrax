import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Group4 from './images/Group 4.png';
import {StyledNavbar} from '../styles/StyledNavbar'


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const Navbar = () => {
    return (  
<StyledNavbar>
<header className="header">
        <nav className="navbar">
        <Link className="navbar-brand" to="/"><img className="nav-img" src={Group4} alt="asls"/></Link>
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
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
</header>

    
    </StyledNavbar>

);
    }
 
export default Navbar;