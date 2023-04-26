import React from "react";
import '../styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <main className="main">
      <h1>Contact Form</h1>
        <form className="form">
            
          <div className="form-div">
           <label className="label">Name</label>
            <input className="input" type="text" required placeholder="Your Fullname" />
          </div>

          <div className="form-div">
            <label className="label">Email</label>
            <input className="input" type="email" required placeholder="Your Email" />
          </div>

          <div className="form-div">
            <label className="label">Phone</label>
            <input className="input" type="number"  required placeholder="Contact Number" />
          </div>

          <div className="form-div">
            <label className="label">Message</label>
            <input className="input"
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
