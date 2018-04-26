import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Contact.css';
// AIzaSyCCd5yApgSR3BYKV5KKfCtJG5bi2E7h78w

const Contact = () => (
    <div className="page">
        <h1>Contact</h1>

        <form id="contact-form" action="https://formspree.io/irina-portfolioform@usa.net"
            method="POST" style={{textAlign: "center", paddingTop: "40px"}}>
            <p>Dear Irin,</p>

            <p>
                <textarea rows="3" name="your-message" id="your-message" placeholder="(Please type your message here)" className="expanding" required></textarea>
            </p>

            <p style={{marginTop: "25px", marginBottom: "-10px"}}>
                Regards,
            </p>

            <p>
                <input type="text" name="your-name" id="your-name" minLength="3" placeholder="(your name)" required />
            </p>

            <p>
                  <input type="email" name="your-email" id="email" placeholder="(your email address)" required />
            </p>

            <p style={{textAlign: "center", paddingTop: "10px"}}>
                <button type="submit">

                <small>send</small>

                    <svg x="0px" y="0px" width="80px" height="80px" viewBox="0 0 250 250" enableBackground="new 0 0 250 250">
<path  d="M205.405,41.28c0,0-9.845-15.544-26.943-14.508s-23.316,7.229-23.316,7.229
	S134.42,9.673,103.851,12.264C73.281,14.855,19.395,41.28,19.395,41.28s53.042-1.112,68.912,8.808
	C96.925,55.475,110.388,64.329,115,73c-3.277,7.331-7.333,28.667-55.497,45.29C21.492,131.409,15,132.5,15,132.5s36.5,1.5,59-6
	c-13,17-63.719,42.049-63.719,42.049s78.544-16.907,109.114-29.342c30.57-12.435,33.679-21.081,33.679-21.081
	s23.834,19.526,23.316,50.097C175.893,197.606,163.954,219,163.954,219s57.95-57.98,49.741-106.736
	c-4.029-23.93-22.563-26.307-24.353-44.041C187,45,205.405,41.28,205.405,41.28z"/>
<g>
	<path  d="M239.328,71.055c-0.75,4.011-2.466,7.338-5.196,10.784c-6.684,8.433-18.52,10.69-28.444,2.825
		c-10.594-8.396-13.97-23.043-4.923-34.459c7.091-8.948,18.144-9.9,26.73-3.094c7.714,6.113,8.816,14.019,5.026,18.801
		c-1.63,2.057-4.475,2.9-7.582,0.271l-0.122,0.154c1.607,4.204,1.225,7.751-1.221,10.837c-2.364,2.982-6.818,3.638-10.881,0.419
		c-6.376-5.053-8.193-14.698-2.528-21.846c1.712-2.16,3.763-3.799,5.44-4.646l7.921,9.125c3.297,3.868,5.586,4.677,6.982,3.021
		c2.182-2.542,0.956-8.284-4.958-12.971c-7.508-5.95-16.452-5.755-22.77,2.215c-6.643,8.382-5.54,20.725,4.898,28.998
		c8.588,6.806,18.378,5.439,24.409-2.171c2.323-2.931,3.865-6.146,4.354-9.192L239.328,71.055z M214.872,56.278
		c-0.612,0.351-1.511,1.062-2.448,2.245c-3.586,4.525-2.212,11.559,2.775,15.511c2.264,1.794,4.806,1.966,6.599-0.296
		c2.364-2.982,0.718-8.723-2.022-11.816L214.872,56.278z"/>
</g>
</svg>




            </button>
                  </p>
        </form>
  </div>
);

Contact.displayName = 'Contact';

export default Contact;
