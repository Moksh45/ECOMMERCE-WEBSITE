import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and iOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1> Maa Provision Stores.</h1> {/* Enter name of store */}
        <p>High Quality is our first priority</p>

        <p>Copyright © 2023 &nbsp;
          <a href="https://example.com">Pramod Kumar Gupta (Tinnu Barikara)</a>
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://youtube.com">Youtube</a>
        <a href="https://facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
