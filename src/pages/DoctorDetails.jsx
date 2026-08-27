import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const DoctorDetails = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <PageHeader title="Doctor Details" breadcrumb={[{ label: 'Doctors', url: '/doctors' }, { label: 'Doctor Details' }]} />
      {/* End Page Header */}
      {/* Start Doctor Details Section */}
      <section className="cs_doctor_details">
        <div className="container">
          <div className="cs_doctor_hero">
            <div className="row cs_gap_y_30">
              <div className="col-lg-4">
                <div className="cs_doctor_img cs_radius_20">
                  <img  src="/assets/img/team_img_5.webp" alt="Dr. Gregory Bynum" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cs_doctor_info">
                  <p className="cs_doctor_role cs_accent_color cs_fs_14 cs_semibold cs_mb_17">// SENIOR CONSULTANT & HOD CARDIOLOGY</p>
                  <h2 className="cs_doctor_name cs_fs_40 cs_semibold cs_mb_12">Dr. Gregory Bynum</h2>
                  <p className="cs_doctor_credentials cs_mb_12">MD, FACC, FRCP (London) | Interventional Cardiologist</p>
                  <div className="cs_rating_container cs_mb_24">
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                    <span className="cs_rating_text">4.9 (278 patient reviews)</span>
                  </div>
                  <p className="cs_doctor_bio cs_mb_20">Internationally renowned cardiologist with expertise in complex coronary interventions, heart failure management, and preventive cardiology. Dr. Bynum has performed over 8,000 successful cardiac procedures and is dedicated to patient-centric, evidence-based care.</p>
                  <div className="cs_social_btns_style_1 cs_mb_48 cs_mb_lg_30">
                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <ul className="cs_doctor_features cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>22+ Years Exp</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>10k+ Surgeries</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>English, Spanish</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_doctor_main">
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">Biography</h3>
                  <p className="cs_mb_16">Dr. Gregory Bynum is a distinguished cardiologist and the Head of the Department of Cardiology at Hospil General Hospital. He completed his medical degree from Johns Hopkins University and his fellowship in Interventional Cardiology at Cleveland Clinic. With a passion for innovative treatments, Dr. Bynum has pioneered several minimally invasive cardiac procedures in the region. He believes in a holistic approach combining advanced technology with compassionate care.</p>
                  <p className="mb-0">He has been a principal investigator in multiple clinical trials on novel antiplatelet therapies and has published over 45 peer-reviewed articles. Outside the hospital, Dr. Bynum advocates for heart health awareness and community screening programs.</p>
                </div>
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">Areas of Expertise</h3>
                  <ul className="cs_doctor_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Complex Coronary Angioplasty &amp; Stenting</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Pacemaker &amp; ICD Implantation</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Heart Failure Management &amp; Cardiac Rehab</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Preventive Cardiology &amp; Lipid Management</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Transcatheter Aortic Valve Replacement (TAVR)</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">Education &amp; Training</h3>
                  <ul className="cs_doctor_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong>MD, Cardiology</strong>-Johns Hopkins University, USA</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong>Fellowship in Interventional Cardiology</strong>-Cleveland Clinic</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong>Research Fellowship</strong>-British Heart Foundation</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Board Certified in Cardiovascular Disease (ABIM)</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_doctor_block">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">What Patients Say</h3>
                  <ul className="cs_testimonial_list cs_mp_0">
                    <li>
                      <div className="cs_doctor_testimonial cs_radius_10">
                        <blockquote>“Dr. Bynum saved my life after a massive heart attack. His expertise and calm demeanor gave me confidence. Forever grateful!”</blockquote>
                        <small className="cs_testimonial_author">— Ricky Mitchell</small>
                      </div>
                    </li>
                    <li>
                      <div className="cs_doctor_testimonial cs_radius_10">
                        <blockquote>“Very thorough and kind. He explained my condition in simple terms and the treatment plan worked wonders.”</blockquote>
                        <small className="cs_testimonial_author">— Ronald Wheeler</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_primary_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_16">Consulting Hours</h3>
                  <ul className="cs_visiting_hours cs_color_1 cs_mp_0">
                    <li>
                      <span className="cs_hours_label cs_white_color">Mon–Fri:</span>
                      <span className="cs_hours_value cs_secondary2_color">9:00AM-7:00PM</span>
                    </li>
                    <li>
                      <span className="cs_hours_label cs_white_color">Sat:</span>
                      <span className="cs_hours_value cs_secondary2_color">By Appointment Only</span>
                    </li>
                    <li>
                      <span className="cs_hours_label cs_white_color">Sun:</span>
                      <span className="cs_hours_value cs_secondary2_color">Closed (emergency on-call)</span>
                    </li>
                    <li>
                      <span className="cs_hours_label cs_white_color">Location:</span>
                      <span className="cs_hours_value cs_secondary2_color">Wing I, 2nd Floor,<br  />Cardiac Center</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Direct Contact</h3>
                  <ul className="cs_visiting_hours cs_mp_0">
                    <li><a href="tel:+8801234567890">+880 1234-567890 (Clinic)</a></li>
                    <li><a href="mailto:info@hospil.com">dr.gregory@hospil.com</a></li>
                    <li><a href="tel:+88029876543">+880 2-9876543</a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Book Appointment</h3>
                  <form action="#" className="cs_appointment_form">
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-name" className="cs_form_label cs_primary_color cs_semibold">Full Name</label>
                      <input  type="text" id="booking-name" name="name" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-phone" className="cs_form_label cs_primary_color cs_semibold">Phone Number</label>
                      <input  type="tel" id="booking-phone" name="phone" className="cs_form_field" placeholder="Enter your Phone number" autocomplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-symptoms" className="cs_form_label cs_primary_color cs_semibold">Brief symptoms</label>
                      <textarea id="booking-symptoms" name="symptoms" className="cs_form_field" rows="3" placeholder="Brief your symptoms"></textarea>
                    </div>
                    <button type="submit" aria-label="Book appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center">
                    <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Book Appointment</span>
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* End Doctor Details Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default DoctorDetails;
