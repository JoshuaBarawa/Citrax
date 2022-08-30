import React, { useState } from "react";

import './contact.css';



const Contact = () => {

  const [active, setActive] = useState(false)

  return (

    <div>
      <div className="contact-page">

        <div className="contact-header">
          <h3>Contact Us</h3>
          <p>Have queries about our products or just want to say hello? Our team is ready to answer your questions</p>
        </div>

        <div>

          <div className="contact-card">
            <span id="contact-icon" class="material-symbols-outlined">call</span>
            <p><span>Call Us</span><br />+254712345678</p>
          </div>


          <div className="contact-card">
            <span id="contact-icon" class="material-symbols-rounded">mail</span>
            <p><span>Email Us</span><br />hello@citraxinc.io</p>
          </div>

          <div className="contact-card" onClick={() => setActive(true)}>
            <span id="contact-icon" class="material-symbols-rounded">chat_bubble</span>
            <p><span>Drop A Message</span> <br />Leave us a message and we'll get back</p>
          </div>

        </div>

      </div>



      <div className={active ? 'create-modal-active' : 'create-modal-inactive'} >

        <form className="contact-form" method="post">

          <div class="form-group" >
            <label for="email">Full Names</label>
            <input type="text" className="form-control" id="email" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject <span>(Optional)</span></label>
            <input type="subject" className="form-control" id="subject" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="4" required />
          </div>

          <div className="form-btns">
            <button type="submit" className="submit-btn">Submit</button>
            <button className="exit-btn" onClick={() => setActive(false)}>Close</button>
          </div>
        </form>

      </div>





    </div>
  );
}

export default Contact;