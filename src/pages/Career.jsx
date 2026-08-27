import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Careers</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Careers</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Career Mission Section */}
      <section className="cs_feature_section_1 pb-0">
        <div className="container">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Join Our Healing Mission</p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Build Your Career at Hospil</h2>
            </div>
            <div className="row cs_gap_y_24">
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_4 cs_radius_20 cs_color_1">
                  <div className="cs_feature_card_header cs_mb_15">
                    <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                      <img  src="/assets/img/icons/hand-heart.svg" alt="Compassion icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Compassionate Culture</h3>
                  </div>
                  <p className="cs_feature_desc mb-0">Respect, empathy, and teamwork define our daily work environment.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_4 cs_radius_20 cs_color_2">
                  <div className="cs_feature_card_header cs_mb_15">
                    <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                      <img  src="/assets/img/icons/line-chart.svg" alt="Excellence icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Growth and Learning</h3>
                  </div>
                  <p className="cs_feature_desc mb-0">CME programs, certifications, and leadership tracks.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_4 cs_radius_20 cs_color_3">
                  <div className="cs_feature_card_header cs_mb_15">
                    <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                      <img  src="/assets/img/icons/microscope-line.svg" alt="Safety icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Cutting-Edge Tech</h3>
                  </div>
                  <p className="cs_feature_desc mb-0">Work with robotic surgery, AI diagnostics, and advanced labs.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs_feature_card_4 cs_radius_20 cs_color_4">
                  <div className="cs_feature_card_header cs_mb_15">
                    <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                      <img  src="/assets/img/icons/scales-line.svg" alt="Teamwork icon" />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Work-Life Balance</h3>
                  </div>
                  <p className="cs_feature_desc mb-0">Flexible shifts, wellness programs, and supportive policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Career Mission Section */}
      {/* Start Current Openings Section */}
      <section className="cs_career_openings_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Current Openings</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Join a Team That's Redefining Healthcare Excellence. Explore Roles Across Clinical Domains.</h2>
          </div>
          <ul className="cs_career_jobs_list cs_mp_0">
            <li className="cs_career_job_card cs_gray6_bg cs_radius_20">
              <div className="cs_career_job_info">
                <h3 className="cs_career_job_title cs_fs_20 cs_bold cs_mb_12">Senior Staff Nurse (ICU)</h3>
                <ul className="cs_career_job_meta cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>159 Fulton Street Clarksburg, WV 21548</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                    <span>Full-time (Rotational shifts)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/graduation-cap.svg" alt="Education icon" />
                    <span>BSc Nursing + 2yrs exp</span>
                  </li>
                </ul>
              </div>
              <a href="#applicationForm" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color" aria-label="Apply for Senior Staff Nurse position">
              <span>Apply Now</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </a>
            </li>
            <li className="cs_career_job_card cs_gray6_bg cs_radius_20">
              <div className="cs_career_job_info">
                <h3 className="cs_career_job_title cs_fs_20 cs_bold cs_mb_12">Consultant Cardiologist</h3>
                <ul className="cs_career_job_meta cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Multi-specialty Bloc</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                    <span>Full-time / Visiting</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/graduation-cap.svg" alt="Education icon" />
                    <span>DM / DNB Cardiology</span>
                  </li>
                </ul>
              </div>
              <a href="#applicationForm" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color" aria-label="Apply for Consultant Cardiologist position">
              <span>Apply Now</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </a>
            </li>
            <li className="cs_career_job_card cs_gray6_bg cs_radius_20">
              <div className="cs_career_job_info">
                <h3 className="cs_career_job_title cs_fs_20 cs_bold cs_mb_12">Radiology Technician</h3>
                <ul className="cs_career_job_meta cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Diagnostic Centre</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                    <span>Night shift allowance</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/graduation-cap.svg" alt="Education icon" />
                    <span>Diploma in Medical Radiology</span>
                  </li>
                </ul>
              </div>
              <a href="#applicationForm" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color" aria-label="Apply for Radiology Technician position">
              <span>Apply Now</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </a>
            </li>
            <li className="cs_career_job_card cs_gray6_bg cs_radius_20">
              <div className="cs_career_job_info">
                <h3 className="cs_career_job_title cs_fs_20 cs_bold cs_mb_12">Patient Relations Executive</h3>
                <ul className="cs_career_job_meta cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Front Desk / OPD</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                    <span>9am-6pm (rotational week off)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/graduation-cap.svg" alt="Education icon" />
                    <span>Graduate + fluency in English</span>
                  </li>
                </ul>
              </div>
              <a href="#applicationForm" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color" aria-label="Apply for Patient Relations Executive position">
              <span>Apply Now</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </a>
            </li>
            <li className="cs_career_job_card cs_gray6_bg cs_radius_20">
              <div className="cs_career_job_info">
                <h3 className="cs_career_job_title cs_fs_20 cs_bold cs_mb_12">IT Support Specialist (Hospital Information System)</h3>
                <ul className="cs_career_job_meta cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Corporate Office</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/time-line.svg" alt="Time icon" />
                    <span>Full-time</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/graduation-cap.svg" alt="Education icon" />
                    <span>BSc CS / IT with 2+ years</span>
                  </li>
                </ul>
              </div>
              <a href="#applicationForm" className="cs_btn_style_2 cs_semibold cs_radius_5 cs_primary_color" aria-label="Apply for IT Support Specialist position">
              <span>Apply Now</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* End Current Openings Section */}
      {/* Start Career Benefits Section */}
      <section className="cs_career_benefits_section cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-5">
              <div className="cs_career_benefits_content">
                <h2 className="cs_career_benefits_title cs_fs_40 cs_semibold cs_mb_22">Why you'll love working here</h2>
                <ul className="cs_career_benefits_list cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Competitive salary + performance bonuses</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Comprehensive health &amp; dental coverage</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Continuous education &amp; conference sponsorships</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Free meals &amp; modern on-site accommodation</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Transport facility + child care support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_career_benefits_img cs_radius_20 cs_parallax">
                <img  src="/assets/img/about_img_8.webp" alt="Hospil medical team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Career Benefits Section */}
      {/* Start Career Application Section */}
      <section className="cs_career_application_section" id="applicationForm">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Submit Your Application</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Upload Your CV and Fill The Details. Our HR Team Will Reach Out Within 5-7 Working Days.</h2>
          </div>
          <form action="#" className="cs_appointment_form_1 cs_career_application_form row cs_gap_y_24">
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_fullname">Full Name</label>
                <input  type="text" name="fullname" id="career_fullname" className="cs_form_field" placeholder="Enter your name" autocomplete="off" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_email">Email Address</label>
                <input  type="email" name="email" id="career_email" className="cs_form_field" placeholder="Enter your email" autocomplete="off" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_phone">Phone Number</label>
                <input  type="text" name="phone" id="career_phone" className="cs_form_field" placeholder="Enter your phone number" autocomplete="off" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_position">Position</label>
                <select className="cs_form_field cs_choice" name="position" id="career_position">
                  <option selected disabled>Select your Position</option>
                  <option>Senior Staff Nurse (ICU)</option>
                  <option>Consultant Cardiologist</option>
                  <option>Radiology Technician</option>
                  <option>Patient Relations Executive</option>
                  <option>IT Support Specialist</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_experience">Years of Experience</label>
                <input  type="text" name="experience" id="career_experience" className="cs_form_field" placeholder="Enter your years of experience" autocomplete="off" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_organization">Current Organization (Optional)</label>
                <input  type="text" name="organization" id="career_organization" className="cs_form_field" placeholder="Enter your current organization" autocomplete="off" />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="career_cv" className="cs_career_upload">
              <input  type="file" name="cv" id="career_cv" accept=".pdf,.doc,.docx" className="cs_career_upload_input" />
              <img  src="/assets/img/icons/upload-cloud.svg" alt="Upload icon" />
              <span className="cs_career_upload_text">Click to upload CV (PDF/DOC)</span>
              </label>
            </div>
            <div className="col-12">
              <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                <label htmlFor="career_cover">Cover Letter / Why Hospil?</label>
                <textarea name="cover" rows="4" id="career_cover" className="cs_form_field" placeholder="Write your cover letter here..."></textarea>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" aria-label="Send application" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
              <span>Send Application</span>
              <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* End Career Application Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Career;
