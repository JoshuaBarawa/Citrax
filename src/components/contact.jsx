import React from "react";
import email from './commons/images/email.png';
import facebook from './commons/images/facebook.png';
import twitter from './commons/images/Twitter.png';
import phone from './commons/images/phone.png';
import logo from './commons/images/logo.png';
import StyledContact from "./styles/StyledContact";
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

const contact = () => {
    return (
  <StyledContact>
    <img src={logo} alt=""/>
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Your email address" />
  </div>

  <div class="form-group">
    <label for="subject">Subject <span>(Optional)</span></label>
    <input type="subject" className="form-control" id="subject" placeholder="Summary of your abservation" />
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea className="form-control" id="message" rows="4"  placeholder="Give as many details as possible..."/>
  </div>

    <input type="file" id="attachment" multiple />
  

  <input type="submit" id="btn" value="Send FeedBack" />
</form>


<div id="social-icons">
   <img src={facebook} alt=""/><span>CITRAXLTD</span>
   <img src={twitter} alt="" /><span>CITRAXLTD</span>
   <img src={email} alt="" /><span>CEO@CITRAXLTD.CO.KE</span>
   <img src={phone} alt="" /><span>CITRAXLTD</span>
</div>

    </StyledContact>
    );
}
 
export default contact;