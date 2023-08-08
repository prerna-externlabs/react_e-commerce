import React from "react";
import "../footer/footer.css";

import { FaDiscord, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>E-COMMERCE STORE</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
              <p className="centered-paragraph ">
                @{new Date().getFullYear()} E-COMMERCE. All Rights Reserved
              </p>
          </div>
        </footer>
     
    </>
  );
};


export default Footer;
