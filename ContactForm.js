
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactFormStyles.css"
function ContactForm(){

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ud1nm3f', 'template_di3rv4j', form.current, 'mebW9di93YKGnpqXw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    return(
        <div className="form-container">
        <h1>Send a message to us!</h1>

        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>






        {/* <form>
            <input placeholder="Name" name="user_name"/>
            <input placeholder="Email" name="user_email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="message" rows="4"></textarea>
            <button>Send Message</button>
        </form> */}
        </div>
    )
}

export default ContactForm