import React from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Facilities</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Facilities</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Facilities Section */}
      <section className="cs_facilities_section_1" aria-label="Our healing infrastructure">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// OUR HEALING INFRASTRUCTURE</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">From Emergency Response to Luxury Recovery — Every Detail Crafted for Excellence.</h2>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">24/7 Emergency & Trauma</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_1.webp" alt="24/7 Emergency and Trauma" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">24/7 Level-1 Trauma Centre equipped with rapid response team and advanced life support.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>5 dedicated trauma bays</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>CT & MRI in emergency zone</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Helipad for air ambulance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Advanced ICUs</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_2.webp" alt="Advanced ICUs" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">Modular ICUs with bedside monitors, ventilators, and 24/7 intensivist coverage.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Medical ICU, Cardiac ICU, Neuro ICU</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>1:1 nurse-patient ratio</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Real-time vitals monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Hybrid Operation Theatres</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_3.webp" alt="Hybrid Operation Theatres" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">Advanced modular OTs featuring laminar airflow, and crystal-clear 4K visualization.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Da Vinci Robotic System</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Integrated tele-surgery</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Ultra-clean ventilation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Radiology & Imaging</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_4.webp" alt="Radiology and Imaging" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">Precision diagnostics with low-dose technology and rapid reporting.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>3 Tesla MRI & 128-slice CT</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Digital Mammography & DEXA</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>AI-assisted reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Luxury & Private Rooms</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_5.webp" alt="Luxury and Private Rooms" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">Healing environment with hotel-like amenities, family lounge, and panoramic city views.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>High-speed WiFi & smart beds</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Chef-customized meals</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Daily housekeeping & laundry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_facility_card_1 cs_gray2_bg cs_radius_20">
                <div className="cs_card_header">
                  <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_24 cs_mb_lg_16">Rehabilitation Center</h3>
                </div>
                <div className="cs_card_img cs_radius_15 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/facility_img_6.webp" alt="Rehabilitation Center" />
                </div>
                <div className="cs_card_header">
                  <p className="cs_card_desc cs_mb_24 cs_mb_lg_20">Physiotherapy, occupational therapy, and hydrotherapy pools for complete recovery.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Aquatic therapy pool</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Gait & balance lab</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Cardiac rehab programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facilities Section */}
      {/* Start Smart Hospital Section */}
      <section aria-label="Digital and AI integrated care">
        <div className="container">
          <div className="cs_cta_style_2 cs_accent_bg cs_radius_20 cs_bg_filed position-relative" data-src="/assets/img/cta_bg_3.webp">
            <div className="cs_cta_overlay position-absolute"></div>
            <div className="cs_cta_content">
              <p className="cs_cta_subtitle cs_white_color cs_fs_14 cs_mb_17">// SMART HOSPITAL</p>
              <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_white_color cs_mb_24">Digital & AI-Integrated Care</h2>
              <p className="cs_cta_desc cs_white_color cs_mb_48 cs_mb_lg_36">Hospil leverages electronic medical records (EMR), AI-driven diagnostics, and a centralized command center to ensure seamless patient journeys. Real-time bed management, tele-ICU, and remote monitoring elevate safety.</p>
              <div className="cs_funfact_style_1 cs_cta_funfact cs_radius_20">
                <div className="cs_funfact_item">
                  <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                    <span className="odometer" data-count-to="98"></span>%
                  </div>
                  <div className="cs_funfact_title cs_white_color">Patient Satisfaction</div>
                </div>
                <div className="cs_funfact_item">
                  <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                    <span className="odometer" data-count-to="30"></span>+
                  </div>
                  <div className="cs_funfact_title cs_white_color">Specialties Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Smart Hospital Section */}
      {/* Start Technologies Ticker Section */}
      <section className="cs_technologies_section pb-0" aria-label="Cutting-edge medical equipment">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// CUTTING-EDGE MEDICAL EQUIPMENT</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">We Invest In the World's Most Advanced Technology For Accurate Diagnosis & Invasive Treatments.</h2>
          </div>
          <div className="cs_tech_ticker_wrap">
            <div className="cs_ticker_1 p-0">
              <div className="cs_ticker_in">
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Robotic Surgery</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Patient Monitors</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">ECG / EKG Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Ventilators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Defibrillators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Infusion Pumps</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Surgical Lasers</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Endoscopy Systems</li>
                </ul>
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0" aria-hidden="true">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Robotic Surgery</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Patient Monitors</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">ECG / EKG Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Ventilators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Defibrillators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Infusion Pumps</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Surgical Lasers</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Endoscopy Systems</li>
                </ul>
              </div>
            </div>
            <div className="cs_ticker_1 cs_reverse p-0">
              <div className="cs_ticker_in">
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Anesthesia Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Modular Operation Theatres</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Ultrasound Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">CT Scanners</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">MRI Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">PET-CT Scanners</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Linear Accelerators</li>
                </ul>
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0" aria-hidden="true">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Anesthesia Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Modular Operation Theatres</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Ultrasound Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">CT Scanners</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">MRI Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">PET-CT Scanners</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Linear Accelerators</li>
                </ul>
              </div>
            </div>
            <div className="cs_ticker_1 p-0">
              <div className="cs_ticker_in">
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Oxygen Concentrators & Cylinders</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">C-Arm Imaging Systems</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Hospital Beds & Stretchers</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Dialysis Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">ECMO Systems</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Neonatal Incubators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Digital X-Ray</li>
                </ul>
                <ul className="cs_ticker_content cs_tech_items_list cs_mp_0" aria-hidden="true">
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Oxygen Concentrators & Cylinders</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">C-Arm Imaging Systems</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Hospital Beds & Stretchers</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Dialysis Machines</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">ECMO Systems</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Neonatal Incubators</li>
                  <li className="cs_tech_item cs_gray2_bg cs_fs_20 cs_semibold cs_primary_color">Digital X-Ray</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Technologies Ticker Section */}
      {/* Start Experience Tour CTA Section */}
      <section className="cs_cta_style_3 position-relative" aria-label="Experience Hospil facilities firsthand">
        <div className="cs_cta_bg position-absolute">
          <img  src="/assets/img/vector_shape_11.svg" alt="Vector bg" />
        </div>
        <div className="container position-relative z-1">
          <div className="cs_cta text-center">
            <div className="cs_cta_content mx-auto">
              <h2 className="cs_cta_title cs_fs_60 cs_bold cs_white_color cs_mb_12">Experience Hospil Facilities Firsthand</h2>
              <p className="cs_cta_subtitle cs_primary_color cs_mb_48 cs_mb_lg_40">Schedule a personal tour or join our 360° virtual hospital walkthrough.</p>
              <div className="cs_btns_group">
                <a href="https://www.youtube.com/embed/cFV85I2GLME" aria-label="Start virtual tour" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5 cs_video_open">
                <span>Start Virtual Tour</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                </a>
                <Link  to="/appointment" aria-label="Book a physical tour" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                <span>Book a Physical Tour</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Experience Tour CTA Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Facilities;
