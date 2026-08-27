import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="cs_footer_style_1 cs_primary_bg">
        <div className="cs_footer_main">
          <div className="container">
            <div className="row cs_gap_y_40">
              <div className="col-xl-4 col-lg-3 col-md-12">
                <div className="cs_footer_widget cs_text_widget">
                  <div className="cs_footer_logo cs_mb_24 cs_mb_lg_20">
                    <img src="/assets/img/logofull.png" alt="First Choice Medical Services Logo" style={{ maxHeight: '104px', width: 'auto' }} />
                  </div>
                  <p className="cs_footer_desc cs_mb_24">
                    High-end home care services to private clientele, companies, and clinics across Qatar. Caring for You, Every Step of the Way.
                  </p>
                  <h2 className="cs_social_heading cs_fs_24 cs_medium cs_white_color cs_mb_22">Social Media</h2>
                  <div className="cs_social_btns_style_1">
                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Quick Links</h2>
                  <ul className="cs_footer_widget_nav cs_mp_0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/appointment">Book Appointment</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Our Services</h2>
                  <ul className="cs_footer_widget_nav cs_mp_0">
                    <li><Link to="/services">Nursing Care</Link></li>
                    <li><Link to="/service-details">Elderly Care</Link></li>
                    <li><Link to="/patient-resource">Infant & Mother Care</Link></li>
                    <li><Link to="/facilities">Physiotherapy</Link></li>
                    <li><Link to="/packages">Postnatal Confinement</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Get in Touch</h2>
                  <ul className="cs_footer_contact cs_mp_0">
                    <li>
                      <img src="/assets/img/icons/location-pin.svg" alt="Location" className="cs_contact_icon" />
                      <div>
                        <span className="cs_fs_20 cs_bold cs_white_color cs_mb_6">Visit Us</span>
                        <p className="mb-0">P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar</p>
                      </div>
                    </li>
                    <li>
                      <img src="/assets/img/icons/phone.svg" alt="Phone" className="cs_contact_icon" />
                      <div>
                        <a href="tel:+97441402630" aria-label="Call phone 1" className="cs_fs_18 cs_bold cs_white_color cs_mb_6 d-block">+974 4140 2630</a>
                        <a href="tel:+97450002334" aria-label="Call phone 2" className="cs_fs_18 cs_bold cs_white_color d-block">+974 5000 2334</a>
                      </div>
                    </li>
                    <li>
                      <img src="/assets/img/icons/emain.svg" alt="Email" className="cs_contact_icon" />
                      <div>
                        <a href="mailto:agentfcn@gmail.com" aria-label="Send email" className="cs_fs_18 cs_bold cs_white_color cs_mb_6 d-block">agentfcn@gmail.com</a>
                        <a href="https://www.ngtgroup-qa.com" target="_blank" rel="noopener noreferrer" className="cs_accent_color">www.ngtgroup-qa.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom">
          <div className="container">
            <div className="cs_newsletter_style_1 cs_accent_bg cs_radius_5 cs_mb_40">
              <div className="cs_newsletter_heading">
                <h2 className="cs_newsletter_title cs_fs_40 cs_semibold cs_white_color mb-0">We Take Care Of You Always</h2>
                <p className="cs_newsletter_subtitle mb-0">Dependable nursing support giving patients and families total confidence & peace of mind.</p>
              </div>
              <form action="#" className="cs_newsletter_form position-relative">
                <input type="email" name="email" className="cs_newsletter_inpu cs_white_bg cs_radius_5" placeholder="Enter your email address" autoComplete="off" />
                <button type="submit" aria-label="Subscribe" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                  <span><i className="fa-regular fa-paper-plane"></i></span>
                  <span>Contact Us</span>
                </button>
              </form>
            </div>
            <div className="cs_footer_bottom_content">
              <p className="cs_footer_copyright mb-0">&copy; 2026 <span className="cs_white_color">First Choice Medical Services</span>. All Rights Reserved.</p>
              <ul className="cs_footer_bottom_nav cs_mp_0">
                <li><Link to="/term-condition">Terms of Use</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <button type="button" name="ScrollToTopBtn" className="cs_scrollup_btn" id="scrollToTopBtn">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Footer;
