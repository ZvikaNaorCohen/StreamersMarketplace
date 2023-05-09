import React, { useState } from "react";
import "../components/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit the form data to a server or send an email here
    console.log("Form submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
        <div className="contact-form">
          <h1>Let's talk</h1>
          <p>We are here for any question or comment</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
  );
}

export default Contact;
