import React from "react";
import image1 from './commons/images/Untitled-1.png';
import {Link} from 'react-router-dom'
import { StyledFlex } from './styles/Flex';
import StyledHome from "./styles/StyledHome";

function home(){
    return ( 
      <StyledHome>
      <StyledFlex>

      <div className="left">
      <img id="home-img" src={image1} alt=''/>
      </div>

      <div className="right">
        <p>This is a software company and home of innovation</p>

        <div className="btns">
          <Link id="lnk" to="/products">Product & Solutions</Link>
          <Link id="lnk" to="/aboutus">Our Partners</Link>
        </div>
      </div>

   </StyledFlex>
   </StyledHome>
    );
}
 
export default home;