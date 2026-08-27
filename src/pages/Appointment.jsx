import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Appointment = () => {
  return (
    <>
      <main>
        {/* Start Page Header */}
        <PageHeader title="Book Home Healthcare Service" subTitle="Professional home nursing, elderly care & postnatal support across Qatar." breadcrumb={[{ label: 'Book Appointment' }]} />
        {/* End Page Header */}

        {/* Start Appointment Section */}
        <section className="cs_appointment_section_5 py-5">
          <div className="container">
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_appointment_content">
                  <div className="cs_section_heading_style_1 cs_mb_24">
                    <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_6">Why Choose First Choice?</h2>
                    <p className="cs_section_desc mb-0">Directly Employed Staff • Strict Pre-Employment Training • 24/7 Home Nursing</p>
                  </div>
                  <ul className="cs_appountment_features cs_mb_58 cs_mb_lg_30 cs_mp_0">
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_semibold cs_primary_color">100% Direct Employment</strong> - No sub-contractors or independent contractors</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/nurse-line.svg" alt="Specialists icon" />
                      <span><strong className="cs_semibold cs_primary_color">Strict Recruitment & Training</strong> - Experienced & qualified caretakers</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/article-line.svg" alt="Document icon" />
                      <span><strong className="cs_semibold cs_primary_color">Individualized Attention</strong> - Tailored patient care and peace of mind</span>
                    </li>
                  </ul>
                  <div className="cs_content_bottom">
                    <div className="cs_appointment_img cs_parallax cs_radius_20 position-relative">
                      <img src="/assets/img/appointment_img_5.webp" alt="First Choice Nurse" />
                      <div className="cs_appointment_help_cta cs_fs_20 cs_semibold cs_white_color">
                        <span>Need Assistance? Call Us:</span>
                        <a href="tel:+97441402630" aria-label="Call +974 4140 2630">+974 4140 2630</a> / <a href="tel:+97450002334" aria-label="Call +974 5000 2334">+974 5000 2334</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_appointment_form_wrapper bg-white p-4 cs_radius_20 border shadow-sm">
                  <div className="cs_appointment_heading cs_mb_24">
                    <h3 className="cs_fs_32 cs_semibold cs_mb_6">Request Home Care Appointment</h3>
                    <p className="mb-0 text-muted">Fill out the details below. Our team in Doha will confirm your booking promptly.</p>
                  </div>
                  <form action="#" className="cs_appointment_form_1 row cs_gap_y_24">
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" className="cs_form_field" placeholder="Enter patient / requester name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="phone">Phone Number (Qatar)</label>
                        <input type="text" name="phone" id="phone" className="cs_form_field" placeholder="+974 XXXX XXXX" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" className="cs_form_field" placeholder="agentfcn@gmail.com" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="serviceCategory">Service Category</label>
                        <select className="cs_form_field" name="serviceCategory" id="serviceCategory">
                          <option value="nursing">Home Nursing Care</option>
                          <option value="elderly">Elderly & Senior Care</option>
                          <option value="postnatal">Postnatal Confinement Care</option>
                          <option value="physio">Physiotherapy Services</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="careDuration">Care Duration</label>
                        <select className="cs_form_field" name="careDuration" id="careDuration">
                          <option value="24h">24-Hour Continuous Nursing Care</option>
                          <option value="day">Daytime Nursing Support</option>
                          <option value="night">Nighttime Nursing Support</option>
                          <option value="confinement">Postnatal Confinement Period</option>
                          <option value="visit">Physiotherapy Visit</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap position-relative cs_gray2_bg cs_radius_5">
                        <label htmlFor="pref_date">Preferred Start Date</label>
                        <input type="date" name="date" id="pref_date" className="cs_form_field" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="location_area">Location in Qatar</label>
                        <input type="text" name="location" id="location_area" className="cs_form_field" placeholder="e.g. Doha, Al Rayyan, Pearl" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="patient_notes">Special Requirements / Notes</label>
                        <textarea name="message" id="patient_notes" rows="3" className="cs_form_field" placeholder="Please describe any medical conditions, mobility needs, or preferences."></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center">
                        <span>Confirm Appointment Request</span>
                        <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
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

export default Appointment;
