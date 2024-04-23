import "./Contact.css";
import React, { useState } from "react";
import Frame from "./images/frame.png";
import Vector from "./images/Vector.png";
import Clip from "./images/ClipPath.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
  }

  return (
    <div>
      <div className="overallContact">
        <div className="contact" id="contactus">
          <div className="formPart">
            <div className="formPartImg">
              <img src={Frame} alt="logo" id="logo" />
            </div>
            <h1>Contact Us</h1>
            <p>We want to hear from you. Feel free to reach out!</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="email">
                Email Address{" "}
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </label>
              <label htmlFor="message">
                Message
                <textarea 
                  value={formData.comments}
                  placeholder=""
                  id="message"
                  onChange={handleChange}
                  name="comments"
                />{" "}
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
