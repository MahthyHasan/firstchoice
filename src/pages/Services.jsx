import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Services = () => {
  const categories = [
    {
      title: "1. Nursing Care Services",
      desc: "Comprehensive home nursing solutions tailored to short-term recovery and long-term illness management.",
      tags: ["Home Nursing", "24-Hour Care", "Post-Operative Support", "Medication Assistance"],
      img: "/assets/img/service_img_1.webp",
      link: "/services"
    },
    {
      title: "2. Elderly & Senior Care",
      desc: "Compassionate in-home care giving seniors individualized support with dignity and comfort.",
      tags: ["Residential Aged Care", "Daily Hygiene", "Mobility Assistance", "Vital Signs Monitoring"],
      img: "/assets/img/service_img_2.webp",
      link: "/service-details"
    },
    {
      title: "3. Infant & Mother Care",
      desc: "Specialized postnatal confinement home care assisting mothers with baby daily care and recuperation.",
      tags: ["Confinement Home Care", "Mother & Baby Care", "Confinement Meals", "Housekeeping Support"],
      img: "/assets/img/service_img_6.webp",
      link: "/patient-resource"
    },
    {
      title: "4. Physiotherapy Services",
      desc: "In-home physical therapy and rehabilitation programs helping patients rebuild strength and mobility.",
      tags: ["Home Rehabilitation", "Stroke Recovery", "Joint Mobility", "Patient Support"],
      img: "/assets/img/service_img_8.webp",
      link: "/facilities"
    }
  ];

  const nursingServices = [
    "Home nursing care",
    "24-hour nursing care",
    "Elderly and senior care",
    "Post-operative nursing care",
    "Chronic disease care and monitoring",
    "Medication assistance",
    "Wound and dressing care",
    "Vital signs monitoring",
    "Personal hygiene and daily care",
    "Mobility and patient support",
    "Hospital-to-home nursing care",
    "Palliative and comfort care"
  ];

  return (
    <>
      <main>
        <PageHeader title="Home Healthcare Services" breadcrumb={[{ label: 'Services' }]} />

        {/* Start Main Services Categories */}
        <section className="cs_services_section py-5" aria-label="Our Services">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_type_3 cs_center_column mx-auto text-center cs_mb_48">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 text-uppercase">// First Choice Services</p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                Professional Home Healthcare Delivered With Compassion Across Qatar
              </h2>
            </div>

            <div className="row cs_gap_y_24 cs_mb_48 justify-content-center">
              {categories.map((cat, idx) => (
                <div key={idx} className="col-xl-6 col-md-6 mb-4">
                  <div className="cs_service_card_4 cs_gray2_bg cs_radius_20 h-100 p-4 shadow-sm">
                    <div className="cs_card_body">
                      <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_20">
                        <Link to={cat.link}>{cat.title}</Link>
                      </h3>
                      <p className="cs_card_desc cs_mb_24 text-secondary">{cat.desc}</p>
                      <ul className="cs_card_tags cs_mp_0 cs_mb_30 d-flex flex-wrap gap-2">
                        {cat.tags.map((tag, tIdx) => (
                          <li key={tIdx} className="badge bg-light text-dark border px-3 py-2">{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to={cat.link} className="cs_card_img cs_radius_15 d-block overflow-hidden position-relative" style={{ maxHeight: '240px' }}>
                      <img src={cat.img} alt={cat.title} className="w-100 h-100 object-fit-cover" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Nursing Services Grid */}
        <section className="cs_detailed_nursing_section py-5 cs_gray4_bg">
          <div className="container">
            <div className="cs_section_heading_style_1 text-center cs_mb_48">
              <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_radius_5 d-inline-block">
                // Comprehensive Nursing Support
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Detailed Nursing Services List</h2>
            </div>
            <div className="row cs_gap_y_20">
              {nursingServices.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="p-3 bg-white cs_radius_10 border d-flex align-items-center gap-3 shadow-sm h-100">
                    <div className="cs_accent_bg text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                      ✓
                    </div>
                    <span className="cs_fs_16 cs_medium cs_primary_color">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Postnatal Feature Section */}
        <section className="cs_postnatal_service_section py-5">
          <div className="container">
            <div className="p-5 cs_primary_bg text-white cs_radius_20 position-relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h2 className="cs_fs_40 cs_bold cs_white_color mb-3">Postnatal Confinement Home Care Service</h2>
                  <p className="cs_fs_18 cs_white_color text-opacity-90 mb-4">
                    First Choice provides a specialized and skilled postnatal home care team to assist with the daily care of the mother, baby, and family during the confinement period. The confinement period is a crucial time of recuperation after pregnancy and labor. During this time, we help the mother with the baby, cook confinement meals, and assist with housekeeping.
                  </p>
                  <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span>Book Postnatal Service</span>
                    <span><i className="fa-solid fa-arrow-right ms-2"></i></span>
                  </Link>
                </div>
                <div className="col-lg-4 text-center mt-4 mt-lg-0">
                  <div className="display-1 text-success opacity-50"><i className="fa-solid fa-baby"></i></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
