import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const AboutUs = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <PageHeader title="About Us" breadcrumb={[{ label: 'About Us' }]} />
      {/* End Page Header */}
      {/* Start About Section */}
      <section className="cs_about_style_2 pb-0">
        <div className="container">
          <div className="cs_section_heading_style_2 cs_mb_48 cs_mb_lg_40">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 mb-0">// Caring for You, Every Step of the Way</p>
            </div>
            <div className="cs_section_heading_right">
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">First Choice Medical Services — High-End Home Healthcare Provider in Qatar.</h2>
            </div>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-6">
              <div className="cs_about_img cs_radius_20 cs_parallax position-relative">
                <img src="/assets/img/about_img_2.webp" alt="First Choice Medical Nurses" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="cs_about_content">
                <div className="cs_about_text cs_mb_48 cs_mb_lg_30">
                  <p className="cs_about_desc cs_mb_22">
                    First Choice Medical Services provides high-end home care services to private clientele, companies, and clinics across Qatar. Our caretakers are experienced and professional. We have a large, equipped workforce providing in-home care, residential aged care, and disability care. We provide experienced and qualified disability support workers.
                  </p>
                  <p className="cs_about_desc cs_mb_22">
                    All staff are directly employed by us — not by sub-contractors or independent contractors. We have a strict recruitment and pre-employment training process; only applicants demonstrating significant experience and competence are taken on board.
                  </p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Directly employed staff (No sub-contractors)</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Strict recruitment & pre-employment training</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Experienced & qualified disability support</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Individualized patient attention</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_about_testimonial_wrap">
                  <div className="cs_testimonial cs_gray2_bg cs_radius_20 position-relative">
                    <blockquote>“We believe every patient deserves individual attention and quality care. Our goal is to provide dependable nursing support while giving patients and their families confidence and peace of mind.”</blockquote>
                    <p className="cs_fs_20 cs_semibold cs_primary_color mb-0">— First Choice Medical Services, <small>Doha, Qatar</small></p>
                    <img src="/assets/img/icons/quote.svg" alt="Quote icon" className="cs_quote_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Start Mission & Vision Section */}
       <section className="cs_feature_section_5 py-5">
        <div className="container">
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_1 cs_radius_20 h-100 p-4">                
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon">
                    <img src="/assets/img/icons/mission.svg" alt="Mission icon" />
                  </div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Our Mission</h3>
                </div>
                <p className="cs_card_desc mb-0">
                  To provide high-quality nursing services with compassion, professionalism, and respect, helping our patients achieve better health, comfort, and quality of life.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_2 cs_radius_20 h-100 p-4">                
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon">
                    <img src="/assets/img/icons/eye.svg" alt="Vision icon" />
                  </div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Our Vision</h3>
                </div>
                <p className="cs_card_desc mb-0">
                  To become a trusted and leading provider of nursing and home healthcare services, recognized for excellence, reliability, and patient-centered care.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_3 cs_radius_20 h-100 p-4">                
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon">
                    <img src="/assets/img/icons/heart-bit.svg" alt="Core Values icon" />
                  </div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Core Values</h3>
                </div>
                <p className="cs_card_desc mb-0 fw-bold">
                  Compassion | Professionalism | Patient Safety | Integrity | Respect | Reliability
                </p>
              </div>
            </div>           
          </div>
        </div>
       </section>
      {/* End Mission & Vision Section */}
       {/* Start Ticker Section */}
      <div className="cs_ticker_1 p-0">
        <div className="container-fluid overflow-hidden">
          <div className="cs_ticker_in">
            <div className="cs_ticker_content cs_ticker_text">
              <div className="cs_ticker_item cs_shadow_none cs_fs_75 cs_bold">
                Every Sniffle Monitored. Every Smile Celebrated.
              </div>
              <div className="cs_ticker_item cs_shadow_none cs_fs_75 cs_bold">
                Every Sniffle Monitored. Every Smile Celebrated.
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* End Ticker Section*/}
      {/* Start Technology Section */}
      <section className="cs_technology_section_2 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-end">
            <div className="col-xl-6">
              <div className="cs_technology_content">
                <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Why choose Hospil</p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold cs_mb_6">Where Care & Technology Unite</h2>
                  <p className="cs_section_desc mb-0">We don’t just treat illnesses — we restore lives with empathy, precision, and integrity.</p>
                </div>
                <div className="cs_feature_grid_1">
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Elite Specialists</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Over 200+ internationally trained doctors, 24/7 availability across 40+ specialties.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/robotic-surgery.svg" alt="Surgery icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Robotic Surgery</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">State-of-the-art Da Vinci Xi, 3T MRI, AI diagnostics for unmatched precision.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/hospital.svg" alt="Hospital icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Holistic Approach</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Patient-centric rooms, multilingual staff, nutritional therapy & rehab support.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                        <img  src="/assets/img/icons/price-tag.svg" alt="Price tag icon" />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Transparent Pricing</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Cashless insurance, affordable packages & EMI options — no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="col-xl-6">
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
          </div>
        </div>
      </section>
      {/* End Technology Section */}
       {/* Start Work Section */}
      <section className="cs_work_section_1 position-relative pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// How Hospil Works</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Three Seamless Steps to Get You <br  /> The Care You Deserve From Booking to Recovery</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center position-relative z-1">
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/work_img_1.webp" alt="Work process image" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">01</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Book or Walk-in</h3>
                  <p className="cs_work_desc mb-0">Schedule an appointment online in 30 seconds, or simply walk into any Hospil center. Choose consultation, lab tests, or pharmacy pickup.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/work_img_2.webp" alt="Work process image" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">02</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Consult & Diagnose</h3>
                  <p className="cs_work_desc mb-0">Meet top doctors (in-clinic or video consult) or give lab samples at home. Our team guides you with personalized care plans.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50">
                  <img  src="/assets/img/work_img_3.webp" alt="Work process image" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">03</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Get Well Soon</h3>
                  <p className="cs_work_desc mb-0">Receive treatment, medicines delivered free, digital reports, and post-care follow-up. Wellness plans for long-term health.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_work_bg_shape position-absolute">
          <img  src="/assets/img/vector_shape_1.svg" alt="Vector bg" />
        </div>
      </section>
      {/* End Work Section */}
      {/* Start Feature Section */}
      <section className="cs_feature_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Our Core Values</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/heart2.svg" alt="Compassion icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Compassion</h2>
              </div>
              <p className="cs_feature_desc mb-0">For the weary and worried, may better tools bring quieter nights.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/line-chart.svg" alt="Excellence icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Excellence</h2>
              </div>
              <p className="cs_feature_desc mb-0">Clinical precision and continuous improvement.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
               <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/shield-cross-line.svg" alt="Safety icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Safety</h2>
              </div>
              <p className="cs_feature_desc mb-0">Gold-standard protocols for patient security.</p>
            </div>
            </div>
            <div className="col-xl-3 col-md-6">
            <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
              <div className="cs_feature_card_header cs_mb_15">
                <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                  <img  src="/assets/img/icons/team-line.svg" alt="Teamwork icon" />
                </div>
                <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Teamwork</h2>
              </div>
              <p className="cs_feature_desc mb-0">Collaborative, multi-disciplinary approach.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}

      {/* Start Testimonial Slider Section */}
      <section className="cs_testimonial_section_5 pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 mx-auto text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Real patient experiences</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Trusted by Thousands of Smiling Eyes</h2>
          </div>
        </div>
        <div className="swiper" data-marquee="1" data-variable-width="1" data-slides-per-view="responsive" data-autoplay="0" data-loop="1" data-speed="9000" data-gap="24" data-mobile-slides="1" data-tablet-slides="2" data-desktop-slides="3" data-large-desktop-slides="4" data-extra-large-slides="5" data-add-slides="5" data-show-pagination="0">
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
      {/* Start Appointment & Map Section */}
      <section className="cs_appointment_section_custom py-5">
        <div className="container">
          {/* Appointment Booking Form (Above) */}
          <div className="cs_appointment_container_wrap mb-5">
            <div className="cs_section_heading_style_1 cs_mb_32">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Easy Online Scheduling</p>
              <h2 className="cs_fs_40 cs_semibold mb-0">Book an Appointment</h2>
              <p className="text-secondary mt-2">Fill out the details below — our healthcare team will confirm within 2 hours.</p>
            </div>
            <div className="row cs_gap_y_30 align-items-stretch">
              <div className="col-lg-8">
                <div className="cs_appointment_form_wrapper cs_gray3_bg cs_radius_20 p-4 p-md-5 h-100">
                  <form action="#" className="cs_appointment_form_2 cs_type_1 row cs_gap_y_24">
                    <div className="col-12">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-name" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Full Name</label>
                        <input type="text" name="name" id="appt-name" className="cs_form_field border-0 w-100" placeholder="Enter your full name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-phone" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Phone Number</label>
                        <input type="text" name="phone" id="appt-phone" className="cs_form_field border-0 w-100" placeholder="Enter your phone" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-email" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Email Address</label>
                        <input type="email" name="email" id="appt-email" className="cs_form_field border-0 w-100" placeholder="Enter your email" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-department" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Service Type</label>
                        <select className="cs_form_field border-0 w-100 bg-transparent" name="department" id="appt-department" defaultValue="">
                          <option value="" disabled>Select service</option>
                          <option value="nursing">Home Nursing Care</option>
                          <option value="elderly">Elderly & Aged Care</option>
                          <option value="postnatal">Postnatal Confinement Care</option>
                          <option value="physio">Physiotherapy Services</option>
                          <option value="disability">Disability Support Care</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-date" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Preferred Date</label>
                        <input type="date" name="date" id="appt-date" className="cs_form_field border-0 w-100" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_white_bg cs_radius_5 p-2">
                        <label htmlFor="appt-message" className="cs_fs_14 cs_semibold text-secondary d-block mb-1">Additional Notes (Optional)</label>
                        <textarea name="message" rows="3" id="appt-message" className="cs_form_field border-0 w-100" placeholder="Describe patient needs or specific requests..."></textarea>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <button type="submit" aria-label="Confirm appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 border-0 px-4 py-3">
                        <span>Confirm Appointment</span>
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_appointment_promise cs_radius_20 overflow-hidden position-relative h-100 cs_accent_bg p-4 text-white d-flex flex-column justify-content-between">
                  <div>
                    <span className="cs_fs_14 text-uppercase tracking-wider opacity-75 d-block mb-2">// Direct Care Promise</span>
                    <h3 className="cs_fs_24 cs_semibold text-white mb-3">Your Family's Comfort, Our Gentle Guarantee.</h3>
                    <p className="opacity-90 cs_fs_15 mb-4">
                      All First Choice caretakers and support staff are 100% directly employed and background-checked for absolute safety and compassion.
                    </p>
                  </div>
                  <div className="cs_promise_img_wrap cs_radius_15 overflow-hidden mt-3">
                    <img src="/assets/img/appointment_img_3.webp" alt="First Choice Healthcare Team" className="w-100 object-fit-cover" style={{ maxHeight: '220px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Div (Below Appointment Form) */}
          <div className="cs_map_container_wrap mt-5 pt-3">
            <div className="cs_section_heading_style_1 cs_mb_24">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_8">// Visit Our Headquarters</p>
              <h3 className="cs_fs_28 cs_semibold mb-0">Our Doha Location</h3>
            </div>
            <div className="cs_appointment_map cs_radius_20 position-relative overflow-hidden border shadow-sm">
              <div className="bg-white p-3 border-bottom d-flex align-items-center gap-3">
                <img src="/assets/img/icons/location-pin.svg" alt="Location Pin" style={{ width: '28px', height: '28px' }} />
                <div>
                  <strong className="d-block text-dark cs_fs_16">First Choice Medical Services HQ</strong>
                  <span className="text-muted cs_fs_14">P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar</span>
                </div>
              </div>
              <iframe 
                src="https://maps.google.com/maps?q=P.O.Box+15496,+Bldg+No.+76,+Office+No.+04,+C-Ring+Road,+Umm+Ghuwailina,+Doha,+Qatar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                allowFullScreen 
                title="First Choice Medical Services Qatar Location Map" 
                style={{ width: '100%', height: '420px', border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment & Map Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default AboutUs;
