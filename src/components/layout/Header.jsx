import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="cs_site_header cs_style_1 cs_sticky_header" aria-label="Main header">
        <div className="cs_top_header cs_accent_bg">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_contact_list cs_mp_0">
                  <li className="cs_contact_item cs_fs_14 cs_white_color">
                    <img src="/assets/img/icons/emain.svg" className="cs_contact_icon" alt="Email icon" />
                    <span className="cs_contact_text">
                      Email: <a href="mailto:contact@firstcmedical.com" aria-label="Send email tocontact@firstcmedical.com">contact@firstcmedical.com</a>
                    </span>
                  </li>
                  <li className="cs_contact_item cs_fs_14 cs_white_color">
                    <img src="/assets/img/icons/phone.svg" className="cs_contact_icon" alt="Phone icon" />
                    <span className="cs_contact_text">
                      Call Us: <a href="tel:+97441402630" aria-label="Call us">+974 4140 2630</a> / <a href="tel:+97450002334" aria-label="Call us">+974 5000 2334</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <ul className="cs_contact_list cs_mp_0">
                  <li className="cs_contact_item cs_fs_14 cs_white_color">
                    <Link to="/location" aria-label="Go to location page">
                      <img src="/assets/img/icons/location-pin.svg" className="cs_contact_icon" alt="Location icon" />
                      <span>Doha, Qatar</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header position-relative">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link to="/" aria-label="First Choice Medical Services" className="cs_site_brand">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services Logo" style={{ maxHeight: '96px', width: 'auto' }} />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <nav className="cs_nav" aria-label="Main navigation">
                  <div className="cs_nav_list_wrapper">
                    <ul className="cs_nav_list cs_mp_0" data-lenis-prevent>
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li><Link to="/about-us">About Us</Link></li>
                      <li className="menu-item-has-children">
                        <Link to="/services">Services</Link>
                        <ul>
                          <li><Link to="/services">Nursing Care</Link></li>
                          <li><Link to="/service-details">Elderly Care</Link></li>
                          <li><Link to="/patient-resource">Infant & Mother Care</Link></li>
                          <li><Link to="/facilities">Physiotherapy Services</Link></li>
                          <li><Link to="/service-details">Postnatal Confinement Care</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul>
                          <li><Link to="/login">Account Login</Link></li>
                          <li><Link to="/register">Account Register</Link></li>
                          <li><Link to="/faq">FAQ with Answer</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact-us">Contact</Link></li>
                    </ul>
                    <button type="button" className="cs_close_nav"></button>
                  </div>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_btns_wrapper">
                  <Link to="/appointment" aria-label="Book an Appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                    <span>Book Appointment</span>
                  </Link>
                  <Link to="/login" aria-label="Account Login" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/user.svg" alt="User icon" />
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
