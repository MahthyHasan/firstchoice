import React from 'react';
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
        <section className="cs_location_section_1" aria-label="First Choice location and visiting hours">
          <div className="container">
            <div className="row cs_gap_y_40 align-items-start">
              <div className="col-xl-5 col-lg-6">
                <div className="cs_location_info">
                  <h2 className="cs_location_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_20">Headquarters</h2>
                  <ul className="cs_location_contact_list cs_mb_48 cs_mb_lg_30 cs_mp_0">
                    <li>
                      <img src="/assets/img/icons/location-pin.svg" alt="Location icon" className="cs_location_contact_icon" />
                      <span className="cs_fs_20 cs_bold cs_primary_color">Office Address</span>
                      <p className="mb-0">P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar</p>
                    </li>
                    <li>
                      <img src="/assets/img/icons/phone.svg" alt="Phone icon" className="cs_location_contact_icon" />
                      <a href="tel:+97441402630" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_primary_color">+974 4140 2630</a> / <a href="tel:+97450002334" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_primary_color">+974 5000 2334</a>
                      <p className="mb-0">24/7 Home Healthcare & Nursing Support</p>
                    </li>
                    <li>
                      <img src="/assets/img/icons/emain.svg" alt="Email icon" className="cs_location_contact_icon" />
                      <a href="mailto:agentfcn@gmail.com" aria-label="Send mail" className="cs_fs_20 cs_bold cs_primary_color">agentfcn@gmail.com</a>
                      <p className="mb-0">Reply Within 2-4 Hours</p>
                    </li>
                  </ul>
                  <h2 className="cs_location_title cs_fs_40 cs_semibold cs_primary_color cs_mb_24 cs_mb_lg_20">Service Availability</h2>
                  <ul className="cs_visiting_hours_list cs_mp_0">
                    <li>
                      <span className="cs_visiting_label">Home Nursing Care</span>
                      <span className="cs_visiting_time">24/7 Continuous Support</span>
                    </li>
                    <li>
                      <span className="cs_visiting_label">Elderly & Senior Care</span>
                      <span className="cs_visiting_time">24 Hours Daily</span>
                    </li>
                    <li>
                      <span className="cs_visiting_label">Postnatal Confinement</span>
                      <span className="cs_visiting_time">24 Hours Daily</span>
                    </li>
                    <li>
                      <span className="cs_visiting_label">Physiotherapy Visits</span>
                      <span className="cs_visiting_time">8:00 AM&ndash;8:00 PM (Mon-Sat)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="cs_location_map cs_radius_20 cs_mb_24">
                  <iframe src="https://maps.google.com/maps?q=P.O.Box+15496,+Bldg+No.+76,+Office+No.+04,+C-Ring+Road,+Umm+Ghuwailina,+Doha,+Qatar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" title="First Choice Medical Services Qatar location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen style={{ width: '100%', height: '420px', border: 0 }}></iframe>
                </div>
                <div className="cs_ambulance_card cs_radius_20">
                  <div className="cs_ambulance_icon">
                    <img src="/assets/img/icons/alerm.svg" alt="Ambulance icon" />
                  </div>
                  <div className="cs_ambulance_text">
                    <h3 className="cs_ambulance_title cs_fs_24 cs_medium mb-0">24/7 Home Nursing Support</h3>
                    <p className="cs_fs_14 mb-0">Call for immediate care dispatch: <a href="tel:+97441402630" aria-label="Call First Choice Care">+974 4140 2630</a> / <a href="tel:+97450002334" aria-label="Call mobile">+974 5000 2334</a></p>
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
