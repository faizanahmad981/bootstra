import React from 'react';
import '../footer/index.css'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>FOODI</h5>
                    <p>Savor the artistry where every dish is a culinary masterpiece</p>
                </div>
                <div className="col-md-3">
                    <h5>Useful links</h5>
                    <p><a href="#">About us</a></p>
                    <p><a href="#">Events</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">FAQ</a></p>
                </div>
                <div className="col-md-3">
                    <h5>Main Menu</h5>
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Offers</a></p>
                    <p><a href="#">Menus</a></p>
                    <p><a href="#">Reservation</a></p>
                </div>
                <div className="col-md-3">
                    <h5>Contact Us</h5>
                    <p>example@email.com</p>
                    <p>+64 958 248 966</p>
                    <p><a href="#">Social media</a></p>
                </div>
            </div>
            <div className="row bottom-row">
    <div className="col-md-6 d-flex align-items-center justify-content-between">
        <div className="social-icons d-flex">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <p className="copyright">Copyright © 2023 Dscode | All rights reserved</p>
    </div>
</div>

        </div>
    </footer>
    </>
  )
}

export default Footer;
