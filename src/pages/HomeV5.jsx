import React from 'react';
import { Link } from 'react-router-dom';

const HomeV5 = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Hero Section */}
      <section className="cs_hero_style_5 cs_bg_filed cs_hobble position-relative" data-src="/assets/img/hero_bg_5.webp" aria-label="Hero">
        <div className="cs_hero_pattern">
          <img  src="/assets/img/vector_shape_4.svg" alt="Vector shape" />
        </div>
        <div className="container">
          <div className="cs_hero_in">
            <div className="cs_hero_image cs_hobble_particle">
              <img  src="/assets/img/hero_img_5.webp" alt="Patient holding optometry trial frames" className="cs_hero_image_main" />
            </div>
            <div className="cs_hero_left">
              <h1 className="cs_hero_title cs_fs_75 cs_bold cs_primary_color mb-0">
                See Clearly, Live Fully –<span>Expert Eye Care</span> at Hospil
              </h1>
              <div className="cs_hero_bottom_info">
                <div className="cs_hero_bottom_img cs_radius_10">
                  <video src="/assets/img/eye_video.mp4" className="w-100 h-100 d-block" autoplay></video>
                </div>
                <div className="cs_hero_intro_text">
                  <p className="cs_hero_desc cs_primary_color cs_fs_14 mb-0">Comprehensive eye exams, advanced LASIK, cataract surgery, and personalized treatments with cutting-edge technology.</p>
                  <Link  to="/services" aria-label="Explore our services" className="cs_btn_style_1 cs_accent_bg cs_semibold cs_radius_5 cs_white_color">
                  <span><i className="fa-solid fa-eye"></i></span>
                  <span>Explore Services</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cs_hero_info">
              <div className="cs_hero_info_card cs_white_bg cs_radius_20 cs_hero_info_card_rating">
                <div className="cs_rating_value cs_fs_40 cs_semibold cs_accent_color cs_mb_4">4.9/5</div>
                <div className="cs_rating cs_mb_16" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <p className="mb-0">Loved by over 5,000+ patients</p>
              </div>
              <div className="cs_hero_info_card cs_white_bg cs_radius_20 cs_hero_info_card_users">
                <ul className="cs_hero_avatars cs_mp_0 cs_mb_12">
                  <li><img  src="/assets/img/avatar_7.webp" alt="Patient" /></li>
                  <li><img  src="/assets/img/avatar_8.webp" alt="Patient" /></li>
                  <li><img  src="/assets/img/avatar_9.webp" alt="Patient" /></li>
                  <li className="cs_hero_avatars_count cs_accent_bg cs_white_color cs_fs_12 cs_semibold">1M+</li>
                </ul>
                <p className="mb-0">Patient already <br  />using our services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start About Section */}
      <section className="cs_about_style_5" aria-label="About Hospil Eye Care">
        <div className="container">
          <div className="cs_about_top">
            <div className="cs_section_heading_style_2 cs_mb_24">
              <div className="cs_section_heading_left">
                <p className="cs_section_subtitle cs_accent_color cs_fs_14 p-0 mb-0">// SINCE 2012 & EXCELLENCE IN VISION</p>
              </div>
              <div className="cs_section_heading_right">
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_primary_color mb-0">More Than an Eye Clinic Your Partner in Clarity</h2>
              </div>
            </div>
            <p className="cs_about_desc mb-0">At Hospil Eye Care, we believe exceptional vision transforms lives. What started as a small clinic driven by a mission to blend medical precision with human warmth has grown into a center of excellence &mdash; combining world-class technology, leading ophthalmologists, and compassionate, patient-first philosophy.</p>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-lg-4 col-sm-12 order-lg-3">
              <div className="cs_about_image cs_radius_20">
                <img  src="/assets/img/about_img_5.webp" alt="Eye doctor demonstrating vision chart" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="cs_about_card cs_gray_bg cs_radius_20">
                <div className="cs_card_icon cs_mb_30">
                  <img  src="/assets/img/icons/mission.svg" alt="Mission icon" />
                </div>
                <h3 className="cs_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_20">Our Mission</h3>
                <p className="cs_card_desc mb-0">To restore, enhance and protect sight through advanced, personalized eye care making world-class treatment accessible to every patient.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="cs_about_card cs_gray4_bg cs_radius_20 position-relative">
                <div className="cs_accredited_badge cs_accent_bg cs_white_color cs_radius_50">
                  <div className="cs_circular_text">
                    <img  src="/assets/img/circular_text.svg" alt="Circulat Text" />
                  </div>
                  <a href="tel:0123456789" className="cs_call_btn cs_center cs_white_bg cs_radius_50">
                  <img  src="/assets/img/icons/phone3.svg" alt="Phone icon" />
                  </a>
                </div>
                <div className="cs_card_icon cs_mb_30 ms-sm-auto">
                  <img  src="/assets/img/icons/eye.svg" alt="Mission icon" />
                </div>
                <h3 className="cs_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_20">Our Vision</h3>
                <p className="cs_card_desc mb-0">A world where vision loss is preventable and curable; leading innovation in refractive, cataract, and retinal therapies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Start Partners Section */}
      <div>
        <div className="container">
          <ul className="cs_partners_list_1 cs_mp_0">
            <li className="cs_partner_item">
              <img  src="/assets/img/partner_logo_1.svg" alt="LoveCare" />
            </li>
            <li className="cs_partner_item">
              <img  src="/assets/img/partner_logo_2.svg" alt="medstar" />
            </li>
            <li className="cs_partner_item">
              <img  src="/assets/img/partner_logo_3.svg" alt="Medical Partner" />
            </li>
            <li className="cs_partner_item">
              <img  src="/assets/img/partner_logo_4.svg" alt="wellness" />
            </li>
            <li className="cs_partner_item">
              <img  src="/assets/img/partner_logo_5.svg" alt="Vets&Co" />
            </li>
          </ul>
        </div>
      </div>
      {/* End Partners Section */}
      {/* Start Services Section */}
      <section className="cs_services_section_5 slider-section position-relative" aria-label="Our eye care services">
        <div className="cs_vector_shape" aria-hidden="true">
          <img  src="/assets/img/vector_shape_5.svg" alt="Vector shape" />
        </div>
        <div className="container position-relative z-1">
          <div className="cs_section_heading_style_1 cs_type_3 cs_center_column mx-auto text-center cs_mb_48">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// OUR EYE CARE SERVICES</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Precision, and Compassion Comprehensive Treatments Tailored to Every Age and Vision Need</h2>
          </div>
          <div className="swiper cs_mb_24" data-slides-per-view="responsive" data-autoplay="0" data-loop="1" data-speed="600" data-mobile-slides="1" data-tablet-slides="1" data-desktop-slides="2" data-large-desktop-slides="3" data-extra-large-slides="3" data-add-slides="3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="cs_service_card_4 cs_gray2_bg cs_radius_20">
                  <div className="cs_card_body">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_24"><Link  to="/service-details">Comprehensive Exam</Link></h3>
                    <p className="cs_card_desc cs_mb_24">Full vision analysis, glaucoma screening, retinal imaging, and prescription updates for clarity.</p>
                    <ul className="cs_card_tags cs_mp_0 cs_mb_24">
                      <li>Refraction</li>
                      <li>OCT Scan</li>
                      <li>Eye Pressure</li>
                    </ul>
                  </div>
                  <Link  to="/service-details" aria-label="Open Comprehensive Exam" className="cs_card_img cs_radius_15">
                  <img  src="/assets/img/service_img_13.webp" alt="Comprehensive eye exam" />
                  <span className="cs_card_btn cs_white_bg cs_center cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </span>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="cs_service_card_4 cs_gray2_bg cs_radius_20 cs_service_card_4_featured">
                  <div className="cs_card_body">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_24"><Link  to="/service-details">Cataract Surgery</Link></h3>
                    <p className="cs_card_desc cs_mb_24">Advanced phacoemulsification with premium IOLs for brilliant distance & near vision.</p>
                    <ul className="cs_card_tags cs_mp_0 cs_mb_24">
                      <li>No-stitch</li>
                      <li>Blue light filter</li>
                      <li>Quick recovery</li>
                    </ul>
                  </div>
                  <Link  to="/service-details" aria-label="Open Cataract Surgery" className="cs_card_img cs_radius_15">
                  <img  src="/assets/img/service_img_14.webp" alt="Cataract surgery" />
                  <span className="cs_card_btn cs_white_bg cs_center cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </span>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="cs_service_card_4 cs_gray2_bg cs_radius_20">
                  <div className="cs_card_body">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_24"><Link  to="/service-details">Pediatric Eye Care</Link></h3>
                    <p className="cs_card_desc cs_mb_24">Squint correction, lazy eye childhood myopia management with special soft lenses & atropine.</p>
                    <ul className="cs_card_tags cs_mp_0 cs_mb_24">
                      <li>Myopia control</li>
                      <li>Vision therapy</li>
                    </ul>
                  </div>
                  <Link  to="/service-details" aria-label="Open Pediatric Eye Care" className="cs_card_img cs_radius_15">
                  <img  src="/assets/img/service_img_15.webp" alt="Pediatric eye care" />
                  <span className="cs_card_btn cs_white_bg cs_center cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </span>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="cs_service_card_4 cs_gray2_bg cs_radius_20">
                  <div className="cs_card_body">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_24"><Link  to="/service-details">Emergency & Trauma</Link></h3>
                    <p className="cs_card_desc cs_mb_24">Level 1 trauma centre, rapid response, 24/7 ambulance & critical care experts ready.</p>
                    <ul className="cs_card_tags cs_mp_0 cs_mb_24">
                      <li>Bladeless</li>
                      <li>SMILE</li>
                      <li>Same-day</li>
                    </ul>
                  </div>
                  <Link  to="/service-details" aria-label="Emergency & Trauma" className="cs_card_img cs_radius_15">
                  <img  src="/assets/img/service_img_16.webp" alt="LASIK refractive procedure" />
                  <span className="cs_card_btn cs_white_bg cs_center cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_controller_3 cs_mb_30 mt-0">
            <button type="button" aria-label="Previous service" className="slider-prev cs_center cs_radius_50">
            <img  src="/assets/img/icons/arrow2-right.svg" alt="Arrow" />
            </button>
            <button type="button" aria-label="Next service" className="slider-next cs_center cs_radius_50">
            <img  src="/assets/img/icons/arrow2-right.svg" alt="Arrow" />
            </button>
          </div>
          <p className="cs_service_note text-center mb-0">Click to get <Link  to="/services" className="cs_accent_color">All Our Services</Link> at once places.</p>
        </div>
      </section>
      {/* End Services Section */}
      {/* Start Why Choose Section */}
      <section className="cs_whychoose_section_3 cs_gray2_bg" data-src="/assets/img/vector_shape_6.svg" aria-label="Why choose Hospil">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-end">
            <div className="col-lg-8">
              <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// WHY CHOOSE HOSPIL</p>
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_primary_color mb-0">Where vision meets excellence</h2>
              </div>
              <div className="row cs_gap_y_24">
                <div className="col-sm-6">
                  <div className="cs_whychoose_card cs_white_bg cs_radius_20">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_20">Elite Ophthalmologists</h3>
                    <p className="cs_card_desc mb-0">15+ years average experience, fellowship-trained in cornea, retina, and refractive surgery. Your eyes are in expert hands.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cs_whychoose_card cs_white_bg cs_radius_20">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_20">AI-Powered Diagnostics</h3>
                    <p className="cs_card_desc mb-0">ZEISS OCT, Fundus AI, and wavefront aberrometry for sub-micron precision. Detect diseases years earlier.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cs_whychoose_card cs_white_bg cs_radius_20">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_20">Same-day & Virtual Care</h3>
                    <p className="cs_card_desc mb-0">Emergency slots reserved daily. Telemedicine follow-ups for post-op and routine care & from anywhere.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cs_whychoose_card cs_white_bg cs_radius_20">
                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_20">Compassionate Approach</h3>
                    <p className="cs_card_desc mb-0">Every treatment plan is personalized. We listen, explain, and support you before, during, and after procedures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_whychoose_img cs_radius_20 position-relative">
                <img  src="/assets/img/whychoose_img_2.webp" alt="Patient receiving precision eye care" />
                <div className="cs_whychoose_stat cs_center_column cs_radius_20 text-center">
                  <div className="cs_stat_value cs_fs_60 cs_bold cs_accent_color">
                    <span className="odometer" data-count-to="98.6"></span>%
                  </div>
                  <p className="cs_stat_label mb-0">Patient satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="cs_whychoose_badges cs_mp_0">
            <li className="cs_whychoose_badge cs_color_1">ISO 13485 certified clinic</li>
            <li className="cs_whychoose_badge cs_color_2">20,000+ successful surgeries</li>
            <li className="cs_whychoose_badge cs_color_3">0% wait time emergency care</li>
            <li className="cs_whychoose_badge cs_color_4">4.98/5 Google rating</li>
          </ul>
        </div>
      </section>
      {/* End Why Choose Section */}
      {/* Start Ticker Section */}
      <div className="cs_ticker_3 cs_accent_bg">
        <div className="container-fluid overflow-hidden">
          <div className="cs_ticker_in">
            <div className="cs_ticker_content cs_ticker_items_list">
              <div className="cs_fs_75 cs_bold cs_white_color cs_primary_font">
                Every Sniffle Monitored. Every Smile Celebrated.
              </div>
              <div className="cs_fs_75 cs_bold cs_white_color cs_primary_font">
                Every Sniffle Monitored. Every Smile Celebrated.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Ticker Section*/}
      {/* Start Team Section */}
      <section className="cs_team_section_2 pb-0 position-relative">
        <div className="cs_vector_shape position-absolute top-0 end-0">
          <img  src="/assets/img/vector_shape_7.svg" alt="Vector shape" />
        </div>
        <div className="container position-relative z-1">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center mx-auto">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Meet Our Specialists</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">World-Class Eye Surgeons Delivering Compassionate Care With Cutting-Edge Precision.</h2>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_5.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Gregory Bynum</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Senior Cardiologist</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_6.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Lori Fletcher</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Neurology & Stroke</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_7.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Aline Briscoe</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Pediatrics & Neonatology</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_8.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Philip Johnson</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Orthopedics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/* Start Equipment Slider Section */}
      <section className="cs_equipment_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_3 cs_center_column mx-auto text-center cs_mb_48">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// ADVANCED TECHNOLOGY AT HOSPIL</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Cutting-Edge Diagnostic & Surgical <br  />Equipment Setting New Standards in Eye Care.</h2>
          </div>
          <div className="cs_equipment_slider slider-section position-relative">
            <div className="swiper" data-slides-per-view="1" data-autoplay="0" data-loop="1" data-speed="600" data-effect="fade">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="cs_equipment_card_1 cs_radius_20">
                    <div className="cs_equipment_img">
                      <img  src="/assets/img/service_img_17.webp" alt="Spectral OCT equipment" />
                    </div>
                    <div className="cs_equipment_info cs_white_bg cs_radius_20">
                      <div className="cs_equipment_info_head cs_mb_24">
                        <span className="cs_equipment_icon cs_accent_bg cs_center cs_radius_50">
                        <img  src="/assets/img/icons/spectral.svg" alt="Equipment icon" />
                        </span>
                        <h3 className="cs_equipment_title cs_fs_24 cs_semibold mb-0">Spectral OCT</h3>
                      </div>
                      <p className="cs_equipment_desc mb-0">Ultra-high resolution retinal & optic nerve analysis. Early detection of glaucoma changes.</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_equipment_card_1 cs_radius_20">
                    <div className="cs_equipment_img">
                      <img  src="/assets/img/service_img_18.webp" alt="Phacoemulsification system" />
                    </div>
                    <div className="cs_equipment_info cs_white_bg cs_radius_20">
                      <div className="cs_equipment_info_head cs_mb_24">
                        <span className="cs_equipment_icon cs_accent_bg cs_center cs_radius_50">
                        <img  src="/assets/img/icons/eye2.svg" alt="Equipment icon" />
                        </span>
                        <h3 className="cs_equipment_title cs_fs_24 cs_semibold mb-0">Femtosecond Laser</h3>
                      </div>
                      <p className="cs_equipment_desc mb-0">Bladeless LASIK & cataract fragmentation. Unmatched precision, faster visual recovery.</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_equipment_card_1 cs_radius_20">
                    <div className="cs_equipment_img">
                      <img  src="/assets/img/service_img_19.webp" alt="Femtosecond laser" />
                    </div>
                    <div className="cs_equipment_info cs_white_bg cs_radius_20">
                      <div className="cs_equipment_info_head cs_mb_24">
                        <span className="cs_equipment_icon cs_accent_bg cs_center cs_radius_50">
                        <img  src="/assets/img/icons/eye3.svg" alt="Equipment icon" />
                        </span>
                        <h3 className="cs_equipment_title cs_fs_24 cs_semibold mb-0">Zeiss Fundus Camera</h3>
                      </div>
                      <p className="cs_equipment_desc mb-0">Widefield retinal imaging & fluorescein angiography — detect peripheral pathology.</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_equipment_card_1 cs_radius_20">
                    <div className="cs_equipment_img">
                      <img  src="/assets/img/service_img_20.webp" alt="Fundus AI camera" />
                    </div>
                    <div className="cs_equipment_info cs_white_bg cs_radius_20">
                      <div className="cs_equipment_info_head cs_mb_24">
                        <span className="cs_equipment_icon cs_accent_bg cs_center cs_radius_50">
                        <img  src="/assets/img/icons/eye4.svg" alt="Equipment icon" />
                        </span>
                        <h3 className="cs_equipment_title cs_fs_24 cs_semibold mb-0">Pentacam® HR</h3>
                      </div>
                      <p className="cs_equipment_desc mb-0">3D anterior segment analysis for refractive surgery planning & keratoconus screening.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_controller_3">
              <button type="button" aria-label="Previous equipment" className="slider-prev cs_center cs_radius_50">
              <img  src="/assets/img/icons/arrow2-right.svg" alt="Arrow" />
              </button>
              <button type="button" aria-label="Next equipment" className="slider-next cs_center cs_radius_50">
              <img  src="/assets/img/icons/arrow2-right.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End Equipment Slider Section */}
      {/* Start Appointment Section */}
      <section className="cs_appointment_section_4 cs_gray3_bg cs_bg_filed position-relative" data-src="/assets/img/vector_shape_8.svg">
        <div className="container-fluid position-relative">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_appointment_img">
                <img  src="/assets/img/appointment_img_4.webp" alt="Appointment image" />
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
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="name">Full Name</label>
                      <input  type="text" name="name" id="name" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="phone">Phone Number</label>
                      <input  type="text" name="phone" id="phone" className="cs_form_field" placeholder="Enter your phone" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="email">Email Address</label>
                      <input  type="email" name="email" id="email" className="cs_form_field" placeholder="Enter your email address" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
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
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
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
                    <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                      <label htmlFor="date">Date</label>
                      <input  type="text" name="date" id="date" className="cs_form_field cs_datepicker" data-format="Y-m-d" placeholder="Select date" />
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" className="cs_date_icon position-absolute" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                      <label htmlFor="time">Preferred Time</label>
                      <input  type="text" name="time" id="time" className="cs_form_field cs_timepicker" data-format="h:i K" placeholder="Select time" />
                      <span className="cs_time_icon position-absolute"></span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
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
      {/* Start Contact Info Section */}
      <section className="cs_contact_section_1" aria-label="Hospil opening hours and contact">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-end">
            <div className="col-xl-6 col-lg-4">
              <div className="cs_about_hours cs_gray2_bg cs_radius_20 cs_mb_24">
                <h3 className="cs_about_hours_title cs_fs_24 cs_medium cs_primary_color cs_mb_14">Opening Hours</h3>
                <ul className="cs_about_hours_list cs_mp_0">
                  <li>
                    <span className="cs_about_hours_day">Mon-Fri:</span>
                    <span className="cs_about_hours_time">9:00AM - 7:00PM</span>
                  </li>
                  <li>
                    <span className="cs_about_hours_day">Sat:</span>
                    <span className="cs_about_hours_time">9:00AM - 4:00PM</span>
                  </li>
                  <li>
                    <span className="cs_about_hours_day">Sun:</span>
                    <span className="cs_about_hours_time">Closed (emergency on-call)</span>
                  </li>
                </ul>
                <div className="cs_emergency_note">
                  <img  src="/assets/img/icons/alerm.svg" alt="Emergency icon" className="cs_emergency_icon" width="40" height="40"  />
                  <p className="cs_fs_14 mb-0"><a href="tel:911" aria-label="Call emergency" className="cs_accent_color cs_semibold">Emergency?</a> For sudden vision loss or eye injury, call emergency</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="row cs_gap_y_24">
                <div className="col-md-6">
                  <div className="cs_contact_item d-flex align-items-center">
                    <span className="cs_contact_icon cs_center cs_accent_bg cs_radius_50">
                    <img  src="/assets/img/icons/phone.svg" alt="Phone icon" width="20" height="20" />
                    </span>
                    <a href="tel:+14448281507" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_primary_color">+1 444 828 1507</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_contact_item d-flex align-items-center">
                    <span className="cs_contact_icon cs_center cs_accent_bg cs_radius_50">
                    <img  src="/assets/img/icons/emain.svg" alt="Email icon" width="20" height="20" />
                    </span>
                    <a href="mailto:info@hospil.com" aria-label="Send mail" className="cs_fs_20 cs_bold cs_primary_color">example@hospil.com</a>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="cs_contact_item d-flex align-items-start">
                    <span className="cs_contact_icon cs_center cs_accent_bg cs_radius_50">
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" width="20" height="20" />
                    </span>
                    <div>
                      <span className="cs_fs_20 cs_bold cs_primary_color d-block">Visit Us</span>
                      <p className="mb-0 cs_fs_14">58 Blue Spruce Lane Baltimore, MD 2321</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Info Section */}
      {/* Start Testimonial Slider Section */}
      <section className="cs_testimonial_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 mx-auto text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Real patient experiences</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Trusted by Thousands of Smiling Eyes</h2>
          </div>
        </div>
        <div className="swiper" data-marquee="1" data-variable-width="1" data-slides-per-view="responsive" data-autoplay="0" data-loop="1" data-speed="10000" data-gap="24" data-mobile-slides="1" data-tablet-slides="2" data-desktop-slides="3" data-large-desktop-slides="4" data-extra-large-slides="5" data-add-slides="5" data-show-pagination="0">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_10.webp" alt="Susan Drake" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Susan Drake</h3>
                    <p className="cs_author_designation mb-0">Annual checkup</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“The SMILE laser procedure took just 10 minutes per eye, and next morning I woke up with HD vision. No dry eye, amazing technology at Hospil.”</blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_4.webp" alt="Tyrone Royal" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Tyrone Royal</h3>
                    <p className="cs_author_designation mb-0">Software engineer</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“Life-changing LASIK! I was nervous but the Hospil team made me feel at ease. 20/20 vision the very next morning. No more glasses after 15 years!”</blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_3.webp" alt="Geraldine Jones" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Geraldine Jones</h3>
                    <p className="cs_author_designation mb-0">Austin, TX</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“Cataract surgery at Hospil was smoother than I expected. The premium lens gave me perfect distance and reading vision. Dr. Mehta is a genius.”</blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_4.webp" alt="Alejandro Morrow" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Alejandro Morrow</h3>
                    <p className="cs_author_designation mb-0">Retired pilot</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“At 68, I can see colors vividly again. My cataract surgery was smooth, and the premium lens gave me distance and reading vision. Thank you, Dr. Sharma.”</blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_5.webp" alt="Mia Chen" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Mia Chen</h3>
                    <p className="cs_author_designation mb-0">Parent</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“My son's vision dramatically improved with the therapy at Hospil. The caring environment really made all the difference for our family.”</blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img">
                    <img  src="/assets/img/avatar_6.webp" alt="Robert Lane" />
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">Robert Lane</h3>
                    <p className="cs_author_designation mb-0">Teacher</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <blockquote>“Friendly staff, modern equipment, and a flawless LASIK experience. I recommend Hospil to anyone tired of glasses and contact lenses.”</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Slider Section */}
      {/* Start Work Section */}
      <section className="cs_work_section_1 position-relative pt-0" aria-label="How Hospil Works">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_3 cs_center_column cs_mb_48 cs_mb_lg_40 mx-auto text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// PRECISION IN EVERY STEP</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Experience World-Class Refractive <br  />& Cataract Procedures Crafted With Care</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center position-relative z-1">
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/service_img_13.webp" alt="Pre-op assessment" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">01</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Pre-op Assessment</h3>
                  <p className="cs_work_desc mb-0">Biometry, IOL power calculation & customized lens selection</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_2.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/service_img_14.webp" alt="Anesthesia and incision" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">02</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Anesthesia & Incision</h3>
                  <p className="cs_work_desc mb-0">Numbing drops, micro-incision (2.2mm) &mdash; no stitches, pain-free.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_2.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/service_img_18.webp" alt="Phacoemulsification procedure" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">03</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Phacoemulsification</h3>
                  <p className="cs_work_desc mb-0">Ultrasound breaks cloudy lens, gently removed & new IOL inserted.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_2.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/service_img_16.webp" alt="Vision renewal" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">04</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Vision Renewal</h3>
                  <p className="cs_work_desc mb-0">Clear vision within days, follow-ups ensure optimal IOL positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_vector_shape position-absolute bottom-0">
          <img  src="/assets/img/vector_shape_9.svg" alt="Vector shape" />
        </div>
      </section>
      {/* End Work Section */}
      {/* Start FAQ Section */}
      <section className="cs_faq_section_2 cs_gray2_bg cs_bg_filed" data-src="/assets/img/vector_shape_10.svg" aria-label="Frequently asked questions">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Experience World-Class Refractive <br  />&amp; Cataract Procedures Crafted With Care</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-6">
              <div className="cs_accordians_style_3">
                <div className="cs_accordian active">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. How often should I get a comprehensive eye exam?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Adults under 40 without risk factors: every 2 years. Adults over 40 or with diabetes, hypertension: annually. For children, we recommend yearly exams to track myopia progression. Early detection saves sight.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Is LASIK painful? What is the recovery like?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> LASIK is virtually painless — numbing drops keep you comfortable, and the procedure takes about 10 minutes per eye. Most patients see clearly the next morning and resume normal activities within 24-48 hours.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Does insurance cover cataract surgery or LASIK?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Most insurance plans cover medically necessary cataract surgery with standard IOLs. LASIK is typically elective and not covered, but we offer flexible financing and 0% EMI plans to make it affordable.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. At what age can children visit Hospil?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> We recommend the first pediatric eye screening at 6 months, again at age 3, and before starting school. Our pediatric specialists use child-friendly equipment to make every visit comfortable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_accordians_style_3">
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Do you offer emergency or same-day appointments?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Yes — for sudden vision loss, eye injury, or red-eye emergencies, walk in any time. Our 24/7 on-call ophthalmologist is reachable by phone, and same-day appointments are available for urgent concerns.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. What technology does Hospil use for diagnostics?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> We use Spectral OCT, Femtosecond Laser, Zeiss Fundus Camera, and Pentacam&reg; HR — the gold standard in modern ophthalmology — for early detection, surgical precision, and personalized treatment planning.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Do you accept children with chronic conditions?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Yes — pediatric glaucoma, congenital cataracts, amblyopia, and other long-term conditions are welcome. Our pediatric ophthalmologist builds a personalized care plan with your child's specialist.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. What are your operating hours &amp; emergency coverage?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Mon-Fri 9am-7pm, Sat 9am-4pm. Sunday is closed with 24/7 on-call emergency support. A critical-care ambulance is on standby and an ophthalmologist is reachable by phone around the clock.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_faq_cta_1">
            <div className="cs_faq_cta_iten cs_white_bg">
              <img  src="/assets/img/icons/emain.svg" alt="Chat icon" />
              <span>still have questions? <span className="cs_accent_color"><a href="mailto:info@hospil.com" className="cs_accent_color">Chat with our expert</a></span></span>
            </div>
            <div className="cs_faq_cta_iten cs_color_1" >
              <img  src="/assets/img/icons/phone.svg" alt="Phone icon" />
              <span><a href="tel:+14448281507">+1 444 828 1507</a></span>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
      {/* Start Blog Section */}
      <section className="cs_blog_section_1" aria-label="Eye health resources blog">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// EYE HEALTH RESOURCES</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Insights, Tips, and Expert Advice to Keep Your Vision <br  />Crystal Clear From Leading Ophthalmologists</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-xl-6 col-lg-5">
              <article className="cs_post_style_4 cs_radius_20">
                <Link  to="/blog-details" className="cs_post_img" aria-label="Read post">
                <img  src="/assets/img/post_img_12.webp" alt="Myopia in children" />
                </Link>
                <span className="cs_post_overlay"></span>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_white_color cs_mb_24">
                    <span className="cs_post_author">
                    <span className="cs_author_icon cs_center cs_gray3_bg cs_radius_50">
                    <img  src="/assets/img/favico.svg" alt="Author icon" />
                    </span>
                    <span className="cs_post_author_name">By Admin</span>
                    </span>
                    <span className="cs_post_meta">
                    <img  src="/assets/img/icons/calendar.svg" alt="Date icon" />
                    <span>April 10, 2026</span>
                    </span>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_white_color cs_semibold mb-0">
                    <Link  to="/blog-details">Myopia in children: why outdoor time is the best prevention</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="cs_post_list">
                <article className="cs_post_style_5">
                  <Link  to="/blog-details" className="cs_post_img cs_radius_20" aria-label="Read post">
                  <img  src="/assets/img/post_img_13.webp" alt="Eye exam" />
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <span className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_gray3_bg cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_post_author_name">By Admin</span>
                      </span>
                      <span className="cs_post_meta">
                      <img  src="/assets/img/icons/calendar.svg" alt="Date icon" />
                      <span>April 09, 2026</span>
                      </span>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details">5 signs you need an eye exam (beyond blurry vision)</Link>
                    </h3>
                  </div>
                </article>
                <article className="cs_post_style_5">
                  <Link  to="/blog-details" className="cs_post_img cs_radius_20" aria-label="Read post">
                  <img  src="/assets/img/post_img_14.webp" alt="Screen time and eyes" />
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <span className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_gray3_bg cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_post_author_name">By Admin</span>
                      </span>
                      <span className="cs_post_meta">
                      <img  src="/assets/img/icons/calendar.svg" alt="Date icon" />
                      <span>April 08, 2026</span>
                      </span>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details">How screen time affects your eyes (and 5 fixes that work)</Link>
                    </h3>
                  </div>
                </article>
                <article className="cs_post_style_5">
                  <Link  to="/blog-details" className="cs_post_img cs_radius_20" aria-label="Read post">
                  <img  src="/assets/img/post_img_15.webp" alt="Foods for eyesight" />
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <span className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_gray3_bg cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_post_author_name">By Admin</span>
                      </span>
                      <span className="cs_post_meta">
                      <img  src="/assets/img/icons/calendar.svg" alt="Date icon" />
                      <span>April 07, 2026</span>
                      </span>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details">Top 7 foods that naturally improve your eyesight</Link>
                    </h3>
                  </div>
                </article>
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

export default HomeV5;
