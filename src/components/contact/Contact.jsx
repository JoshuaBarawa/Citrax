import React from "react";
import email from '.././commons/images/email.png';
import facebook from '.././commons/images/facebook.png';
import twitter from '.././commons/images/Twitter.png';
import phone from '.././commons/images/phone.png';
import logo from '.././commons/images/logo.png';
import './contact.css';



const contact = () => {
    return (

  <div className="contact-page">

    <img className=" back-logo" src={logo} alt=""/>

  <form className="contact-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" className="form-control" id="email" required placeholder="Your email address" />
      </div>

      <div class="form-group">
        <label for="subject">Subject <span>(Optional)</span></label>
        <input type="subject" className="form-control" id="subject" placeholder="Summary of your abservation" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" id="message" rows="4" required placeholder="Give as many details as possible..."/>
      </div>

      <input type="file" id="attachment" multiple /><br/>
      
      <input type="submit" id="btn" value="Send FeedBack" />
    </form>


  <div id="social-icons">
    <p className="contact-icon"><img src={facebook} alt=""/><span>CITRAXLTD</span></p>
    <p className="contact-icon"><img src={twitter} alt="" /><span>CITRAXLTD</span></p>
    <p className="contact-icon"><img src={email} alt="" /><span>CEO@CITRAXLTD.CO.KE</span></p>
    <p className="contact-icon"><img src={phone} alt="" /><span>CITRAXLTD</span></p>
  </div>

</div>
    );
}
 
export default contact;