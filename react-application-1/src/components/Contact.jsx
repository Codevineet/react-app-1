import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contactPage">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required name="name" id="name" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" required name="email" id="email" />
          </div>

          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              required
              name=""
              id=""
              placeholder="Tell us About your Query"
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
