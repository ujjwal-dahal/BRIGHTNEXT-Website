import React from "react";
import "./Footer.scss";
import { HashLink } from "react-router-hash-link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaLinkedin,FaGithub  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="link-area">
        <div className="line1"></div>
        <div className="link">
          <Link to={"https://www.facebook.com/brightness.ujjwal"} className="footer-link" target={"blank"}>
            <FaFacebookF className="icon" />
          </Link>
          <Link to={"https://www.instagram.com/brightnessujjwal/"} className="footer-link" target={"blank"}>
            <FaInstagram className="icon" />
          </Link>
          <Link to={"https://www.youtube.com/@BrightnessVlogs"} className="footer-link" target={"blank"}>
            <FaYoutube className="icon" />
          </Link>
          <Link to={"https://github.com/ujjwal-dahal"} className="footer-link" target={"blank"}>
            <FaGithub className="icon" />
          </Link>
          <Link to={"https://www.linkedin.com/in/brightnessujjwal/"} className="footer-link" target={"blank"}>
            <FaLinkedin className="icon" />
          </Link>
          <Link to={"https://www.tiktok.com/"} className="footer-link" target={"blank"}>
            <FaTiktok className="icon" />
          </Link>
        </div>
        <div className="line2"></div>
      </div>
      <div className="title">
        <p className="name">BrightNext</p>
        <p className="copyright">Copyright @ 2024 | Ujjwal Dahal</p>
      </div>
      <div className="nav-link">
        <HashLink smooth to="/#home">Home</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#brands">Brands</HashLink>
        <HashLink smooth to="/services">Services</HashLink>
        <HashLink smooth to="/contact">Contact</HashLink>
      </div>
    </footer>
  );
};

export default Footer;
