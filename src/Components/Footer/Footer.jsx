import React from 'react'
import "./Footer.css"
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import {PiGithubLogoBold} from "react-icons/pi"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer d-flex flex-column">
      <div className="top-footer d-flex justify-content-around">
        <div className="about">
          <h5 className="footerTitle">ABOUT US</h5>
            <p className="text-white">Bear Emporium has been around for the last ten years, specializing
                in making stuffed bears. We have expanded in the last couple of years to include other
                high quality animals from both the land and the sea. 
            </p>  
        </div>
        <div className="faq m-2">
          <h5 className="fw-bold">FAQ/Help</h5>
          <span className="fSpan">Shipping</span>
          <span className="fSpan">Returns</span>
          <span className="fSpan">Careers</span>
          <span className="fSpan">Sell us your BEARS</span>  
        </div>
          <div className="address-phone m-2">
          <h5 className="fw-bold">OUR ADDRESS</h5>
          <span className="fSpan">12345 Bear Ave NE </span>
          <span className="fSpan">Salem, Oregon 98765</span>
          <span className="fSpan">United States of America</span>
        </div>
          <div className="contact m-2">
          <h5 className="fw-bold">CONTACT US</h5>  
          <span className="fSpan">(123)-456-7890</span>
          <span className="fSpan">bearemporium@bears.com</span>
          <div className="socialIcons my-3">
            <Link to={"https://github.com/chalen0220"} className="footerIcons text-decoration-none">
              <BsInstagram />
            </Link>
            <Link to={"https://github.com/chalen0220"} className="footerIcons text-decoration-none">
              <FiTwitter />
            </Link>
            <Link to={"https://github.com/chalen0220"} className="footerIcons text-decoration-none">
              <PiGithubLogoBold />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright d-flex">
          <span>© 2024 Fluff Emporium | Design:&nbsp; <a href="http://chalen0220.netlify.app">chalen0220</a></span>
      </div>
    </div>
  )
}

export default Footer
