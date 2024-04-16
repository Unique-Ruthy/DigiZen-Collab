import "./Contact.css";
import React from "react";
import Frame from "./images/frame.png";
import Vector from "./images/Vector.png";
import Clip from "./images/ClipPath.png";

const Contact = () => {
  return (
    <div>
      <div className="overallContact">
        <div className="contact">
          <div className="formPart">
            <div className="formPartImg">
              <img src={Frame} alt="logo" id="logo" />
            </div>
            <h1>Contact Us</h1>
            <p>We want to hear from you. Feel free to reach out!</p>
            <form action="">
              <label htmlFor="name">
                Name
                <input type="text" id="name" value="name" required />
              </label>
              <label htmlFor="email">
                Email Address{" "}
                <input type="email" id="email" value="email" required />
              </label>
              <label htmlFor="message">
                Message
                <textarea id="message">Message</textarea>
              </label>
              <div className="buttonPart">
                <button>
                  Send{" "}
                  <span className="vector">
                    <img src={Vector} alt="Phone" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="formside">
            <img src={Clip} alt="formside" id="formside" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
