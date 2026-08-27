import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Doctors = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <PageHeader title="Our Medical Specialists" breadcrumb={[{ label: 'Doctors' }]} />
      {/* End Page Header */}
      {/* Start Doctors Section */}
      <section className="cs_team_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Find a Doctor</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Navigate Your Healthcare Journey With Confidence <br  /> Using Our Curated Resources.</h2>
          </div>
          <form action="#" className="cs_doctor_filter cs_gray3_bg cs_radius_5 cs_mb_24">
            <div className="row cs_gap_y_16 align-items-end">
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-department">Department</label>
                  <div className="cs_white_bg cs_radius_5">
                    <select className="cs_form_field cs_choice" id="filter-department" name="department">
                      <option selected disabled>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Ophthalmology</option>
                      <option>Oncology</option>
                      <option>Pediatrics</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-name">Search Name</label>
                  <div className="cs_white_bg cs_radius_5 position-relative">                  
                    <input  type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by doctor's name" autocomplete="off" />
                    <img  src="/assets/img/icons/search.svg" alt="Search icon" className="cs_search_icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <button type="submit" aria-label="Find a doctor" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                <img  src="/assets/img/icons/stethoscope.svg" alt="Stethescope icon" />
                <span>Find a Doctor</span>
                </button>
              </div>
            </div>
          </form>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_8.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Philip Johnson</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Cornea & Refractive Surgeon</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_6.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Lori Fletcher</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Pediatric Ophthalmology</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_5.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Gregory Bynum</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Retina & Macula Specialist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_7.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Aline Briscoe</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">Glaucoma & MIGS Expert</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_13.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Nedra Jones</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MD, FACC (Cardiology)</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_14.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. David Rosado</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MBBS, MS, MCh (Neuro)</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_15.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Jacquelyn Elliston</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MS Orthopedics, DNB</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_16.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Larry Harrison</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MD (Oncology), FRCP</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_17.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Samuel Hollon</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MBBS, DGO, MRCOG</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_18.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Elizabeth Harris</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">DM Cardiology</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_19.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Derrick Moore</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">MCh (Neurosurgery)</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                <div className="cs_team_img">
                  <img  src="/assets/img/team_img_20.webp" alt="Doctor image" />
                </div>
                <div className="cs_team_info text-center">
                  <Link  to="/appointment" aria-label="Book an appointment" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Appointment</span>
                  </Link>
                  <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                    <Link  to="/doctor-details" aria-label="View doctor details">Dr. Catherine Garcia</Link>
                  </h3>
                  <p className="cs_team_subtitle cs_white_color mb-0">DNB Ortho, FICS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_center cs_mt_40">
            <button type="button" className="cs_btn_style_2 cs_type_1 cs_primary_color cs_semibold cs_radius_5 loadMore">
            <span>Load More</span>
            <img  src="/assets/img/icons/loader-line.svg" alt="Loader icon" />
            </button>
          </div>
        </div>
      </section>
      {/* End Doctors Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Doctors;
