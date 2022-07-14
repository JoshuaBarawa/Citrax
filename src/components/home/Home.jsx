import React from "react";
import image1 from '.././commons/images/Untitled-1.png';
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {

  return (

    <div className="home-page">

      <div className="left">
        <img className="home-logo" src={image1} alt='' />
      </div>


      <div className="right">

          <p className="intro">This is a software company and home of innovation</p>
          <div className="btns">
            <Link className="home-link" to="/products">Product & Solutions</Link>
            <Link className="home-link" to="/aboutus">Our Partners</Link>
          </div>

      </div>

    </div>
  );
}

export default Home;