import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Our Events</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Events</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Upcoming Events Section */}
      <section className="cs_event_section_1" aria-label="Upcoming events">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48 cs_mb_lg_40 mx-auto">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Upcoming Event</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Join our Health Camps, Medical Workshops, <br  />Awareness Drives, and Community Celebrations.</h2>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_1.webp" alt="Community Health Camp 2026" />
                <span className="cs_event_card_badge cs_color_1">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">9:00 AM – 4:00 PM</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Community Health Camp 2026</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Saturday, Jun 27, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Hospil Main Campus, Outdoor Arena</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Community Health Camp 2026" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_2.webp" alt="Cardiac Life Support Training" />
                <span className="cs_event_card_badge cs_color_2">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">10:00 AM – 5:00 PM (Both days)</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Cardiac Life Support Training</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Friday, Jul 10, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Conference Hall, 3rd Floor</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Cardiac Life Support Training" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_3.webp" alt="Help Us Serve You Better" />
                <span className="cs_event_card_badge cs_color_3">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">2:00 PM – 6:00 PM</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Help Us Serve You Better</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Friday, Jul 17, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Auditorium & Online (Hybrid)</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Help Us Serve You Better" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_4.webp" alt="Hospil Annual Awards & Gala" />
                <span className="cs_event_card_badge cs_color_1">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">3:00 PM – 6:00 PM</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Hospil Annual Awards & Gala</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Saturday, Jul 25, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Grand Ballroom</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Hospil Annual Awards and Gala" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_5.webp" alt="Breast Cancer Screening Drive" />
                <span className="cs_event_card_badge cs_color_2">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">12:00 PM – 3:00 PM</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Breast Cancer Screening Drive</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Sunday, Aug 16, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Women’s Health Centre</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Breast Cancer Screening Drive" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_event_card_1">
                <Link  to="/event-details" className="cs_event_card_thumb cs_radius_20">
                <img  src="/assets/img/event_img_6.webp" alt="Mother & Baby Wellness Fair" />
                <span className="cs_event_card_badge cs_color_3">
                <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                <span className="cs_fs_16 cs_primary_color">2:00 PM – 6:00 PM</span>
                </span>
                </Link>
                <div className="cs_event_card_body cs_radius_20">
                  <h3 className="cs_event_card_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_16"><Link  to="/event-details">Mother & Baby Wellness Fair</Link></h3>
                  <ul className="cs_event_card_meta cs_mp_0 cs_mb_34 cs_mb_lg_24">
                    <li>
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Friday, Jun 28, 2026</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                      <span>Maternity Wing, Hospil</span>
                    </li>
                  </ul>
                  <Link  to="/event-details" aria-label="Register for Mother and Baby Wellness Fair" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color">
                  <span>Register Now</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_event_cta_1 cs_radius_20">
            <p className="cs_event_cta_text cs_fs_16 cs_primary_color mb-0">Monthly Free Diabetes & Hypertension Screening | <span>Every 1st Tuesday</span></p>
            <Link  to="/contact-us" aria-label="Contact us now" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
            <span>Contact Now</span>
            <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
            </Link>
          </div>
        </div>
      </section>
      {/* End Upcoming Events Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Event;
