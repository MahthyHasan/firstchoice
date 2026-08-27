import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Event Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Event Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Event Details Section */}
      <section className="cs_event_details_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_event_details">
                <div className="cs_event_details_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/event_img_1.webp" alt="Community Health Camp 2026" />
                  <span className="cs_event_details_badge">
                  <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                  <span className="cs_primary_color">9:00 AM - 4:00 PM</span>
                  </span>
                </div>
                <div className="cs_event_details_block cs_mb_48 cs_mb_lg_30">
                  <h2>About the Camp</h2>
                  <p>Hospil’s annual Community Health Camp 2026 is designed to provide accessible healthcare services for all ages. From blood pressure checks to pediatric consultations, our expert team ensures quality care for underserved communities. This two-day event will feature state-of-the-art mobile medical units, on-site pharmacy for free basic medicines, and educational sessions on nutrition & chronic disease prevention.</p>
                </div>
                <div className="cs_event_details_block cs_mb_48 cs_mb_lg_30">
                  <h2>Key Highlights</h2>
                  <ul className="cs_event_highlight_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">Free General Checkups</span> - BP, Sugar, BMI, and basic cardiac screening.</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">Dental & Eye Camp</span> - Vision testing, dental checkup & free glasses for seniors.</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">Women & Child Health Zone</span> - Vaccination drive, prenatal guidance.</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">Wellness Workshops</span> - Yoga, mental health awareness, and diet planning.</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">On-site Pharmacy</span> - Free essential medicines & vitamin supplements.</p>
                    </li>
                  </ul>
                </div>
                <div className="cs_event_details_block cs_mb_48 cs_mb_lg_30">
                  <h2>Event Schedule (Day 1 & 2)</h2>
                  <ul className="cs_event_schedule_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">9:00 AM - 11:00 AM</span> Registration & General OPD</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">11:00 AM - 1:00 PM</span> Specialist Consultation (Cardio, Diabetes, Ortho)</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">1:00 PM - 2:00 PM</span> Health Talk: “Preventing Lifestyle Diseases”</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">2:00 PM - 4:30 PM</span> Pediatric Checkup & Vaccination Camp</p>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                      <p className="mb-0"><span className="cs_semibold cs_primary_color">4:30 PM - 5:00 PM</span> Free Medicine Distribution & Closing</p>
                    </li>
                  </ul>
                </div>
                <div className="cs_event_details_block cs_mb_48 cs_mb_lg_30">
                  <h2>Guest Speakers</h2>
                  <div className="row cs_gap_y_24">
                    <div className="col-md-4 col-sm-6">
                      <div className="cs_team_Style_1">
                        <div className="cs_team_img cs_radius_20 cs_mb_30 cs_mb_lg_20 position-relative">
                          <img  src="/assets/img/team_img_1.webp" alt="Doctor image" />
                          <div className="cs_team_contact">
                            <div className="cs_team_social">
                              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                            <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            <span>Appointment</span>
                            </Link>
                          </div>
                        </div>
                        <div className="cs_team_info">
                          <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_10">
                            <Link  to="/doctor-details" aria-label="View doctor details">Dr. Gregory Bynum</Link>
                          </h3>
                          <p className="cs_team_subtitle mb-0">Public Health Expert</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="cs_team_Style_1">
                        <div className="cs_team_img cs_radius_20 cs_mb_30 cs_mb_lg_20 position-relative">
                          <img  src="/assets/img/team_img_2.webp" alt="Doctor image" />
                          <div className="cs_team_contact">
                            <div className="cs_team_social">
                              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                            <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            <span>Appointment</span>
                            </Link>
                          </div>
                        </div>
                        <div className="cs_team_info">
                          <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_10">
                            <Link  to="/doctor-details" aria-label="View doctor details">Dr. Lori Fletcher</Link>
                          </h3>
                          <p className="cs_team_subtitle mb-0">MCh (Neurosurgery)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="cs_team_Style_1">
                        <div className="cs_team_img cs_radius_20 cs_mb_30 cs_mb_lg_20 position-relative">
                          <img  src="/assets/img/team_img_3.webp" alt="Doctor image" />
                          <div className="cs_team_contact">
                            <div className="cs_team_social">
                              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                            <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            <span>Appointment</span>
                            </Link>
                          </div>
                        </div>
                        <div className="cs_team_info">
                          <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_10">
                            <Link  to="/doctor-details" aria-label="View doctor details">Dr. Philip Johnson</Link>
                          </h3>
                          <p className="cs_team_subtitle mb-0">Cardiologist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs_event_details_block">
                  <h2>Free Giveaways & Benefits</h2>
                  <p>First 200 registrants get a free health kit, medicine discount coupons, and health record booklet. Free ambulance shuttle from city center.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Venue Location</h3>
                  <div className="cs_venue_address cs_mb_24">
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Hospil Main Campus, Outdoor Arena</span>
                  </div>
                  <div className="cs_venue_map cs_radius_20 cs_mb_22">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.0!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE3JzI1LjQiTiA3NsKwMzYnNDQuMCJX!5e0!3m2!1sen!2sus!4v1700000000000" title="Hospil Main Campus location map"></iframe>
                  </div>
                  <div className="cs_venue_date">
                    <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span className="cs_accent_color">Saturday, Jun 27, 2026</span>
                  </div>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Reserve Your Spot</h3>
                  <form action="#" className="cs_appointment_form cs_reserve_form">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_name">Full Name</label>
                      <input  type="text" name="reserve_name" id="reserve_name" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_phone">Phone Number</label>
                      <input  type="text" name="reserve_phone" id="reserve_phone" className="cs_form_field" placeholder="Enter your Phone number" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_email">Email Address</label>
                      <input  type="email" name="reserve_email" id="reserve_email" className="cs_form_field" placeholder="info@hospil.com" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_gender">Gender</label>
                      <select className="cs_form_field cs_choice" name="reserve_gender" id="reserve_gender">
                        <option selected>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_checkup">Preferred Health Checkup</label>
                      <select className="cs_form_field cs_choice" name="reserve_checkup" id="reserve_checkup">
                        <option selected>General Health Checkup</option>
                        <option>Cardiac Screening</option>
                        <option>Dental & Eye Checkup</option>
                        <option>Diabetes Screening</option>
                        <option>Women & Child Health</option>
                      </select>
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_slot">Preferred Time Slot</label>
                      <select className="cs_form_field cs_choice" name="reserve_slot" id="reserve_slot">
                        <option selected>9:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 1:00 PM</option>
                        <option>2:00 PM - 4:30 PM</option>
                      </select>
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_condition">Any existing medical condition?</label>
                      <input  type="text" name="reserve_condition" id="reserve_condition" className="cs_form_field" placeholder="e.g., Diabetes, Hypertension" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="reserve_source">How did you hear about this camp?</label>
                      <select className="cs_form_field cs_choice" name="reserve_source" id="reserve_source">
                        <option selected>Social Media</option>
                        <option>Friends & Family</option>
                        <option>Hospil Website</option>
                        <option>Newspaper</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <label className="cs_reserve_check">
                    <input  type="radio" name="reserve_attend" />
                    <span>I will attend in person</span>
                    </label>
                    <button type="submit" aria-label="Register for free camp" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100">
                    <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Register for Free Camp</span>
                    </button>
                  </form>
                </div>
                <div className="cs_sidebar_widget cs_contact cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Volunteer / Queries?</h3>
                  <p className="mb-0">Contact our camp coordinator: <a href="tel:+14448281507">+1 444 828-1507</a> or email: <a href="mailto:info@hospil.com">camp@hospil.com</a></p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* End Event Details Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default EventDetails;
