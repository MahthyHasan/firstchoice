import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const ServiceDetails = () => {
  return (
    <>
      <main>
        {/* Start Page Header */}
        <PageHeader title="Home Nursing & Elderly Care Details" breadcrumb={[{ label: 'Services', url: '/services' }, { label: 'Service Details' }]} />
        {/* End Page Header */}

        {/* Start Service Details Section */}
        <section className="cs_service_details_section py-5">
          <div className="container">
            <div className="row cs_gap_y_40">
              <div className="col-lg-8">
                <div className="cs_service_details">
                  <div className="cs_service_details_block cs_mb_24">
                    <h2 className="cs_fs_40 cs_semibold cs_mb_24">Home Nursing & Elderly Care Services</h2>
                    <p className="cs_service_details_lead mb-0 lead text-secondary">
                      First Choice Medical Services provides high-end home care services to private clientele, companies, and clinics across Qatar. Our caretakers are experienced, certified, and professional.
                    </p>
                  </div>
                  <div className="cs_service_banner cs_radius_15 cs_mb_48 overflow-hidden">
                    <img src="/assets/img/service_details_img_1.webp" alt="Home Nursing and Elderly Care" className="w-100" />
                  </div>
                  <div className="cs_service_details_block cs_mb_48">
                    <h3 className="cs_fs_32 cs_semibold cs_mb_24">Comprehensive Overview</h3>
                    <p className="mb-3">
                      We have a large, equipped workforce providing in-home care, residential aged care, and disability care across Qatar. We provide experienced and qualified disability support workers. All staff are directly employed by us — not by sub-contractors or independent contractors.
                    </p>
                    <p className="mb-0">
                      We have a strict recruitment and pre-employment training process; only applicants demonstrating significant experience and competence are taken on board.
                    </p>
                  </div>

                  <div className="cs_service_details_block cs_mb_48">
                    <h3 className="cs_service_block_heading cs_fs_32 cs_semibold cs_mb_32">Detailed Services Included</h3>
                    <ul className="cs_conditions_list cs_mp_0 row cs_gap_y_20">
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">Home Nursing Care</h4>
                          <p className="cs_condition_desc mb-0">Professional home nursing care for post-hospitalization recovery, wound care, and medication management.</p>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">24-Hour Continuous Nursing</h4>
                          <p className="cs_condition_desc mb-0">Round-the-clock shift-based nursing for patients requiring continuous medical oversight.</p>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">Elderly & Senior Care</h4>
                          <p className="cs_condition_desc mb-0">Compassionate support with personal hygiene, daily activities, mobility assistance, and companionship.</p>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">Post-Operative Care</h4>
                          <p className="cs_condition_desc mb-0">Post-surgical incision care, drain monitoring, pain management, and physical rehabilitation support.</p>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">Chronic Disease Monitoring</h4>
                          <p className="cs_condition_desc mb-0">Ongoing monitoring for diabetes, hypertension, cardiac conditions, and respiratory management.</p>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <div className="p-3 cs_gray2_bg cs_radius_10 border h-100">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_12 text-success">Palliative & Comfort Care</h4>
                          <p className="cs_condition_desc mb-0">Dignified comfort care focused on pain relief, symptom management, and family emotional support.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="cs_service_details_block p-4 cs_accent_bg text-white cs_radius_20">
                    <h3 className="cs_fs_24 cs_bold cs_white_color mb-2">Why Families Trust First Choice</h3>
                    <p className="cs_white_color text-opacity-90 mb-0">
                      We believe every patient deserves individual attention and quality care. Our goal is to provide dependable nursing support while giving patients and their families confidence and peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="cs_sidebar_style_1">
                  <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20 p-4 mb-4 shadow-sm">
                    <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_22">Service Categories</h3>
                    <ul className="cs_service_category_list cs_mp_0 list-unstyled">
                      <li className="mb-2"><Link to="/services" className="text-dark fw-medium">1. Nursing Care Services</Link></li>
                      <li className="mb-2"><Link to="/service-details" className="text-success fw-bold">2. Elderly Care Services</Link></li>
                      <li className="mb-2"><Link to="/patient-resource" className="text-dark fw-medium">3. Infant & Mother Care</Link></li>
                      <li className="mb-2"><Link to="/facilities" className="text-dark fw-medium">4. Physiotherapy Services</Link></li>
                      <li className="mb-2"><Link to="/packages" className="text-dark fw-medium">5. Postnatal Confinement Care</Link></li>
                    </ul>
                  </div>

                  <div className="cs_sidebar_widget cs_primary_bg text-white cs_radius_20 p-4 shadow-sm">
                    <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_22">Direct Contact (Qatar)</h3>
                    <p className="cs_fs_14 text-white-50 mb-3">Reach out to our Doha care coordinators for immediate scheduling:</p>
                    <p className="mb-2"><i className="fa-solid fa-phone text-success me-2"></i><a href="tel:+97441402630" className="text-white fw-bold">+974 4140 2630</a></p>
                    <p className="mb-2"><i className="fa-solid fa-mobile-screen text-success me-2"></i><a href="tel:+97450002334" className="text-white fw-bold">+974 5000 2334</a></p>
                    <p className="mb-3"><i className="fa-solid fa-envelope text-success me-2"></i><a href="mailto:agentfcn@gmail.com" className="text-white">agentfcn@gmail.com</a></p>
                    <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 w-100 justify-content-center">
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetails;
