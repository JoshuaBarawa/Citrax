import React from "react";
import './home.css';
import dashboard from '.././commons/images/dashboard.png';
import Group4 from './../commons/images/Group 4.png';
import loginv2 from './../commons/images/loginv2.svg';

const Home = () => {

  return (

    <div>

      <div className="hero-page">

        <div className="hero">
          <div className="right">
            <p className="intro">The Operating System for your Supply Chain Business </p>
            <p className="description-p">A powerful, flexible and User friendly sales and distribution system.
              Its also an all-in-one solution for your business.</p>
            <div className="home-btns">
              <a className="get-started-home-button" href="/products">GET STARTED </a>
              <a className="live-demo-home-button" href="http://137.184.236.37:4111/dashboard" target="_blank" rel="noreferrer">LIVE DEMO</a>
            </div>
          </div>
          <img className="home-logo" src={dashboard} alt='' />

        </div>
      </div>


      <div id="clients-section">
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
        <img className="client-logo" src={Group4} alt='' />
      </div>


      <div id="achievements-hero-section">

        <div className="achievement-description">
          <h4 className="achievement-header">All In One Solution</h4>
          <p className="achievement-p">Citrax Ltd is a business partner that empowers informal
            retailers in Africa to maximize their profit and grow in a digital age.</p>
        </div>

        <div className="achievements-section">

          <div className="achievement-item">
            <p className="achievement-value">$250M+</p>
            <p className="achievement-d">in sales transactions processed</p>
          </div>

          <div className="achievement-item">
            <p className="achievement-value">50+</p>
            <p className="achievement-d">brands we work with</p>
          </div>

          <div className="achievement-item">
            <p className="achievement-value">12,000+</p>
            <p className="achievement-d">warehouses mapped</p>
          </div>

          <div className="achievement-item">
            <p className="achievement-value">5</p>
            <p className="achievement-d">operational countries</p>
          </div>

        </div>
      </div>


      <div id="why-us-section">

        <div className="feature-description">
          <h4 className="feature-header">Awesome Features</h4>
          <p className="feature-p">Rolling your entire marketing from start to end with our powerful,
            flexible application that seamlessly work together</p>
        </div>

        <div className="features-section">

          <div className="feature-item">
            <div>
              <h4 className="feature-h">Merchants</h4>
              <p className="feature-d">We enable merchants to access  FMCG products at the best prices delivered
                to your shop within hours, access inventory loans and earn more income by selling digital financial
                services such as airtime, electricity tokens and bill payments.</p>
            </div>
            <img className="feature-logo" src={loginv2} alt='' />
          </div>


          <div className="feature-item">
            <img className="feature-logo" src={loginv2} alt='' />
            <div>
              <h4 className="feature-h">Manufacturers</h4>
              <p className="feature-d">We offer the fastest access to hundreds of  thousands of retailers in Africa.We also
                provide you with real-time market intelligence to help you seamlessly grow your market share.</p>
            </div>
          </div>

        </div>

      </div>



      <div id="testimonials-section">

        <div className="testimonial-item">
          <p className="testimonial">"We enable merchants to access  FMCG products at the best prices delivered
            to your shop within hours, access inventory loans and earn more income by selling digital financial
            services such as airtime, electricity tokens and bill payments."</p>
          <div>
            <img className="client-image" src={Group4} alt='' />
            <p className="client-details">Nelson Mwangala<br />
              Chief Executive Officer, Citrax limited Kenya</p>
          </div>
        </div>


        <div className="testimonial-item">
          <p className="testimonial">"We enable merchants to access  FMCG products at the best prices delivered
            to your shop within hours, access inventory loans and earn more income by selling digital financial
            services such as airtime, electricity tokens and bill payments."</p>
          <div>
            <img className="client-image" src={Group4} alt='' />
            <p className="client-details">Edward Sanga<br />
              Chief Technology Officer, Citrax limited Kenya</p>
          </div>
        </div>

        <div className="testimonial-item">
          <p className="testimonial">"We enable merchants to access  FMCG products at the best prices delivered
            to your shop within hours, access inventory loans and earn more income by selling digital financial
            services such as airtime, electricity tokens and bill payments."</p>
          <div>
            <img className="client-image" src={Group4} alt='' />
            <p className="client-details">Joshua Mwamlanda<br />
              Senior Manager, Citrax limited Kenya</p>
          </div>
        </div>

      </div>




    </div >
  );
}

export default Home;