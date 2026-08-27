import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Location = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <PageHeader title="Our Location" breadcrumb={[{ label: 'Location' }]} />
      {/* End Page Header */}
      {/* Start Location Info Section */}
      <section className="cs_location_section_1" aria-label="Hospil location and visiting hours">
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start">
            <div className="col-xl-5 col-lg-6">
              <div className="cs_location_info">
                <h2 className="cs_location_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_20">Main Campus</h2>
                <ul className="cs_location_contact_list cs_mb_48 cs_mb_lg_30 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" className="cs_location_contact_icon" />
                    <span className="cs_fs_20 cs_bold cs_primary_color">Hospital Address</span>
                    <p className="mb-0">58 Blue Spruce Lane Baltimore, MD 2321</p>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/phone.svg" alt="Phone icon" className="cs_location_contact_icon" />
                    <a href="tel:+14448281507" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_primary_color">+1 444 828 1507</a>
                    <p className="mb-0">24/7 Emergency (Critical care ambulance ready)</p>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/emain.svg" alt="Email icon" className="cs_location_contact_icon" />
                    <a href="mailto:info@hospil.com" aria-label="Send mail" className="cs_fs_20 cs_bold cs_primary_color">example@hospil.com</a>
                    <p className="mb-0">Reply Within 2-4 Hours</p>
                  </li>
                </ul>
                <h2 className="cs_location_title cs_fs_40 cs_semibold cs_primary_color cs_mb_24 cs_mb_lg_20">Visiting Hours</h2>
                <ul className="cs_visiting_hours_list cs_mp_0">
                  <li>
                    <span className="cs_visiting_label">General Wards</span>
                    <span className="cs_visiting_time">4:00 PM&ndash;7:00 PM (Daily)</span>
                  </li>
                  <li>
                    <span className="cs_visiting_label">ICU / CCU5</span>
                    <span className="cs_visiting_time">5:00 PM&ndash; 6:00 PM (Strict Timings)</span>
                  </li>
                  <li>
                    <span className="cs_visiting_label">NICU / Maternity</span>
                    <span className="cs_visiting_time">5:30 PM&ndash;6:30 PM</span>
                  </li>
                  <li>
                    <span className="cs_visiting_label">Emergency &amp; Trauma</span>
                    <span className="cs_visiting_time">24/7 Open&ndash;No visitor restrictions</span>
                  </li>
                  <li>
                    <span className="cs_visiting_label">OPD Consultation</span>
                    <span className="cs_visiting_time">9:00 AM&ndash;8:00 PM (Mon-Sat)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="cs_location_map cs_radius_20 cs_mb_24">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.0!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE3JzI1LjQiTiA3NsKwMzYnNDQuMCJX!5e0!3m2!1sen!2sus!4v1700000000000" title="Hospil Main Campus location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
              </div>
              <div className="cs_ambulance_card cs_radius_20">
                <div className="cs_ambulance_icon">
                  <img  src="/assets/img/icons/alerm.svg" alt="Ambulance icon" />
                </div>
                <div className="cs_ambulance_text">
                  <h3 className="cs_ambulance_title cs_fs_24 cs_medium mb-0">24/7 Ambulance Service</h3>
                  <p className="cs_fs_14 mb-0">Call for emergency pickup: <a href="tel:+11000000000" aria-label="Call ambulance">+1 1XXX-XXXXXX</a> / <a href="tel:10678" aria-label="Call ambulance short number">10678</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Location Info Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Location;
