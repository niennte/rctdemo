import React from 'react';

const Contact = () => (
  <div className="page">
    <h1>Contact</h1>
    <p>Hello from Contact!</p>

    <form action="https://formspree.io/irina-portfolioform@usa.net"
          method="POST">
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="_replyto" placeholder="Your email address" />
      <textarea name="message" placeholder="Please type your message here" />
      <input type="submit" value="Send" />
    </form>
  </div>
);

Contact.displayName = 'Contact';

export default Contact;
