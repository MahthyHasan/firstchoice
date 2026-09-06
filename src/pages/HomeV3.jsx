import React from 'react';
import { Link } from 'react-router-dom';

const HomeV3 = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Hero Section */}
      <section className="cs_hero_style_3 cs_bg_filed position-relative" data-src="/assets/img/hero_bg_4.webp">
        <div className="cs_hero_overlay"></div>
        <div className="container">
          <div className="cs_hero_inner position-relative z-1">
            <div className="cs_hero_badges cs_mb_48 cs_mb_lg_30">
              <div className="cs_hero_badge cs_hero_rating cs_radius_10">
                <span className="cs_hero_rating_value cs_fs_40 cs_semibold cs_white_color cs_primary_font">4.9/5</span>
                <div className="cs_rating cs_mb_14" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
                <span className="cs_hero_badge_text cs_white_color">Loved by over 5,000+ patients</span>
              </div>
              <div className="cs_hero_badge cs_hero_users cs_radius_10">
                <div className="cs_hero_avatars">
                  <span className="cs_hero_avatar"><img  src="/assets/img/avatar_1.webp" alt="Patient" /></span>
                  <span className="cs_hero_avatar"><img  src="/assets/img/avatar_2.webp" alt="Patient" /></span>
                  <span className="cs_hero_avatar"><img  src="/assets/img/avatar_3.webp" alt="Patient" /></span>
                  <span className="cs_hero_avatar cs_hero_avatar_more cs_accent_bg cs_white_color cs_fs_14 cs_bold">1M+</span>
                </div>
                <span className="cs_hero_badge_text cs_fs_14 cs_white_color">Patient already using <br  />our services</span>
              </div>
            </div>
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_fs_64 cs_bold cs_white_color cs_mb_24">Healing Little Bodies <br  /> Growing Big Dreams</h1>
              <p className="cs_hero_desc cs_fs_18 cs_white_color cs_mb_48 cs_mb_lg_30">Expert medical support woven into play-based learning. A place where sick days feel safer and well days shine brighter.</p>
              <ul className="cs_hero_features cs_mp_0">
                <li>
                  <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                  <span className="cs_white_color">Pediatric nurse always present</span>
                </li>
                <li>
                  <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                  <span className="cs_white_color">Emotionally safe + medical care</span>
                </li>
              </ul>
              <div className="cs_hero_btns">
                <Link  to="/doctors" aria-label="Find a doctor" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                <img  src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" />
                <span>Find a Doctor</span>
                </Link>
                <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start Partners Section */}
      <div className="cs_partners_section_1 cs_gray2_bg">
        <div className="cs_partners_wrapper">
          <div className="cs_partners_label">
            <span className="cs_fs_18">Our medical <br  />Partners</span>
          </div>
          <div className="cs_partners_slider">
            <div className="swiper" data-slides-per-view="responsive" data-autoplay="1" data-loop="1" data-speed="800" data-mobile-slides="2" data-tablet-slides="2" data-desktop-slides="4" data-large-desktop-slides="4" data-extra-large-slides="5" data-add-slides="6" data-mobile-gap="24" data-tablet-gap="32" data-desktop-gap="40" data-show-pagination="0">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_1.svg" alt="LoveCare" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_2.svg" alt="medstar" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_3.svg" alt="Medical Partner" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_4.svg" alt="wellness" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_5.svg" alt="Vets&amp;Co" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_6.svg" alt="health care" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs_partner_item cs_center">
                    <img  src="/assets/img/partner_logo_4.svg" alt="wellness" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Partners Section */}
      {/* Start About Section */}
      <section className="cs_about_style_3">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_2 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_gray4_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Since 2015 &bull; Your Health Partner</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Hospil is the first integrated pediatric daycare & recovery center designed for working parents who never want to compromise on their child's health or happiness.</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-xl-7 col-lg-6">
              <div className="cs_about_img cs_radius_20 cs_parallax position-relative">
                <img  src="/assets/img/about_img_3.webp" alt="Doctor caring for child with parent" />
                <div className="cs_funfact_style_1 cs_radius_20">
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                      <span className="odometer" data-count-to="98"></span>%
                    </div>
                    <div className="cs_funfact_title cs_white_color">Patient Satisfaction</div>
                  </div>
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                      <span className="odometer" data-count-to="2"></span>k+
                    </div>
                    <div className="cs_funfact_title cs_white_color">Happy families served</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cs_about_content">
                <p className="cs_about_text cs_mb_14">Founded by a team of pediatric nurses and early childhood educators, we created a safe haven where mild illnesses, post-hospital recovery, and daily learning coexist.</p>
                <p className="cs_about_text cs_mb_48 cs_mb_lg_30">Every corner is childproofed, every protocol is hospital-grade, and every smile is genuine. Our holistic approach ensures your little one receives preventive monitoring, medication support, and nurturing play — all under one roof.</p>
                <Link  to="/about-us" aria-label="More about Hospil" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5 cs_mb_24">
                <span>More About Us</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                </Link>
                <div className="cs_about_extras">
                  <div className="cs_about_doctors_img cs_radius_20 overflow-hidden">
                    <img  src="/assets/img/about_img_4.webp" alt="Two Hospil doctors" />
                  </div>
                  <div className="cs_about_hours cs_gray2_bg cs_radius_20">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
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
      {/* Start Service Section */}
      <section className="cs_service_section_3 cs_gray3_bg">
        <div className="container">
          <div className="cs_section_heading_style_2 cs_type_1 cs_mb_48">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_gray4_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Medical Childcare Services</p>
              <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">From Recovery Support to Everyday Well Child Care We Have Covered</h2>
            </div>
            <div className="cs_section_heading_right">
              <Link  to="/services" aria-label="Explore all services" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
              <span>Explore All Service</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
              </Link>
            </div>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-4 col-md-5">
              <ul className="cs_service_menu cs_mp_0">
                <li className="cs_service_menu_item cs_active cs_white_bg cs_radius_5">
                  <span className="cs_service_menu_icon cs_center cs_radius_5">
                  <img  src="/assets/img/icons/fever.svg" alt="Sick child icon" />
                  </span>
                  <span className="cs_service_menu_text cs_fs_24 cs_medium">Sick Child Care</span>
                </li>
                <li className="cs_service_menu_item cs_white_bg cs_radius_5">
                  <span className="cs_service_menu_icon cs_center cs_radius_5">
                  <img  src="/assets/img/icons/daycare.svg" alt="Daycare icon" />
                  </span>
                  <span className="cs_service_menu_text cs_fs_24 cs_medium">Well Child Daycare</span>
                </li>
                <li className="cs_service_menu_item cs_white_bg cs_radius_5">
                  <span className="cs_service_menu_icon cs_center cs_radius_5">
                  <img  src="/assets/img/icons/hospital2.svg" alt="Hospital icon" />
                  </span>
                  <span className="cs_service_menu_text cs_fs_24 cs_medium">Post-Hospital Transition</span>
                </li>
                <li className="cs_service_menu_item cs_white_bg cs_radius_5">
                  <span className="cs_service_menu_icon cs_center cs_radius_5">
                  <img  src="/assets/img/icons/ambulance2.svg" alt="Ambulance icon" />
                  </span>
                  <span className="cs_service_menu_text cs_fs_24 cs_medium">Emergency Needs</span>
                </li>
              </ul>
            </div>
            <div className="col-xl-7 col-md-7 offset-xl-1">
              <div className="cs_service_panes">
                <div className="cs_service_pane cs_active">
                  <div className="cs_service_img cs_radius_20 overflow-hidden position-relative">
                    <img  src="/assets/img/service_img_9.webp" alt="Sick child care" />
                    <Link  to="/service-details" aria-label="View service details" className="cs_service_arrow_btn cs_accent_bg cs_white_color cs_radius_50">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                  <div className="cs_service_card cs_white_bg cs_radius_20">
                    <span className="cs_service_card_tag cs_fs_14 cs_radius_5">
                    <img  src="/assets/img/icons/check-double.svg" alt="Check" />
                    <span>24/7 Nurse supervision</span>
                    </span>
                    <p className="cs_service_card_desc mb-0">Dedicated isolation suite with pediatric nurse, cozy rest areas, and remote parent updates. Ideal for mild fevers, colds, or post-vaccination recovery — so you don't miss work.</p>
                  </div>
                </div>
                <div className="cs_service_pane">
                  <div className="cs_service_img cs_radius_20 overflow-hidden position-relative">
                    <img  src="/assets/img/service_img_10.webp" alt="Well child daycare" />
                    <Link  to="/service-details" aria-label="View service details" className="cs_service_arrow_btn cs_accent_bg cs_white_color cs_radius_50 cs_center">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                  <div className="cs_service_card cs_white_bg cs_radius_20">
                    <span className="cs_service_card_tag cs_fs_14 cs_radius_5">
                    <img  src="/assets/img/icons/check-double.svg" alt="Check" />
                    <span>ECE + Health monitoring</span>
                    </span>
                    <p className="cs_service_card_desc mb-0">Montessori-inspired activities, daily outdoor play, and integrated health checks. Nurses do routine vitals, while educators nurture curiosity — all in a vibrant, safe setting.</p>
                  </div>
                </div>
                <div className="cs_service_pane">
                  <div className="cs_service_img cs_radius_20 overflow-hidden position-relative">
                    <img  src="/assets/img/service_img_11.webp" alt="Post-hospital transition" />
                    <Link  to="/service-details" aria-label="View service details" className="cs_service_arrow_btn cs_accent_bg cs_white_color cs_radius_50 cs_center">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                  <div className="cs_service_card cs_white_bg cs_radius_20">
                    <span className="cs_service_card_tag cs_fs_14 cs_radius_5">
                    <img  src="/assets/img/icons/check-double.svg" alt="Check" />
                    <span>Medical recovery support</span>
                    </span>
                    <p className="cs_service_card_desc mb-0">For children returning from illness, or injury. Medication administration, physio play, rest monitoring, and coordination with your pediatrician seamless bridge home.</p>
                  </div>
                </div>
                <div className="cs_service_pane">
                  <div className="cs_service_img cs_radius_20 overflow-hidden position-relative">
                    <img  src="/assets/img/service_img_12.webp" alt="Emergency needs" />
                    <Link  to="/service-details" aria-label="View service details" className="cs_service_arrow_btn cs_accent_bg cs_white_color cs_radius_50 cs_center">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                  <div className="cs_service_card cs_white_bg cs_radius_20">
                    <span className="cs_service_card_tag cs_fs_14 cs_radius_5">
                    <img  src="/assets/img/icons/check-double.svg" alt="Check" />
                    <span>Rapid response ready</span>
                    </span>
                    <p className="cs_service_card_desc mb-0">Pediatric first aid, seizure action plans, tube feeding, asthma management, and direct 911 coordination. Fully inclusive for children with complex medical needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}
      {/* Start Feature Section */}
      <section className="cs_feature_section_3">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-lg-4 col-md-6">
              <div className="cs_section_heading_style_1 cs_type_2 cs_mb_48">
                <p className="cs_section_subtitle cs_gray4_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Health &amp; Safety Features</p>
                <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Hospital-Grade Safety, Child Friendly Soul</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_feature_card_3 cs_radius_15">
                <div className="cs_feature_card_inner">
                  <div className="cs_feature_card_face cs_feature_card_front cs_radius_15 overflow-hidden">
                    <div className="cs_feature_card_bg">
                      <img  src="/assets/img/feature_img_4.webp" alt="Isolation Suite" />
                    </div>
                    <div className="cs_feature_card_overlay"></div>
                    <div className="cs_feature_card_front_content">
                      <div className="cs_feature_card_header">
                        <span className="cs_feature_card_icon cs_accent_bg cs_radius_10 cs_center">
                        <img  src="/assets/img/icons/social-withdrawal.svg" alt="Isolation icon" />
                        </span>
                        <h3 className="cs_feature_card_title cs_fs_24 cs_medium cs_white_color mb-0">Isolation Suite</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_feature_card_face cs_feature_card_back cs_gray2_bg cs_radius_15">
                    <div className="cs_feature_card_header cs_mb_29">
                      <span className="cs_feature_card_icon_back cs_radius_10 cs_center">
                      <img  src="/assets/img/icons/social-withdrawal.svg" alt="Isolation icon" />
                      </span>
                      <h3 className="cs_feature_card_back_title cs_fs_24 cs_medium mb-0">Isolation Suite</h3>
                    </div>
                    <p className="cs_feature_card_back_desc mb-0">Dedicated negative-pressure room for fever or respiratory symptoms. Direct ventilation, private bath, and 1:1 nurse monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_feature_card_3 cs_radius_15">
                <div className="cs_feature_card_inner">
                  <div className="cs_feature_card_face cs_feature_card_front cs_radius_15 overflow-hidden">
                    <div className="cs_feature_card_bg">
                      <img  src="/assets/img/feature_img_5.webp" alt="Clinical Disinfection" />
                    </div>
                    <div className="cs_feature_card_overlay"></div>
                    <div className="cs_feature_card_front_content">
                      <div className="cs_feature_card_header">
                        <span className="cs_feature_card_icon cs_accent_bg cs_radius_10 cs_center">
                        <img  src="/assets/img/icons/disinfection.svg" alt="Clinical Disinfection icon" />
                        </span>
                        <h3 className="cs_feature_card_title cs_fs_24 cs_medium cs_white_color mb-0">Clinical Disinfection</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_feature_card_face cs_feature_card_back cs_gray2_bg cs_radius_15">
                    <div className="cs_feature_card_header cs_mb_29">
                      <span className="cs_feature_card_icon_back cs_radius_10 cs_center">
                      <img  src="/assets/img/icons/disinfection.svg" alt="Clinical Disinfection icon" />
                      </span>
                      <h3 className="cs_feature_card_back_title cs_fs_24 cs_medium mb-0">Clinical Disinfection</h3>
                    </div>
                    <p className="cs_feature_card_back_desc mb-0">Electrostatic sprayers + UV-C robots after hours. Hospital-grade, child-safe disinfectants used on all toys, mats & high-touch surfaces.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_feature_card_3 cs_radius_15">
                <div className="cs_feature_card_inner">
                  <div className="cs_feature_card_face cs_feature_card_front cs_radius_15 overflow-hidden">
                    <div className="cs_feature_card_bg">
                      <img  src="/assets/img/feature_img_6.webp" alt="Medication System" />
                    </div>
                    <div className="cs_feature_card_overlay"></div>
                    <div className="cs_feature_card_front_content">
                      <div className="cs_feature_card_header">
                        <span className="cs_feature_card_icon cs_accent_bg cs_radius_10 cs_center">
                        <img  src="/assets/img/icons/vitamins.svg" alt="Medication System icon" />
                        </span>
                        <h3 className="cs_feature_card_title cs_fs_24 cs_medium cs_white_color mb-0">Medication System</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_feature_card_face cs_feature_card_back cs_gray2_bg cs_radius_15">
                    <div className="cs_feature_card_header cs_mb_29">
                      <span className="cs_feature_card_icon_back cs_radius_10 cs_center">
                      <img  src="/assets/img/icons/vitamins.svg" alt="Medication System icon" />
                      </span>
                      <h3 className="cs_feature_card_back_title cs_fs_24 cs_medium mb-0">Medication System</h3>
                    </div>
                    <p className="cs_feature_card_back_desc mb-0">Dual-nurse verification, biometric locked cabinet, digital log with parent e-signature. Supports chronic conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_feature_card_3 cs_radius_15">
                <div className="cs_feature_card_inner">
                  <div className="cs_feature_card_face cs_feature_card_front cs_radius_15 overflow-hidden">
                    <div className="cs_feature_card_bg">
                      <img  src="/assets/img/feature_img_7.webp" alt="Pediatric Emergency" />
                    </div>
                    <div className="cs_feature_card_overlay"></div>
                    <div className="cs_feature_card_front_content">
                      <div className="cs_feature_card_header">
                        <span className="cs_feature_card_icon cs_accent_bg cs_radius_10 cs_center">
                        <img  src="/assets/img/icons/orthopedics.svg" alt="Pediatric Emergency icon" />
                        </span>
                        <h3 className="cs_feature_card_title cs_fs_24 cs_medium cs_white_color mb-0">Pediatric Emergency</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_feature_card_face cs_feature_card_back cs_gray2_bg cs_radius_15">
                    <div className="cs_feature_card_header cs_mb_29">
                      <span className="cs_feature_card_icon_back cs_radius_10 cs_center">
                      <img  src="/assets/img/icons/pediatrics.svg" alt="Pediatric Emergency icon" />
                      </span>
                      <h3 className="cs_feature_card_back_title cs_fs_24 cs_medium mb-0">Pediatric Emergency</h3>
                    </div>
                    <p className="cs_feature_card_back_desc mb-0">On-site oxygen, AED for children, emergency transport protocol. All staff trained in First Aid. Direct 911 + parent alert within 30 sec.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_feature_card_3 cs_radius_15">
                <div className="cs_feature_card_inner">
                  <div className="cs_feature_card_face cs_feature_card_front cs_radius_15 overflow-hidden">
                    <div className="cs_feature_card_bg">
                      <img  src="/assets/img/feature_img_8.webp" alt="Smart Air Monitoring" />
                    </div>
                    <div className="cs_feature_card_overlay"></div>
                    <div className="cs_feature_card_front_content">
                      <div className="cs_feature_card_header">
                        <span className="cs_feature_card_icon cs_accent_bg cs_radius_10 cs_center">
                        <img  src="/assets/img/icons/weather.svg" alt="Smart Air Monitoring icon" />
                        </span>
                        <h3 className="cs_feature_card_title cs_fs_24 cs_medium cs_white_color mb-0">Smart Air Monitoring</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_feature_card_face cs_feature_card_back cs_gray2_bg cs_radius_15">
                    <div className="cs_feature_card_header cs_mb_29">
                      <span className="cs_feature_card_icon_back cs_radius_10 cs_center">
                      <img  src="/assets/img/icons/weather.svg" alt="Smart Air Monitoring icon" />
                      </span>
                      <h3 className="cs_feature_card_back_title cs_fs_24 cs_medium mb-0">Smart Air Monitoring</h3>
                    </div>
                    <p className="cs_feature_card_back_desc mb-0">Live CO₂, humidity, PM2.5 sensors in every room. Parents get live dashboard access & automatic alerts if ventilation needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}
      {/* Start CTA Section */}
      <section className="cs_cta_section_3">
        <div className="container">
          <div className="cs_cta_card cs_radius_20 cs_bg_filed position-relative overflow-hidden" data-src="/assets/img/cta_bg_1.webp">
            <div className="cs_cta_inner">
              <div className="cs_cta_visual position-absolute">
                <img  src="/assets/img/vector_shape_3.svg" alt="Vector shape" />
                <div className="cs_cta_image_stage">
                  <div className="cs_cta_image_circle">
                    <img  src="/assets/img/cta_img_1.webp" alt="Pediatric nurse with child" />
                  </div>
                </div>
                <div className="cs_cta_offer cs_white_color cs_primary_font">
                  <span className="cs_cta_offer_value cs_fs_40 cs_semibold">20%</span>
                  <span className="cs_cta_offer_label cs_white_color">OFF</span>
                </div>
              </div>
              <div className="cs_cta_text cs_section_heading_style_1 cs_type_1 position-relative z-2">
                <span className="cs_cta_weather">
                <img  src="/assets/img/cloud_sun.svg" alt="Cloud Sun shape" />
                </span>
                <p className="cs_section_subtitle cs_accent_bg cs_radius_20 cs_white_color cs_fs_14 cs_mb_12">// Limited Welcome Offer</p>
                <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_24">First Month of Medical <br  /> Daycare</h2>
                <p className="cs_cta_desc mb-0">Enroll before <span> April 30 </span> and get 20% off full-time care + free health <br  /> assessment kit. Because every little hero deserves safe healing.</p>
              </div>
              <div className="cs_cta_actions">
                <div className="cs_cta_phone cs_white_color cs_fs_14">
                  <p className="cs_cta_phone_label mb-0">Have any question:</p>
                  <a href="tel:+14448281507" className="cs_cta_phone_number cs_white_color cs_semibold">+1 444 828 1507</a>
                </div>
                <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Section */}
      {/* Start Team Section */}
      <section className="cs_team_section_3">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_2 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_gray4_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_20">// Medical Expertise</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Every Child Deserves a Team <br  /> That Nurtures Both Health and Curiosity.</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_3 cs_gray2_bg cs_radius_20">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative overflow-hidden">
                  <img  src="/assets/img/team_img_1.webp" alt="Dr. Gregory Bynum" />
                  <div className="cs_team_social">
                    <a href="#" aria-label="Instagram" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter X" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Facebook" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Gregory Bynum</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_fs_14 mb-0">Nurse Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_3 cs_gray2_bg cs_radius_20">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative overflow-hidden">
                  <img  src="/assets/img/team_img_2.webp" alt="Dr. Lori Fletcher" />
                  <div className="cs_team_social">
                    <a href="#" aria-label="Instagram" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter X" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Facebook" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Lori Fletcher</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_fs_14 mb-0">Pediatric Dietitian</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_3 cs_gray2_bg cs_radius_20">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative overflow-hidden">
                  <img  src="/assets/img/team_img_3.webp" alt="Dr. Philip Johnson" />
                  <div className="cs_team_social">
                    <a href="#" aria-label="Instagram" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter X" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Facebook" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Philip Johnson</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_fs_14 mb-0">Pediatric Consultant</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_team_style_3 cs_gray2_bg cs_radius_20">
                <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative overflow-hidden">
                  <img  src="/assets/img/team_img_4.webp" alt="Dr. Aline Briscoe" />
                  <div className="cs_team_social">
                    <a href="#" aria-label="Instagram" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter X" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Facebook" className="cs_white_bg cs_radius_50 cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Aline Briscoe</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_fs_14 mb-0">Child Life Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}     
      {/* Start Admission Section */}
      <section className="cs_admission_section_1 cs_gray6_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_2 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_gray3_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Simple & Guided Enrollment</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Medical Safety Meets Early Education <br  /> From First Visit to Full Admission</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <ul className="cs_admission_steps cs_mp_0">
                <li className="cs_admission_step cs_white_bg cs_radius_20">
                  <span className="cs_admission_step_number cs_fs_40 cs_accent_color cs_primary_font cs_semibold">01</span>
                  <div className="cs_admission_step_content">
                    <h3 className="cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Virtual or In-person Tour</h3>
                    <p className="mb-0">Explore our medical childcare facility, meet the pediatric nurse, and see our isolation suite &amp; play areas.</p>
                  </div>
                </li>
                <li className="cs_admission_step cs_white_bg cs_radius_20">
                  <span className="cs_admission_step_number cs_fs_40 cs_accent_color cs_primary_font cs_semibold">02</span>
                  <div className="cs_admission_step_content">
                    <h3 className="cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Health Assessment Meeting</h3>
                    <p className="mb-0">Review medical history, allergies, medications, and create an individualized care plan with our nurse manager.</p>
                  </div>
                </li>
                <li className="cs_admission_step cs_white_bg cs_radius_20">
                  <span className="cs_admission_step_number cs_fs_40 cs_accent_color cs_primary_font cs_semibold">03</span>
                  <div className="cs_admission_step_content">
                    <h3 className="cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Trial Day (Half-day with Observation)</h3>
                    <p className="mb-0">Your child spends 3-4 hours with our team while a nurse monitors vitals and comfort — parent stays on-site or nearby.</p>
                  </div>
                </li>
                <li className="cs_admission_step cs_white_bg cs_radius_20">
                  <span className="cs_admission_step_number cs_fs_40 cs_accent_color cs_primary_font cs_semibold">04</span>
                  <div className="cs_admission_step_content">
                    <h3 className="cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Full Enrollment &amp; Digital Onboarding</h3>
                    <p className="mb-0">Complete forms, upload immunization records, sign consents, and activate parent dashboard access.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="cs_admission_img cs_radius_20 cs_parallax cs_mb_24 position-relative">
                <img  src="/assets/img/admission_banner_1.webp" alt="Medical staff team" />
                <div className="cs_admission_badge cs_accent_bg cs_white_color cs_radius_50">
                  <div className="cs_circular_text">
                    <img  src="/assets/img/circular_text.svg" alt="Circular text" />
                  </div>
                  <a href="tel:+14448281507" aria-label="Call us" className="cs_admission_badge_icon cs_center cs_white_bg cs_radius_50">
                  <img  src="/assets/img/icons/phone3.svg" alt="Phone icon" />
                  </a>
                </div>
              </div>
              <h3 className="cs_admission_options_title cs_fs_40 cs_semibold cs_mb_24">Enrollment Options</h3>
              <div className="row cs_gap_y_24">
                <div className="col-sm-6">
                  <div className="cs_admission_option cs_color_1 cs_radius_20 cs_active">
                    <h4 className="cs_fs_24 cs_medium cs_mb_6">Full Body Checkup</h4>
                    <p className="cs_admission_option_meta cs_fs_14 cs_mb_12">Mon-Fri, 7am-7pm</p>
                    <div className="cs_admission_option_price cs_mb_24">
                      <span className="cs_price_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font">$285</span>
                      <small className="cs_price_period cs_fs_14">/ week</small>
                    </div>
                    <Link  to="/appointment" aria-label="enroll Now" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Enroll Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cs_admission_option cs_color_2 cs_radius_20">
                    <h4 className="cs_fs_24 cs_medium cs_mb_6">Sick Child</h4>
                    <p className="cs_admission_option_meta cs_fs_14 cs_mb_12">Hourly with nurse supervision</p>
                    <div className="cs_admission_option_price cs_mb_24">
                      <span className="cs_price_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font">$12.50</span>
                      <span className="cs_price_period cs_fs_14">/ hour</span>
                    </div>
                    <Link  to="/appointment" aria-label="enroll Now" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Enroll Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Admission Section */}
      {/* Start Appointment Section */}
      <section className="cs_appointment_section_3">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-xl-12 order-xl-2">
              <div className="cs_appointment_right">
                <div className="row cs_gap_y_24 align-items-end">
                  <div className="col-xl-8 col-lg-12 order-xl-2">
                    <div className="cs_appointment_container">
                      <div className="cs_appointment_heading cs_mb_48 cs_mb_lg-40">
                        <h2 className="cs_fs_40 cs_semibold cs_mb_6">Book an Appointment</h2>
                        <p className="mb-0">Fill the details below — we'll confirm within 2hrs.</p>
                      </div>
                      <div className="cs_appointment_form_wrapper cs_gray3_bg cs_radius_20">
                        <form action="#" className="cs_appointment_form_2 cs_type_1 row cs_gap_y_24">
                          <div className="col-12">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-name">Full Name</label>
                              <input  type="text" name="name" id="appt-name" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-phone">Phone Number</label>
                              <input  type="text" name="phone" id="appt-phone" className="cs_form_field" placeholder="Enter your phone" autocomplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-email">Email Address</label>
                              <input  type="email" name="email" id="appt-email" className="cs_form_field" placeholder="Enter your email address" autocomplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-department">Department</label>
                              <select className="cs_form_field cs_choice" name="department" id="appt-department">
                                <option selected disabled>Select department</option>
                                <option>Sick Child Care</option>
                                <option>Well Child Daycare</option>
                                <option>Post-Hospital Transition</option>
                                <option>Emergency Needs</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-doctor">Preferred Doctor</label>
                              <select className="cs_form_field cs_choice" name="doctor" id="appt-doctor">
                                <option selected disabled>Select doctor</option>
                                <option>Dr. Gregory Bynum</option>
                                <option>Dr. Lori Fletcher</option>
                                <option>Dr. Philip Johnson</option>
                                <option>Dr. Aline Briscoe</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                              <label htmlFor="appt-date">Date</label>
                              <input  type="text" name="date" id="appt-date" className="cs_form_field cs_datepicker" data-format="Y-m-d" placeholder="Select date" />
                              <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" className="cs_date_icon position-absolute" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                              <label htmlFor="appt-time">Preferred Time</label>
                              <input  type="text" name="time" id="appt-time" className="cs_form_field cs_timepicker" data-format="h:i K" placeholder="Select preferred time" />
                              <span className="cs_time_icon position-absolute"></span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-message">Additional Notes (optional)</label>
                              <textarea name="message" rows="3" id="appt-message" className="cs_form_field" placeholder="Describe your symptom here..."></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" aria-label="Confirm appointment" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                            <span>Confirm Appointment</span>
                            <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12">
                    <div className="cs_appointment_promise cs_radius_20 overflow-hidden position-relative">
                      <h3 className="cs_appointment_promise_title cs_fs_24 cs_semibold cs_primary_color mb-0">Your Child's Health, Our Gentle Promise.</h3>
                      <div className="cs_appointment_promise_img">
                        <img  src="/assets/img/appointment_img_3.webp" alt="Hospital care team" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="cs_appointment_map cs_radius_20 position-relative overflow-hidden border shadow-sm">
                <div className="bg-white p-3 border-bottom d-flex align-items-center gap-3">
                  <img src="/assets/img/icons/location-pin.svg" alt="Location Pin" style={{ width: '28px', height: '28px' }} />
                  <div>
                    <strong className="d-block text-dark cs_fs_16">First Choice Medical Services HQ</strong>
                    <span className="text-muted cs_fs_14">P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar</span>
                  </div>
                </div>
                <iframe src="https://maps.google.com/maps?q=P.O.Box+15496,+Bldg+No.+76,+Office+No.+04,+C-Ring+Road,+Umm+Ghuwailina,+Doha,+Qatar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="First Choice Medical Services Qatar Location Map" style={{ width: '100%', height: '420px', border: 0 }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <section className="cs_faq_section_2 cs_gray2_bg">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5 col-xl-4">
              <div className="cs_faq_heading">
                <div className="cs_section_heading_style_1 cs_type_2 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_white_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// got questions? we're here</p>
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Comforting answers for worried hearts</h2>
                </div>
                <div className="cs_faq_img cs_radius_20 cs_parallax position-relative overflow-hidden">
                  <img  src="/assets/img/faq_img_2.webp" alt="Team members" />
                  <div className="cs_faq_callout cs_accent_bg cs_white_color cs_radius_5">
                    <p className="cs_faq_callout_title mb-0">Still have a question?</p>
                    <p className="mb-0">Our care navigator is ready to help.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 offset-xl-1">
              <div className="cs_accordians_style_2">
                <div className="cs_accordian active">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Can Hospil administer prescription medications?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Absolutely. Our pediatric nurses handle medications with a double-verification system. Parents provide a doctor’s order and signed consent, and every dose is logged in the parent portal with real-time notifications.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. What happens if my child gets sick during the day?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Your child is moved to our dedicated isolation suite and assessed by an on-site pediatric nurse. You receive an instant alert and live updates while we coordinate the next steps with you.</p>
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
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Yes — asthma, diabetes, allergies, and other long-term conditions are welcome. Our nurse manager builds a personalized care plan with your specialist before enrollment.</p>
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
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Mon-Fri 7am-7pm with on-call emergency support around the clock. A critical-care ambulance is standby for transfers, and a pediatrician is reachable 24/7 by phone.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Is medical daycare covered by insurance / subsidies?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Many insurers reimburse part or all of medical daycare for qualifying conditions, and we can help you apply for state or employer subsidy programs during enrollment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
      {/* Start Testimonial Section */}
      <section className="cs_testimonial_section_3 slider-section pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_2 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_gray3_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Real Voices, Real Healing</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Every Story Reflects Medical Safety, <br  /> Warmth, &amp; The Joy of Growing at Hospil</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-5 order-lg-2">
              <div className="cs_testimonial_image_wrap cs_radius_20">
                <img  src="/assets/img/testimonial_img_2.webp" alt="Patient testimonial" />
                <div className="cs_testimonial_badge cs_gray6_bg cs_radius_20">
                  <span className="cs_badge_label cs_fs_20 cs_semibold cs_primary_color">Rated 4.9/5</span>
                  <div className="cs_rating_img cs_mb_12">
                    <img  src="/assets/img/stars.svg" alt="Stars image" />
                  </div>
                  <span className="cs_badge_count cs_fs_14">Based on 99 reviews</span>
                  <div className="cs_badge_brand">
                    <img  src="/assets/img/trustpilot.svg" alt="Trustpilot" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 position-relative">
              <div className="position-relative h-100">
                <div className="swiper cs_testimonial_slider_3" data-slides-per-view="1" data-autoplay="0" data-loop="1" data-speed="600" data-effect="slide">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="cs_testimonial_style_3">
                        <div className="cs_testimonial_content">
                          <div className="cs_rating cs_mb_24" data-rating="5">
                            <div className="cs_rating_percentage"></div>
                          </div>
                          <blockquote>“Hospil didn't just watch my son — they became his medical safety net. The nurses track his glucose levels, send me reports before every meal, and even taught him to recognize low-energy signs. I can finally work without panic attacks.”</blockquote>
                          <div className="cs_testimonial_author">
                            <div className="cs_author_icon cs_center cs_radius_50">
                              <img  src="/assets/img/icons/quote.svg" alt="Quote icon" />
                            </div>
                            <div className="cs_author_info">
                              <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_6">Arnulfo Seibert</h3>
                              <p className="cs_author_designation mb-0">Working mom of twin toddlers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cs_testimonial_style_3">
                        <div className="cs_testimonial_content">
                          <div className="cs_rating cs_mb_24" data-rating="5">
                            <div className="cs_rating_percentage"></div>
                          </div>
                          <blockquote>“Hospil didn't just watch my son — they became his medical safety net. The nurses track his glucose levels, send me reports before every meal, and even taught him to recognize low-energy signs. I can finally work without panic attacks.”</blockquote>
                          <div className="cs_testimonial_author">
                            <div className="cs_author_icon cs_center cs_radius_50">
                              <img  src="/assets/img/icons/quote.svg" alt="Quote icon" />
                            </div>
                            <div className="cs_author_info">
                              <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_6">Arnulfo Seibert</h3>
                              <p className="cs_author_designation mb-0">Working mom of twin toddlers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs_controller_4">
                  <div className="slider-prev">
                    <img  src="/assets/img/icons/arrow2-right.svg" alt="Previous" />
                  </div>
                  <div className="slider-next">
                    <img  src="/assets/img/icons/arrow2-right.svg" alt="Next" />
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
          <div className="cs_section_heading_style_1 cs_type_2 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_gray3_bg cs_radius_20 cs_accent_color cs_fs_14 cs_mb_12">// Latest News and Blog</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Parenting Guides, and Stories From Our <br  /> Pediatric Team Trusted by Families</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/post_img_7.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">12</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">5 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">When to keep your child home vs bring to Hospil sick bay</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/post_img_8.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">11</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">7 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Separation anxiety & medical daycare: gentle transitions</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/post_img_9.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">10</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">3 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Post-surgery care tips for working parents</Link>
                  </h3>
                </div>
              </article>
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

export default HomeV3;
