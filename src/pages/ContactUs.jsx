import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const ContactUs = () => {
  return (
    <>
      <main>
        {/* Start Page Header */}
        <PageHeader title="Get In Touch" subTitle="Your health is our priority. Reach out to us anytime." breadcrumb={[{ label: 'Contact Us' }]} />
        {/* End Page Header */}

        {/* Start Contact Support Section */}
        <section className="cs_support_section py-5">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 text-uppercase">// Reach Out Anytime</p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">First Choice Medical Services — Doha, State of Qatar</h2>
            </div>
            <div className="row cs_gap_y_24">
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_1 cs_radius_20 cs_color_1 h-100 p-4 shadow-sm">
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                      <img src="/assets/img/icons/phone.svg" alt="Phone icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Phone Numbers</h3>
                  </div>
                  <p className="mb-1"><a href="tel:+97441402630" className="fw-bold text-dark">+974 4140 2630</a></p>
                  <p className="mb-0"><a href="tel:+97450002334" className="fw-bold text-dark">+974 5000 2334</a></p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_1 cs_radius_20 cs_color_2 h-100 p-4 shadow-sm">
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                      <img src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Office Address</h3>
                  </div>
                  <p className="mb-0 cs_fs_15 text-dark">
                    P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_1 cs_radius_20 cs_color_3 h-100 p-4 shadow-sm">
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                      <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Email & Website</h3>
                  </div>
                  <p className="mb-1"><a href="mailto:agentfcn@gmail.com" className="fw-bold text-dark">agentfcn@gmail.com</a></p>
                  <p className="mb-0"><a href="https://www.ngtgroup-qa.com" target="_blank" rel="noopener noreferrer" className="cs_accent_color">www.ngtgroup-qa.com</a></p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_1 cs_radius_20 cs_color_4 h-100 p-4 shadow-sm">
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                      <img src="/assets/img/icons/calendar.svg" alt="Service Hours icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Service Hours</h3>
                  </div>
                  <p className="mb-0 fw-bold">24 Hours / 7 Days Round-The-Clock In-Home Nursing Care</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Contact Form Section */}
        <section className="cs_contact_form_section py-5 cs_gray4_bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="cs_contact_form_wrap bg-white p-5 cs_radius_20 shadow-sm">
                  <div className="cs_contact_form_heading cs_mb_40 text-center">
                    <h2 className="cs_fs_40 cs_semibold cs_mb_12">Send Us a Message</h2>
                    <p className="mb-0 text-muted">Fill out the form below and our Qatar healthcare team will contact you shortly.</p>
                  </div>
                  <form action="#" className="cs_appointment_form_1 row cs_gap_y_24">
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="contact_name">Full Name</label>
                        <input type="text" name="name" id="contact_name" className="cs_form_field" placeholder="Enter your full name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="contact_email">Email Address</label>
                        <input type="email" name="email" id="contact_email" className="cs_form_field" placeholder="Enter your email" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="contact_phone">Phone Number (Qatar)</label>
                        <input type="text" name="phone" id="contact_phone" className="cs_form_field" placeholder="+974 XXXX XXXX" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="contact_service">Service Needed</label>
                        <select className="cs_form_field" id="contact_service" name="service">
                          <option value="nursing">Home Nursing Care</option>
                          <option value="elderly">Elderly & Senior Care</option>
                          <option value="postnatal">Postnatal Confinement Care</option>
                          <option value="physio">Physiotherapy Services</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="contact_msg">Message / Requirements</label>
                        <textarea name="message" id="contact_msg" rows="4" className="cs_form_field" placeholder="How can we assist you or your family member?"></textarea>
                      </div>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        <span>Send Message</span>
                        <span><i className="fa-solid fa-paper-plane ms-2"></i></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
