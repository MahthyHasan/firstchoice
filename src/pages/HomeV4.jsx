import React from 'react';
import { Link } from 'react-router-dom';

const HomeV4 = () => {
  return (
    <>
      
    
    
    {/* Start Side Header */}
    <div className="cs_side_header">
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in position-relative" data-lenis-prevent>
        <button className="cs_close"></button>
        <Link  to="/" className="cs_site_branding d-block cs_mb_48">
        <img  src="/assets/img/logo.svg" alt="logo" />
        </Link>
        <div className="cs_side_header_box">
          <p className="cs_side_header_desc mb-0">Multi-specialty tertiary care hospital with cutting-edge technology, compassionate staff, and 24/7 emergency services.</p>
        </div>
        <div className="cs_side_header_box">
          <div className="cs_gallery">
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_1.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_2.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_3.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_4.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_5.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_6.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_7.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_8.webp" alt="Gallery image" />
           </div>
           <div className="cs_gallery_img cs_radius_10">
            <img  src="/assets/img/gallery_img_9.webp" alt="Gallery image" />
           </div>
          </div>
        </div>
        <div className="cs_side_header_box">
          <h3 className="cs_side_header_title cs_fs_24 cs_medium cs_mb_24">Get in Touch</h3>
          <ul className="cs_contact_list cs_mp_0">
            <li>
              <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
              <div>58 Blue Spruce Lane Baltimore, MD 2321</div>
            </li>
            <li>
              <img  src="/assets/img/icons/phone.svg" alt="Phone icon" />
              <div>
                <a href="tel:+14448281507">+1 444 828 1507</a>
              </div>
            </li>
            <li>
              <img  src="/assets/img/icons/emain.svg" alt="Email icon" />
              <div>
                <a href="mailto:info@hospil.com">example@hospil.com</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="cs_side_header_box">
          <h3 className="cs_side_header_title cs_fs_24 cs_medium cs_mb_24">Get in Touch</h3>
          <div className="cs_social_icons cs_semibold">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    {/* End Side Header */}
    {/* Start Main Content */}
    <main>
      {/* Start Hero Section */}
      <section className="cs_hero_style_4 cs_gray2_bg" aria-label="Hero">
        <div className="container">
          <div className="cs_hero_in">
            <div className="cs_hero_image cs_radius_20">
              <img  src="/assets/img/hero_img_3.webp" alt="Advanced dental care at Hospil" />
            </div>
            <div className="cs_hero_heading">
              <h1 className="cs_hero_title cs_fs_64 cs_semibold cs_primary_color mb-0">
                Advanced Dental Care at Hospil &ndash; Where Your Smile Finds Home
              </h1>
            </div>
            <div className="cs_hero_meta">
              <p className="cs_hero_desc cs_fs_14 mb-0">
                Pain-free treatments, same-day emergency care, and certified prosthodontists.
              </p>
              <div className="cs_hero_users cs_white_bg">
                <ul className="cs_hero_avatars cs_mp_0">
                  <li><img  src="/assets/img/avatar_7.webp" alt="Patient" /></li>
                  <li><img  src="/assets/img/avatar_8.webp" alt="Patient" /></li>
                  <li><img  src="/assets/img/avatar_9.webp" alt="Patient" /></li>
                  <li className="cs_hero_avatars_count cs_accent_bg cs_white_color">1M+</li>
                </ul>
                <span className="cs_hero_users_label cs_fs_14">Patient already using<br  />our services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start Feature Section */}
      <section className="cs_feature_section_4 position-relative">
        <div className="cs_feature_bg cs_parallax position-absolute">
          <img  src="/assets/img/feature_bg_1.webp" alt="Feature bg image" />
        </div>
        <div className="cs_hero_overlay"></div>
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_hero_feature_card cs_radius_20">
                <div className="cs_hero_feature_top cs_mb_16">
                  <h2 className="cs_hero_feature_title cs_fs_20 cs_semibold cs_white_color mb-0">Digital <br  /> Dentistry</h2>
                  <img  src="/assets/img/icons/digital-dentistry.svg" alt="Digital Dentistry icon" className="cs_feature_icon" />
                </div>
                <p className="cs_feature_desc cs_white_color mb-0">Transforming smiles through innovation and digital precision.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_hero_feature_card cs_radius_20">
                <div className="cs_hero_feature_top cs_mb_16">
                  <h2 className="cs_hero_feature_title cs_fs_20 cs_semibold cs_white_color mb-0">Pediatric <br  /> Friendly</h2>
                  <img  src="/assets/img/icons/pediatric-friendly.svg" alt="Pediatric Friendly icon" className="cs_feature_icon" />
                </div>
                <p className="cs_feature_desc cs_white_color mb-0">Child-friendly facilities with love, play, and expert pediatric care.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_hero_feature_card cs_radius_20">
                <div className="cs_hero_feature_top cs_mb_16">
                  <h2 className="cs_hero_feature_title cs_fs_20 cs_semibold cs_white_color mb-0">Sterilization <br  /> Protocol</h2>
                  <img  src="/assets/img/icons/protocols2.svg" alt="Sterilization Protocol icon" className="cs_feature_icon" />
                </div>
                <p className="cs_feature_desc cs_white_color mb-0">World-class sterilization following international safety guidelines.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_hero_feature_card cs_radius_20">
                <div className="cs_hero_feature_top cs_mb_16">
                  <h2 className="cs_hero_feature_title cs_fs_20 cs_semibold cs_white_color mb-0">Transparent <br  /> Pricing</h2>
                  <img  src="/assets/img/icons/transparent-pricing.svg" alt="Transparent Pricing icon" className="cs_feature_icon" />
                </div>
                <p className="cs_feature_desc cs_white_color mb-0">Clear and transparent pricing with no hidden costs at Hospil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <section className="cs_about_style_4" aria-label="About Hospil">
        <div className="container">
          <div className="row cs_gap_y_30 cs_mb_48 cs_mb_lg_30">
            <div className="col-xl-6 col-lg-7">
              <div className="cs_about_heading">
                <div className="cs_section_style_1 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// ABOUT US</p>
                  <h2 className="cs_about_title cs_section_title cs_fs_40 cs_semibold mb-0">More Than a Dental Clinic Your Smile's True Home</h2>
                </div>
                <div className="cs_height_58 cs_height_lg_30"></div>
                <ul className="cs_about_features cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/laser-dentistry.svg" alt="Digital & laser dentistry icon" />
                    <span>Digital &amp; laser dentistry</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/emergency-call2.svg" alt="Same-day emergency icon" />
                    <span>Same-day emergency</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/kid-friendly.svg" alt="Kid-friendly environment icon" />
                    <span>Kid-friendly environment</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/protocols.svg" alt="100% sterilized protocols icon" />
                    <span>100% sterilized protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="cs_about_img cs_parallax cs_radius_20">
                <img  src="/assets/img/about_img_5.webp" alt="Hospil dental care team" />
              </div>
            </div>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-6 col-lg-5">
              <div className="cs_about_img cs_parallax cs_radius_20">
                <img  src="/assets/img/about_img_6.webp" alt="Dentist with dental model" />
                <div className="cs_experience_badge cs_white_color cs_radius_20">
                  <div className="cs_experience_number cs_fs_60 cs_bold cs_primary_font"><span className="odometer" data-count-to="15"></span>+</div>
                  <p className="cs_experience_label mb-0">years experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="cs_about_content">
                <p className="cs_about_desc cs_fs_16">At Hospil, we blend cutting-edge technology with heartfelt empathy. Every treatment is designed to be painless, transparent, and personalized &mdash; because we believe a healthy smile changes everything. From digital diagnostics to same-day emergency care, we are redefining dentistry in Bangladesh and beyond.</p>
                <div className="cs_about_actions">
                  <Link  to="/about-us" aria-label="Go to about us page" className="cs_btn_style_2 cs_semibold cs_radius_5">
                  <span>More About Us</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                  <div className="cs_about_quote">
                    <img  src="/assets/img/icons/quote.svg" alt="Quote icon" className="cs_quote_icon" />
                    <div>
                      <p className="cs_about_quote_text cs_fs_20 cs_semibold mb-0">"We treat you like family"</p>
                      <span className="cs_about_quote_author cs_fs_14">&mdash; Dr. Lori King, Chief Prosthodontist</span>
                    </div>
                  </div>
                </div>
                <div className="cs_about_recognition cs_gray2_bg cs_radius_10">
                  <img  src="/assets/img/icons/recognization.svg" alt="Recognization icon" className="cs_recognition_icon" />
                  <div>
                    <h3 className="cs_about_recognition_title cs_fs_20 cs_semibold cs_secondary_font cs_mb_15">Recognized by International Dental Federation</h3>
                    <p className="cs_about_recognition_desc cs_fs_14 mb-0">ISO certified | Advanced CBCT center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Start Services Section */}
      <section className="cs_services_section_4 cs_gray4_bg" aria-label="Comprehensive Dental Services">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-5">
              <div className="cs_service_heading_container">
                <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Comprehensive Dental Services</p>
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Advanced, Painless Care With a Gentle, High-Tech Touch.</h2>
                </div>
                <p className="cs_mb_12">Not sure which service you need?</p>
                <Link  to="/contact-us" aria-label="Go to contact us page" className="cs_btn_style_2 cs_semibold cs_radius_5">
                <span>Get Free Consultation</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_sticky_section cs_type_1">
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_1">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">01</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">General & Preventive</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_1.webp" alt="General and preventive dentistry" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Regular checkups, scaling, fluoride treatments, and oral cancer screening &mdash; the foundation of lifelong health.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Complete oral exam</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Digital X-rays (low radiation)</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Custom night guards</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about General and Preventive" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_2">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">02</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">Cosmetic Dentistry</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_2.webp" alt="Cosmetic dentistry" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Transform your smile with Hollywood-grade veneers, laser whitening, and gum contouring. Instant confidence boost.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Porcelain Veneers</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Teeth Whitening (1 hour)</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Digital Smile Design</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about Cosmetic Dentistry" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_3">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">03</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">Painless Root Canal</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_3.webp" alt="Painless root canal treatment" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Single-visit RCT with micro-endodontics & digital anesthesia. Save your natural tooth without fear.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Microscopic precision</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Same-day crown option</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>No post-op discomfort</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about Painless Root Canal" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_4">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">04</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">Dental Implants</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_4.webp" alt="Dental implants" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Permanent, natural-feeling tooth replacement using advanced CBCT planning &amp; German-grade materials.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>All-on-4 / All-on-6</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Immediate loading option</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>10-year warranty</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about Dental Implants" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_5">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">05</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">Orthodontics</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_5.webp" alt="Orthodontics" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Straighten teeth discreetly with ceramic braces or invisible aligners. Custom treatment plans for all ages.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Metal / Ceramic braces</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Clear aligners (Invisible)</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Early interceptive treatment</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about Orthodontics" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
                <div className="cs_service_card_3 cs_radius_20 cs_sticky_card cs_color_6">
                  <div className="cs_card_heading">
                    <span className="cs_card_index cs_white_bg cs_radius_10 cs_fs_14">06</span>
                    <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/service-details">Pediatric Dentistry</Link>
                    </h3>
                  </div>
                  <Link  to="/service-details" className="cs_card_img cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/dental_service_img_6.webp" alt="Pediatric dentistry" />
                  </Link>
                  <p className="cs_card_desc cs_mb_36 cs_mb_lg_24">Fun, fear-free dental visits for children. Preventive care, sealants, and behavior guidance with parent coaching.</p>
                  <ul className="cs_service_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Cavity prevention programs</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Laughing gas / sedation</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Space maintainers</span>
                    </li>
                  </ul>
                  <Link  to="/service-details" aria-label="Read more about Pediatric Dentistry" className="cs_card_btn cs_accent_bg cs_white_color cs_radius_50">
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* Start Work Section */}
      <section className="cs_work_section_1 position-relative" aria-label="How Hospil Works">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5">// HOW HOSPIL WORKS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Your Journey To a Perfect Smile <br  /> in 4 Simple Steps</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center position-relative z-1">
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_2 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg">
                  <img  src="/assets/img/icons/online-booking.svg" alt="Book Online icon" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">01</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Book Online</h3>
                  <p className="cs_work_desc mb-0">Book your appointment online in just a few clicks at Hospil.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_2 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg">
                  <img  src="/assets/img/icons/arrive-relax.svg" alt="Arrive & Relax icon" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">02</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Arrive &amp; Relax</h3>
                  <p className="cs_work_desc mb-0">Arrive, unwind with a warm welcome, and let us take care of the rest.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_2 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg">
                  <img  src="/assets/img/icons/digital-diagnosis.svg" alt="Digital Diagnosis icon" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">03</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Digital Diagnosis</h3>
                  <p className="cs_work_desc mb-0">Get a painless digital scan and see your 3D smile model instantly.</p>
                </div>
                <span className="cs_work_card_shape position-absolute">
                <img  src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_work_card_2 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg">
                  <img  src="/assets/img/icons/smile-plan.svg" alt="Your Smile Plan icon" />
                </div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_24 cs_mb_lg_16">04</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Your Smile Plan</h3>
                  <p className="cs_work_desc mb-0">Review your personalized smile plan on screen, then treat with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_work_bg_shape position-absolute">
          <img  src="/assets/img/vector_shape_1.svg" alt="Vector bg" />
        </div>
      </section>
      {/* End Work Section */}
      {/* Start Team Section */}
      <section className="cs_team_section_4 cs_tabs" aria-label="Dental Experts">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5">// DENTAL EXPERTS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Meet The Specialists Behind Hospil&rsquo;s <br  /> Award-Winning Smiles</h2>
          </div>
          <div className="cs_experts_layout">
            <div className="row cs_gap_y_30">
              <div className="col-lg-4">
                <div className="cs_tab_content position-relative h-100">
                  <div id="cs_expert_1" className="cs_tab active">
                    <div className="cs_team_thumb cs_radius_20">
                      <img  src="/assets/img/team_img_9.webp" alt="Dr. Gregory Bynum" />
                    </div>
                  </div>
                  <div id="cs_expert_2" className="cs_tab">
                    <div className="cs_team_thumb cs_radius_20">
                      <img  src="/assets/img/team_img_10.webp" alt="Dr. Lori Fletcher" />
                    </div>
                  </div>
                  <div id="cs_expert_3" className="cs_tab">
                    <div className="cs_team_thumb cs_radius_20">
                      <img  src="/assets/img/team_img_11.webp" alt="Dr. Philip Johnson" />
                    </div>
                  </div>
                  <div id="cs_expert_4" className="cs_tab">
                    <div className="cs_team_thumb cs_radius_20">
                      <img  src="/assets/img/team_img_12.webp" alt="Dr. Aline Briscoe" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <ul className="cs_experts_list cs_mp_0">
                  <li className="cs_expert_item active" data-expert-tab="#cs_expert_1">
                    <Link  to="/doctor-details" className="cs_expert_meta">
                      <h3 className="cs_expert_name cs_fs_20 cs_bold cs_mb_6">Dr. Gregory Bynum</h3>
                      <p className="cs_expert_role cs_fs_14 mb-0">MS, Prosthodontics</p>
                    </Link>
                    <p className="cs_expert_bio mb-0">Master craftsman of full-mouth rehabilitation and natural-looking ceramic restorations.</p>
                    <div className="cs_expert_actions">
                      <div className="cs_social_btns_style_1">
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                      <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_fs_14 cs_medium cs_radius_5">
                      <span><i className="fa-regular fa-calendar" aria-hidden="true"></i> Book Appointment</span>
                      </Link>
                    </div>
                  </li>
                  <li className="cs_expert_item" data-expert-tab="#cs_expert_2">
                    <Link  to="/doctor-details" className="cs_expert_meta">
                      <h3 className="cs_expert_name cs_fs_20 cs_bold cs_mb_6">Dr. Lori Fletcher</h3>
                      <p className="cs_expert_role cs_fs_14 mb-0">PGT Endodontics</p>
                    </Link>
                    <p className="cs_expert_bio mb-0">Master in micro-endodontics &amp; single-visit RCT. Uses advanced rotary systems.</p>
                    <div className="cs_expert_actions">
                      <div className="cs_social_btns_style_1">
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                      <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_fs_14 cs_medium cs_radius_5">
                      <span><i className="fa-regular fa-calendar" aria-hidden="true"></i> Book Appointment</span>
                      </Link>
                    </div>
                  </li>
                  <li className="cs_expert_item" data-expert-tab="#cs_expert_3">
                    <Link  to="/doctor-details" className="cs_expert_meta">
                      <h3 className="cs_expert_name cs_fs_20 cs_bold cs_mb_6">Dr. Philip Johnson</h3>
                      <p className="cs_expert_role cs_fs_14 mb-0">BDS, M.Orth</p>
                    </Link>
                    <p className="cs_expert_bio mb-0">Award-winning orthodontist creating confident smiles for teens &amp; adults.</p>
                    <div className="cs_expert_actions">
                      <div className="cs_social_btns_style_1">
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                      <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_fs_14 cs_medium cs_radius_5">
                      <span><i className="fa-regular fa-calendar" aria-hidden="true"></i> Book Appointment</span>
                      </Link>
                    </div>
                  </li>
                  <li className="cs_expert_item" data-expert-tab="#cs_expert_4">
                    <Link  to="/doctor-details" className="cs_expert_meta">
                      <h3 className="cs_expert_name cs_fs_20 cs_bold cs_mb_6">Dr. Aline Briscoe</h3>
                      <p className="cs_expert_role cs_fs_14 mb-0">Pediatric Fellow</p>
                    </Link>
                    <p className="cs_expert_bio mb-0">Distraction therapy, sedation options, and fun dental visits. Special needs &amp; cavity prevention expert.</p>
                    <div className="cs_expert_actions">
                      <div className="cs_social_btns_style_1">
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                      <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_fs_14 cs_medium cs_radius_5">
                      <span><i className="fa-regular fa-calendar" aria-hidden="true"></i> Book Appointment</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_experts_stats">
              <span className="cs_stat_pill cs_color_1"><strong>3000+</strong> successful implant surgeries</span>
              <span className="cs_stat_pill cs_color_2"><strong>6 languages</strong> spoken across team</span>
              <span className="cs_stat_pill cs_color_3"><strong>98%</strong> patient satisfaction score</span>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/* Start Pricing Section */}
      <section className="cs_pricing_section_2 cs_gray7_bg" aria-label="Pricing Plans">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_1 cs_center_column text-center">
            <p className="cs_section_subtitle cs_white_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5">// SIMPLE PRICING PLAN</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Choose a Flexible Plan or Pay Per Visit Always With a Cost Estimate Before Treatment.</h2>
          </div>
          <div className="row cs_gap_y_30 cs_mb_48 cs_mb_lg_40 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_radius_20">
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Silver Essentials</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$39<small>/month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">Billed monthly, cancel anytime</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>2 routine checkups / year</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>1 professional scaling (free)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>10% off fillings & extractions</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Digital X-ray (1 free)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Priority booking</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Choose Silver plan" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Choose Silver</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_color_1 cs_radius_20">
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Gold Family Protector</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$59<small>/month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">Covers up to 4 family members</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Unlimited checkups for whole family</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>2 cleanings per person / year</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>25% off crowns, bridges, RCT</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Free emergency exam (24/7)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>1 free teeth whitening kit</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Get Gold plan" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Get Gold Plan</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_color_2 cs_radius_20">
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Smile Transformation</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$99<small>/month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">Ideal for braces / implants / veneers</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>15% off orthodontics & aligners</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>20% off implants & All-on-4</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>3D CBCT scan included (1 free)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Personal smile coordinator</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>0% EMI on major treatments</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Transform Now" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Transform Now</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cs_other_bundles">
            <div className="cs_bundled_heading cs_mb_24">
              <h2 className="cs_fs_40 cs_semibold mb-0">Popular Bundled Treatments</h2>
            </div>
            <div className="row cs_gap_y_24 justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="cs_featured_pricingbox cs_color_1 cs_radius_20">
                  <h3 className="cs_fs_24 cs_medium cs_mb_12">Popular bundled treatments</h3>
                  <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$9900</div>
                  <p className="mb-0">Consultation + X-ray + scaling + fluoride varnish</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="cs_featured_pricingbox cs_color_2 cs_radius_20">
                  <h3 className="cs_fs_24 cs_medium cs_mb_12">White Smile Combo</h3>
                  <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$149.00</div>
                  <p className="mb-0">2 fillings + polishing + whitening strip kit one-visit solution</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="cs_featured_pricingbox cs_color_3 cs_radius_20">
                  <h3 className="cs_fs_24 cs_medium cs_mb_12">Crown & Bridge Package</h3>
                  <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$249.00</div>
                  <p className="mb-0">Zirconia crown + 3-year warranty includes digital impression</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="cs_featured_pricingbox cs_color_4 cs_radius_20">
                  <h3 className="cs_fs_24 cs_medium cs_mb_12">Ortho Starter</h3>
                  <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12">$49.00</div>
                  <p className="mb-0">Consultation + digital scan + treatment simulation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
      {/* Start Testimonial Section */}
      <section className="cs_testimonial_section_4 cs_gray4_bg slider-section cs_bg_filed" data-src="/assets/img/testimonial_bg_1.webp">
        <div className="container">
          <div className="cs_testimonial_container position-relative">
            <div className="swiper" data-variable-width="0" data-slides-per-view="1" data-autoplay="0" data-loop="1" data-speed="600" data-effect="slide" data-gap="0">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="cs_testimonial_style_4">
                    <blockquote>“I was terrified of implants but Dr. Aline Briscoe made the entire process seamless. All-on-4 in one day I can finally eat and smile with confidence. Worth every penny!”</blockquote>
                    <div className="cs_testimonial_author">
                      <span className="cs_quote_icon">
                      <img  src="/assets/img/quote.svg" alt="Quote icon" />
                      </span>
                      <div className="cs_author_info">
                        <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_6">Arnulfo Seibert</h3>
                        <p className="cs_author_designation mb-0">Full-mouth implants</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_testimonial_style_4">
                    <blockquote>“The cardiology team at Hospil didn't just treat my condition — they gave me back my confidence. From the first emergency call to post-surgery rehab, every moment was handled with genuine warmth and world-class expertise.”</blockquote>
                    <div className="cs_testimonial_author">
                      <span className="cs_quote_icon">
                      <img  src="/assets/img/quote.svg" alt="Quote icon" />
                      </span>
                      <div className="cs_author_info">
                        <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_6">Sarah Jones</h3>
                        <p className="cs_author_designation mb-0">Cardiac Recoveree</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_controller_4">
              <div className="slider-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="slider-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          {/* <div className="row cs_gap_y_30">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_testimonial_img position-relative">
                <img  src="/assets/img/testimonial_img_1.webp" alt="Doctor and Patient" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_testimonial_content">
               
              </div>
            </div>
            </div> */}
        </div>
      </section>
      {/* End Testimonial Section */}
      {/* Start Transform Section */}
      <section className="cs_transform_section_1 cs_tabs">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_transform_content">
                <div className="cs_section_heading_style_1 cs_mb_24">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Real Patient Journey</p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Before &amp; After<br  />Transformations</h2>
                </div>
                <p className="cs_transform_desc cs_mb_30">Witness the life-changing results achieved at Hospil — each smile tells a story of precision, care, and artistry.</p>
                <ul className="cs_transform_tabs cs_tab_links cs_style_1 cs_mp_0">
                  <li className="active"><a href="#teethWhitening">Teeth Whitening</a></li>
                  <li><a href="#scaling">Scaling</a></li>
                  <li><a href="#rootCanal">Root Canal</a></li>
                  <li><a href="#bridges">Bridges</a></li>
                  <li><a href="#fillings">Fillings</a></li>
                  <li><a href="#crowns">Crowns</a></li>
                  <li><a href="#braces">Braces</a></li>
                  <li><a href="#dentalImplants">Dental Implants</a></li>
                  <li><a href="#broken">Broken</a></li>
                  <li><a href="#veneers">Veneers</a></li>
                  <li><a href="#redBleedingGums">Red Bleeding Gums</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_tab_content position-relative">
                <div className="cs_tab active" id="teethWhitening">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_1.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="scaling">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_2.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="rootCanal">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_3.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="bridges">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_4.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="fillings">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_9.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="crowns">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_10.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="braces">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_11.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="dentalImplants">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_5.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="broken">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_6.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="veneers">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_7.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
                <div className="cs_tab" id="redBleedingGums">
                  <div className="cs_transform_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/before_after_img_8.webp" alt="Before treatment" className="cs_transform_before" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Transform Section */}
      {/* Start Blog Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Hospil Insights</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Evidence-Based Tips, Myth Busters, and Expert Advice From Hospil Dentists</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-6">
              <div className="cs_post_style_1 cs_type_1">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24 overflow-hidden">
                <img  src="/assets/img/post_img_10.webp" alt="Post image" />
                <span className="cs_post_date cs_fs_14">April 15, 2026</span>
                </Link>
                <div className="cs_post_info">
                  <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_14">
                    <Link  to="/blog-details" aria-label="Read the post details">5 Signs Your Gum Pain Needs Immediate Care</Link>
                  </h3>
                  <p className="cs_post_excerpt cs_mb_24">Bleeding while brushing? Persistent bad breath? Don't ignore early periodontitis. Learn when to visit Hospil emergency...</p>
                  <div className="cs_post_author_read">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favico.svg" alt="Author icon" />
                        </span>
                        <span className="cs_author_title">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">5 min read</span>
                      </div>
                    </div>
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_btn_style_2 cs_semibold cs_radius_5">
                    <span>Learn More</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_post_style_1 cs_type_1">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24 overflow-hidden">
                <img  src="/assets/img/post_img_11.webp" alt="Post image" />
                <span className="cs_post_date cs_fs_14">April 15, 2026</span>
                </Link>
                <div className="cs_post_info">
                  <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_14">
                    <Link  to="/blog-details" aria-label="Read the post details">Braces vs Clear Aligners: Cost, Time &amp; Comfort</Link>
                  </h3>
                  <p className="cs_post_excerpt cs_mb_24">Metal braces or invisible aligners? We break down treatment duration, price range, and lifestyle impact to help you choose.</p>
                  <div className="cs_post_author_read">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favico.svg" alt="Author icon" />
                        </span>
                        <span className="cs_author_title">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">7 min read</span>
                      </div>
                    </div>
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_btn_style_2 cs_semibold cs_radius_5">
                    <span>Learn More</span>
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

export default HomeV4;
