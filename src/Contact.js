import React, { Component } from "react";


class Contact extends Component {

    render() {

        return (
            <div className="page">
                <h1>Contact me</h1>

                <form
                    className="contactForm"
                    action="https://formspree.io/irina-portfolioform@usa.net"
                    method="POST">

                    <div className="fieldSet">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            minLength="2"
                            required />
                        <input
                            type="email"
                            name="_replyto"
                            placeholder="Your email address"
                            required/>
                    </div>

                    <textarea
                        name="message"
                        rows="3"
                        placeholder="Please type your message here, and click on the little bird to send"
                        required />

                    <button className="send" type="submit">

                        <svg
                            x="0px"
                            y="0px"
                            viewBox="0 0 250 250"
                            enableBackground="new 0 0 250 250">
                            <path id="littleBird"/>
                            <g>
                              <path id="littleBirdsMessage"/>
                            </g>
                        </svg>

                    </button>

                </form>
            </div>
        );
  }

}

export default Contact;
