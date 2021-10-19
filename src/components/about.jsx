import React from 'react';
import StyledAbout from './styles/StyledAbout';
import { StyledFlex } from './styles/Flex';

function about() {
    return ( 
<StyledAbout>
  <StyledFlex>

      <div>

      <div id="slogan">
        <h2>SLOGAN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui, quis mollis dolor rutrum sed.
           Mauris rhoncus bibendum euismod.Nam molestie diam ac nisi ullamcorper, laoreet feugiat dolor efficitur. Suspendisse potenti. 
           Mauris pretium, lectus ac suscipit pharetra, eros risus efficitur elit, ut pulvinar magna dolor sed leo.</p>
      </div>

      <div id="our-team">
      <h2>OUR TEAM</h2>

      <div className="cards">

           <div id='item'>
            <div>
           <img src="" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>
          
            <div id='item'>
             <div>
             <img src="" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>


            <div id='item'>
             <div>
             <img src="" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>

        
       </div>
       </div>
      </div>

      <div className='right'>
      <h2>PARTNERS</h2>

      <div className="cards">

           <div id='partner'>
            <div>
            <img src="" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>
          
            <div id='partner'>
             <div>
             <img src="" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>


            <div id='partner'>
             <div>
             <img src="" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend elementum dui.</p>
          </div>
            </div>

        
       </div>


      </div>

      </StyledFlex>
</StyledAbout>
     );
}
 
export default about;