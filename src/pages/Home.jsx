import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Hero Section */}
      <section>
        <div className="swiper" data-variable-width="0" data-slides-per-view="1" data-autoplay="0" data-loop="1" data-speed="600" data-effect="slide" data-pagination-type="fraction" data-gap="0">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_bg_filed" data-src="/assets/img/hero_bg_1.webp">
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">// TRUSTED HEALTHCARE SINCE 2015</div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">Your Health, Our Priority at Hospil.</h1>
                      <p className="cs_hero_desc cs_fs_18">Advanced medical care with compassion. 24/7 Emergency • Expert Doctors •Modern Facilities</p>
                      <div className="cs_hero_btns">
                        <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        <span><i className="fa-solid fa-calendar-check"></i></span>
                        <span>Book an Appointment</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">Visiting Hours:</span> Sunday- Friday: 08:00 AM - 10:00 PM
                        </div>
                      </div>
                    </div>
                    <form action="#" className="cs_ib_card">
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">Instant Booking</span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="department1" className="cs_field_label cs_fs_12 mb-0">Specialty</label>
                        <input  className="cs_field_value" id="department1" placeholder="Cardiology" required />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="dateTime1" className="cs_field_label cs_fs_12 mb-0">Available Date</label>
                        <input  className="cs_field_value" id="dateTime1" placeholder="Tomorrow, 09:30 AM" required />
                      </div>
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                      <span>Check Availability</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_bg_filed" data-src="/assets/img/hero_bg_2.webp">
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">// TRUSTED HEALTHCARE SINCE 2015</div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">Quality Healthcare Made Simple</h1>
                      <p className="cs_hero_desc cs_fs_18">Book appointments, consult doctors, and get care—all in one place.</p>
                      <div className="cs_hero_btns">
                        <Link  to="/doctors" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                        <span>Find a Doctor</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">Visiting Hours:</span> Sunday- Friday: 08:00 AM - 10:00 PM
                        </div>
                      </div>
                    </div>
                    <form action="#" className="cs_ib_card">
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">Instant Booking</span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="department2" className="cs_field_label cs_fs_12 mb-0">Specialty</label>
                        <input  className="cs_field_value" id="department2" placeholder="Cardiology" required />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="dateTime2" className="cs_field_label cs_fs_12 mb-0">Available Date</label>
                        <input  className="cs_field_value" id="dateTime2" placeholder="Tomorrow, 09:30 AM" required />
                      </div>
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                      <span>Check Availability</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_bg_filed" data-src="/assets/img/hero_bg_3.webp">
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">// TRUSTED HEALTHCARE SINCE 2015</div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">Expert Care You Can Trust</h1>
                      <p className="cs_hero_desc cs_fs_18">Dedicated specialists delivering compassionate and reliable treatment.</p>
                      <div className="cs_hero_btns">
                        <Link  to="/doctors" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                        <span>Find a Doctor</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">Visiting Hours:</span> Sunday- Friday: 08:00 AM - 10:00 PM
                        </div>
                      </div>
                    </div>
                    <form action="#" className="cs_ib_card">
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">Instant Booking</span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="department3" className="cs_field_label cs_fs_12 mb-0">Specialty</label>
                        <input  className="cs_field_value" id="department3" placeholder="Cardiology" required />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label htmlFor="dateTime3" className="cs_field_label cs_fs_12 mb-0">Available Date</label>
                        <input  className="cs_field_value" id="dateTime3" placeholder="Tomorrow, 09:30 AM" required />
                      </div>
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                      <span>Check Availability</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_controller_1">
            <div className="slider-prev"><i className="fa-solid fa-arrow-left"></i></div>
            <div className="swiper-pagination cs_hero_slider_counter"></div>
            <div className="slider-next"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start Feature Section */}
      <section className="cs_feature_section_1 pb-0">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/calendar.svg" alt="Doctor icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Book Visit</h2>
              </div>
              <p className="cs_feature_desc mb-0">Schedule your visit with our expert doctors in just a few clicks.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/user.svg" alt="Find Doctor icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Find a Doctor</h2>
              </div>
              <p className="cs_feature_desc mb-0">Find trusted doctors and choose the right specialist for your care.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/first-aid-kit.svg" alt="Toolbox icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">ER Services</h2>
              </div>
              <p className="cs_feature_desc mb-0">Get immediate, life-saving care with our 24/7 emergency services.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/video.svg" alt="Video icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Virtual Care</h2>
              </div>
              <p className="cs_feature_desc mb-0">Consult doctors anytime, anywhere with secure virtual care.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <section className="cs_about_style_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_about_img cs_parallax cs_radius_20  position-relative">
                  <img  src="/assets/img/about_img_1.webp" alt="Compassionate Doctor" />
                <div className="cs_about_rating cs_accent_bg cs_radius_20">
                  <p className="cs_rating_text cs_white_color">5k+ reviews based on client feedback.</p>
                  <div className="cs_rating_value cs_fs_60 cs_bold cs_white_color">4.9/5</div>
                  <div className="cs_rating" data-rating="5">
                    <div className="cs_rating_percentage"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading_style_1">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14">// About US</p>
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Where Compassion Meets Innovation</h2>
                </div>
                <blockquote> ”Hospil isn't just a hospital — it's a healing ecosystem.”</blockquote>
                <div className="cs_about_text">
                  <p className="cs_about_desc">Founded with a vision to revolutionize healthcare, Hospil General Hospital combines advanced medical technology with human warmth. Our multidisciplinary team of 200+ specialists, state-of-the-art infrastructure, and patient-first philosophy have made us a trusted name across the region. We believe in transparent, affordable, and accessible care for every individual.</p>
                  <div className="cs_btns_wrapper">
                  <Link  to="/about-us" aria-label="Go to about us page" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                  <span>More About Us</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                  <div className="cs_trusted_by">
                    <div className="cs_avatar_wrapper">
                      <div className="cs_avatar cs_center cs_radius_50">
                        <img  src="/assets/img/avatar_1.webp" alt="Avatar" />
                      </div>
                      <div className="cs_avatar cs_center cs_radius_50">
                        <img  src="/assets/img/avatar_2.webp" alt="Avatar" />
                      </div>
                      <div className="cs_avatar cs_center cs_radius_50">
                        <img  src="/assets/img/avatar_3.webp" alt="Avatar" />
                      </div>
                    </div>
                    <p className="cs_trusted_text cs_fs_14 mb-0">Trusted by 10k+ Patients</p>
                  </div>
                  </div>
                  <div className="cs_funfact_style_1">
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                        <span className="odometer" data-count-to="98"></span>%
                      </div>
                      <div className="cs_funfact_title">Patient Satisfaction</div>
                    </div>
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                        <span className="odometer" data-count-to="12"></span>+
                      </div>
                      <div className="cs_funfact_title">Awards & Accreditations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Start Ticker Section */}
      <div className="cs_ticker_1 cs_accent_bg">
        <div className="container-fluid overflow-hidden">
          <div className="cs_ticker_in">
            <div className="cs_ticker_content cs_ticker_items_list">
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Cardiology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Neurology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Orthopedics</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Maternity</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Oncology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Pulmonology</span>
              </div>
            </div>
            <div className="cs_ticker_content cs_ticker_items_list">
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Cardiology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Neurology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Orthopedics</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Maternity</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Oncology</span>
              </div>
              <div className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                <img  src="/assets/img/icons/star.svg" alt="Star" />
                <span>Pulmonology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Ticker Section*/}
      {/* Start Services Section */}
      <section className="cs_service_section_1 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_columb cs_mb_50 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// SERVICES</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">We Care for Patients Across Various <br  /> Departments and Services.</h2>
          </div>
          <div className="cs_sticky_section">
            <div className="cs_service_card_1 cs_radius_20 cs_sticky_card">
              <div className="cs_service_content cs_white_bg cs_radius_15">
                <div className="cs_service_header">
                  <div className="cs_service_icon cs_center cs_radius_10">
                    <img  src="/assets/img/icons/cardiology.svg" alt="Cardiology" />
                  </div>
                  <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/service-details" aria-label="Go to service details page">Cardiology</Link>
                  </h3>
                </div>
                <p className="cs_service_desc">Advanced cardiac diagnostics, interventional procedures, and preventive heart wellness.</p>
                <ul className="cs_service_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>24/7 Cardiac Cath Lab</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>ECG, Echo & TMT</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Top interventional cardiologists</span>
                  </li>
                </ul>
              </div>
              <div className="cs_service_img cs_bg_filed cs_radius_20" data-src="/assets/img/service_img_1.webp">
                <Link  to="/service-details" aria-label="Go to service details page" className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Right arrow" />
                </Link>
              </div>
            </div>
            <div className="cs_service_card_1 cs_radius_20 cs_sticky_card">
              <div className="cs_service_content cs_white_bg cs_radius_15">
                <div className="cs_service_header">
                  <div className="cs_service_icon cs_center cs_radius_10">
                    <img  src="/assets/img/icons/neurology.svg" alt="Neurology" />
                  </div>
                  <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/service-details" aria-label="Go to service details page">Neurology</Link>
                  </h3>
                </div>
                <p className="cs_service_desc">Comprehensive brain, spine & nerve care — stroke management, epilepsy surgery & rehab.</p>
                <ul className="cs_service_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Advanced Neuro-Imaging</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Stroke Recovery Unit</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Robotic Neuro-Rehab</span>
                  </li>
                </ul>
              </div>
              <div className="cs_service_img cs_bg_filed cs_radius_20" data-src="/assets/img/service_img_2.webp">
                <Link  to="/service-details" aria-label="Go to service details page" className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Right arrow" />
                </Link>
              </div>
            </div>
            <div className="cs_service_card_1 cs_radius_20 cs_sticky_card">
              <div className="cs_service_content cs_white_bg cs_radius_15">
                <div className="cs_service_header">
                  <div className="cs_service_icon cs_center cs_radius_10">
                    <img  src="/assets/img/icons/orthopedics.svg" alt="Orthopedics" />
                  </div>
                  <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/service-details" aria-label="Go to service details page">Orthopedics</Link>
                  </h3>
                </div>
                <p className="cs_service_desc">Joint replacement, sports medicine, trauma surgery & minimally invasive procedures.</p>
                <ul className="cs_service_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Knee & Hip Replacement</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Sports Injury Clinic</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Digital 3D Navigation</span>
                  </li>
                </ul>
              </div>
              <div className="cs_service_img cs_bg_filed cs_radius_20" data-src="/assets/img/service_img_3.webp">
                <Link  to="/service-details" aria-label="Go to service details page" className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Right arrow" />
                </Link>
              </div>
            </div>
            <div className="cs_service_card_1 cs_radius_20 cs_sticky_card">
              <div className="cs_service_content cs_white_bg cs_radius_15">
                <div className="cs_service_header">
                  <div className="cs_service_icon cs_center cs_radius_10">
                    <img  src="/assets/img/icons/oncology.svg" alt="Oncology" />
                  </div>
                  <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/service-details" aria-label="Go to service details page">Oncology</Link>
                  </h3>
                </div>
                <p className="cs_service_desc">Precision oncology, chemotherapy, immunotherapy and compassionate palliative support.</p>
                <ul className="cs_service_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Molecular Profiling</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Day-care Chemo Suite</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Psycho-oncology support</span>
                  </li>
                </ul>
              </div>
              <div className="cs_service_img cs_bg_filed cs_radius_20" data-src="/assets/img/service_img_4.webp">
                <Link  to="/service-details" aria-label="Go to service details page" className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Right arrow" />
                </Link>
              </div>
            </div>
            <div className="cs_service_card_1 cs_radius_20 cs_sticky_card">
              <div className="cs_service_content cs_white_bg cs_radius_15">
                <div className="cs_service_header">
                  <div className="cs_service_icon cs_center cs_radius_10">
                    <img  src="/assets/img/icons/maternity.svg" alt="Maternity" />
                  </div>
                  <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/service-details" aria-label="Go to service details page">Maternity</Link>
                  </h3>
                </div>
                <p className="cs_service_desc">Holistic pregnancy care, high-risk obstetrics, state-of-the-art delivery suites & NICU.</p>
                <ul className="cs_service_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>24/7 Labor Epidural</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Antenatal Classes</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Luxury Mother & Baby Suites</span>
                  </li>
                </ul>
              </div>
              <div className="cs_service_img cs_bg_filed cs_radius_20" data-src="/assets/img/service_img_5.webp">
                <Link  to="/service-details" aria-label="Go to service details page" className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Right arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* Start Technology Section */}
      <section className="cs_technology_section_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_technology_img cs_parallax cs_radius_20 position-relative">
                <img  src="/assets/img/whychoose_img_1.webp" alt="Technology and Care" />
                <div className="cs_technology_text">
                  <div className="cs_accredited_badge cs_accent_bg cs_white_color cs_radius_50">
                    <div className="cs_circular_text">
                      <img  src="/assets/img/circular_text.svg" alt="Circulat Text" />
                    </div>
                    <a href="tel:0123456789" className="cs_call_btn cs_center cs_white_bg cs_radius_50">
                    <img  src="/assets/img/icons/phone3.svg" alt="Phone icon" />
                    </a>
                  </div>
                  <ul className="cs_feature_list cs_white_color cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>NABH Accredited Hospital of the Year</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Digital Health Records Seamless care</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Zero waiting Priority appointments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_technology_content">
                <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Why choose Hospil</p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold cs_mb_6">Where Care & Technology Unite</h2>
                  <p className="cs_section_desc mb-0">We don’t just treat illnesses — we restore lives with empathy, precision, and integrity.</p>
                </div>
                <div className="cs_feature_grid_1">
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Elite Specialists</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Over 200+ internationally trained doctors, 24/7 availability across 40+ specialties.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/robotic-surgery.svg" alt="Surgery icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Robotic Surgery</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">State-of-the-art Da Vinci Xi, 3T MRI, AI diagnostics for unmatched precision.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/hospital.svg" alt="Hospital icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Holistic Approach</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Patient-centric rooms, multilingual staff, nutritional therapy & rehab support.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/price-tag.svg" alt="Price tag icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Transparent Pricing</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Cashless insurance, affordable packages & EMI options — no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Technology Section */}
      {/* Start Team Section */}
      <section className="cs_team_section_1 cs_gray2_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">//  Meet Our Specialists</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Experienced, Empathetic, and <br  /> Dedicated to Your Recovery</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_Style_1">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                  <img  src="/assets/img/team_img_1.webp" alt="Doctor image" />
                  <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">Cardiology</span>
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
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Gregory Bynum <span>(MD, FRCP)</span></Link>
                  </h3>
                  <p className="cs_team_subtitle  mb-0">Senior Interventional Cardiologist</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_Style_1">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                  <img  src="/assets/img/team_img_2.webp" alt="Doctor image" />
                  <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">Neurology</span>
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
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Lori Fletcher <span>(MBBS, MS)</span></Link>
                  </h3>
                  <p className="cs_team_subtitle  mb-0">Chief Neurosurgeon Specialist</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_Style_1">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                  <img  src="/assets/img/team_img_3.webp" alt="Doctor image" />
                  <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">Orthopedics</span>
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
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Philip Johnson <span>(DNB Ortho)</span></Link>
                  </h3>
                  <p className="cs_team_subtitle  mb-0">Joint Replacement & Medicine</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_Style_1">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                  <img  src="/assets/img/team_img_4.webp" alt="Doctor image" />
                  <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">Oncology</span>
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
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Aline Briscoe  <span>(MD Oncology)</span></Link>
                  </h3>
                  <p className="cs_team_subtitle  mb-0">Hematologist & Medical Oncologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/* Start Appointment Section */}
      <section className="cs_appointment_section_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_appointment_content">
                <div className="cs_section_heading_style_1 cs_mb_12">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Instant Confirmation</p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Secure Your Healing Journey in Seconds</h2>
                </div>
                <ul className="cs_appountment_features cs_mb_24 list-unstyled p-0">
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Clock icon" />
                    <span>Same-day appointments available</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/video.svg" alt="Video icon" />
                    <span>Video consult or in-clinic visit</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/article-line.svg" alt="Document icon" />
                    <span>Insurance & cashless options</span>
                  </li>
                </ul>
                <div className="cs_content_bottom">
                  <div className="cs_appointment_img cs_parallax cs_radius_20 cs_mb_14">
                    <img  src="/assets/img/appointment_img_1.webp" alt="Hospital hallway" data-speed="0.8" />
                  </div>
                  <div className="cs_funfact_style_1">
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color cs_primary_font">
                        <span className="odometer" data-count-to="15"></span>K+
                      </div>
                      <div className="cs_funfact_title">Happy Patients</div>
                    </div>
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color cs_primary_font">
                        <span className="odometer" data-count-to="24"></span>/<span className="odometer" data-count-to="7"></span>
                      </div>
                      <div className="cs_funfact_title">Emergency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_appointment_form_wrapper">
                <div className="cs_appointment_heading cs_mb_24">
                  <h3 className="cs_fs_40 cs_semibold cs_mb_6">Book an Appointment</h3>
                  <p className="mb-0">Fill the details below — we'll confirm within 2hrs.</p>
                </div>
                <form action="#" className="cs_appointment_form_1 row cs_gap_y_24">
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="name">Full Name</label>
                      <input  type="text" name="name" id="name" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="phone">Phone Number</label>
                      <input  type="text" name="phone" id="phone" className="cs_form_field" placeholder="Enter your phone" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="email">Email Address</label>
                      <input  type="email" name="email" id="email" className="cs_form_field" placeholder="Enter your email address" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="department">Service</label>
                      <select className="cs_form_field cs_choice" name="department" id="department">
                        <option selected disabled>Select department</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Oncology</option>
                        <option>Maternity</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="doctor">Preferred Doctor</label>
                      <select className="cs_form_field cs_choice" name="doctor" id="doctor">
                        <option selected disabled>Select Doctor</option>
                        <option>Dr. Gregory Bynum</option>
                        <option>Dr. Lori Fletcher</option>
                        <option>Dr. Philip Johnson</option>
                        <option>Dr. Aline Briscoe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="date">Date</label>
                      <input  type="text" name="date" id="date" className="cs_form_field cs_datepicker" data-format="Y-m-d" placeholder="Select date" />
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" className="cs_date_icon position-absolute" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="time">Preferred Time</label>
                      <input  type="text" name="time" id="time" className="cs_form_field cs_timepicker" data-format="h:i K" placeholder="Select time" />
                      <span className="cs_time_icon position-absolute"></span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="message">Additional Notes (optional)</label>
                      <textarea name="message" rows="3" id="message" className="cs_form_field" placeholder="Describe your symptom here..."></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Confirm Appointment</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment Section */}
      {/* Start Testimonial Section */}
      <section className="cs_testimonial_section_1 cs_gray4_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_testimonial_img position-relative">
                <img  src="/assets/img/testimonial_img_1.webp" alt="Doctor and Patient" />
                <div className="cs_ticker_container">
                  <div className="cs_ticker_1">
                    <div className="cs_ticker_in">
                      <div className="cs_ticker_content cs_ticker_items_list">
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img  src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img  src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                      </div>
                      <div className="cs_ticker_content cs_ticker_items_list">
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img  src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img  src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_testimonial_content">
                <div className="cs_section_heading_style_1 cs_mb_12">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Real stories· Real care</p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">What Our Patients & Their Families Say About The Hospil Experience</h2>
                </div>
                <div className="swiper" data-variable-width="0" data-slides-per-view="1" data-autoplay="0" data-loop="1" data-speed="600" data-effect="slide" data-gap="0">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="cs_testimonial_style_1">
                        <div className="cs_testimonial_header cs_mb_24">
                          <span className="cs_quote_icon">
                          <img  src="/assets/img/quote.svg" alt="Quote image" />
                          </span>
                          <div className="cs_rating" data-rating="5">
                            <div className="cs_rating_percentage"></div>
                          </div>
                        </div>
                        <blockquote>“The cardiology team at Hospil didn't just treat my condition — they gave me back my confidence. From the first emergency call to post-surgery rehab, every moment was handled with genuine warmth and world-class expertise. I'm grateful beyond words.”</blockquote>
                        <div className="cs_testimonial_author">
                          <div className="cs_author_img">
                            <img  src="/assets/img/avatar_4.webp" alt="Sarah Jones" className="cs_radius_50" />
                          </div>
                          <div className="cs_author_info">
                            <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_12">Arnulfo Seibert</h3>
                            <p className="cs_author_designation mb-0">Cardiac Recoveree</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cs_testimonial_style_1">
                        <div className="cs_testimonial_header cs_mb_24">
                          <span className="cs_quote_icon">
                          <img  src="/assets/img/quote.svg" alt="Quote image" />
                          </span>
                          <div className="cs_rating" data-rating="5">
                            <div className="cs_rating_percentage"></div>
                          </div>
                        </div>
                        <blockquote>“The cardiology team at Hospil didn't just treat my condition — they gave me back my confidence. From the first emergency call to post-surgery rehab, every moment was handled with genuine warmth and world-class expertise. I'm grateful beyond words.”</blockquote>
                        <div className="cs_testimonial_author">
                          <div className="cs_author_img">
                            <img  src="/assets/img/avatar_5.webp" alt="Sarah Jones" className="cs_radius_50" />
                          </div>
                          <div className="cs_author_info">
                            <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_12">Tyrone Royal</h3>
                            <p className="cs_author_designation mb-0">Cardiac Recoveree</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cs_controller_2">
                    <div className="slider-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="slider-next">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}
      {/* Start Blog Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Latest news & Blogs</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Patient Stories — Crafted by <br  /> Hospil's Clinical Experts.</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-4">
              <div className="cs_post_style_1">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_22 overflow-hidden">
                <img  src="/assets/img/post_img_1.webp" alt="Post image" />
                <span className="cs_post_category cs_fs_14">Cardiology</span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_20">
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span className="cs_posted_date">April 05, 2026</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">7 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_48 cs_mb_lg_24">
                    <Link  to="/blog-details" aria-label="Read the post details">Early Warning Signs of Stroke: B.E. F.A.S.T Guide</Link>
                  </h3>
                  <div className="cs_post_author_read">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title">By Admin</span>
                    </div>
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Read Sull Story</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_post_style_1">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_22 overflow-hidden">
                <img  src="/assets/img/post_img_2.webp" alt="Post image" />
                <span className="cs_post_category cs_fs_14">Mental Wellness</span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_20">
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span className="cs_posted_date">April 04, 2026</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">5 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_48 cs_mb_lg_24">
                    <Link  to="/blog-details" aria-label="Read the post details">Mind-Body Connection: How Stress Affects Physical Health</Link>
                  </h3>
                  <div className="cs_post_author_read">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title">By Admin</span>
                    </div>
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Read Sull Story</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_post_style_1">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_22 overflow-hidden">
                <img  src="/assets/img/post_img_3.webp" alt="Post image" />
                <span className="cs_post_category cs_fs_14">Orthopedics</span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_20">
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span className="cs_posted_date">April 02, 2026</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">7 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_48 cs_mb_lg_24">
                    <Link  to="/blog-details" aria-label="Read the post details">Robotic Knee Replacement: Faster Recovery & Less Pain</Link>
                  </h3>
                  <div className="cs_post_author_read">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title">By Admin</span>
                    </div>
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Read Sull Story</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Home;
