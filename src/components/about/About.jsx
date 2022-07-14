
import React from 'react';
import './about.css';
import Group4 from './../commons/images/Group 4.png';

function About() {
    return ( 

<div className='about-page'>

    <div className='about-left'>
      <div id="slogan">
        <h2 className='slogan-title'>SLOGAN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui, quis mollis dolor rutrum sed.
           Mauris rhoncus bibendum euismod.Nam molestie diam ac nisi ullamcorper, laoreet feugiat dolor efficitur. Suspendisse potenti. 
           Mauris pretium, lectus ac suscipit pharetra, eros risus efficitur elit, ut pulvinar magna dolor sed leo.</p>
      </div>

      <div id="our-team">
      <h2 className='team-title'>OUR TEAM</h2>

      <div className="team-cards">
         <div id='card-item'>
            <img className="team-image" src={Group4} alt=""/>
            <p className='team-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
          
         <div id='card-item'>
            <img className="team-image" src={Group4} alt=""/>
            <p className='team-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
         </div>
            
          <div id='card-item'>
             <img className="team-image" src={Group4} alt=""/>
             <p className='team-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
    </div>
       </div>
  </div>


  <div className='about-right'>
      <h2 className='right-title'>PARTNERS</h2>

    <div className="partners-cards">
        <div id='partner'>
          <img className="partner-img" src={Group4} alt=""/>
          <p className='partner-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
        </div>
          
       <div id='partner'>
          <img className="partner-img" src={Group4} alt=""/>
          <p className='partner-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
       </div>

      <div id='partner'>
        <img className="partner-img" src={Group4} alt=""/>
        <p className='partner-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
      </div>
  </div>

</div>

</div>
     );
}
 
export default About;