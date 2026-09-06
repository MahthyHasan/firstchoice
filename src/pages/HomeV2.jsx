import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeV2 = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const homeServices = [
    {
      title: "1. Nursing Care Services",
      desc: "Home nursing care, 24-hour nursing, post-operative care, chronic disease monitoring, medication assistance, wound dressing, vital signs monitoring, personal hygiene, and mobility support.",
      icon: "/assets/img/icons/cardiology2.svg",
      img: "/assets/img/servicesBanner/NursingCare.png",
      alt: "Home Nursing Care",
      link: "/services"
    },
    {
      title: "2. Elderly Care",
      desc: "Elderly and senior care, residential aged care, daily assistance, personal hygiene, mobility support, and palliative comfort care at home.",
      icon: "/assets/img/icons/neurology.svg",
      img: "/assets/img/servicesBanner/ElderlyCarebanner.png",
      alt: "Elderly Care",
      link: "/service-details"
    },
    {
      title: "3. Infant & Mother Care",
      desc: "Postnatal confinement home care service, daily care of mother & baby, confinement meals, and light housekeeping support during recuperation.",
      icon: "/assets/img/icons/child.svg",
      img: "/assets/img/servicesBanner/InfantMotherCare.png",
      alt: "Infant and Mother Care",
      link: "/patient-resource"
    },
    {
      title: "4. Physiotherapy Services",
      desc: "In-home physical therapy, mobility rehabilitation, stroke recovery support, and individualized exercise plans for home-bound patients.",
      icon: "/assets/img/icons/orthopedics.svg",
      img: "/assets/img/servicesBanner/PhysiotherapyServices.png",
      alt: "Physiotherapy Services",
      link: "/facilities"
    }
  ];
  return (
    <>
      {/* Start Main Content */}
      <main>
        {/* Start Hero Section */}
        <section className="cs_hero_style_2 cs_primary_bg">
          <div className="container-fluid position-relative">
            <div className="cs_hero_content position-relative z-1">
              <div className="cs_hero_text">
                <p className="cs_hero_subtitle cs_fs_14 cs_accent_color cs_mb_12">
                  // First Choice Medical Services | الاختيار الاول للنخدمات الطبية
                </p>
                <h1 className="cs_hero_title cs_fs_75 cs_white_color cs_bold cs_mb_24">
                  We Take Care Of You Always
                </h1>
                <p className="cs_hero_desc cs_fs_18 cs_mb_48 cs_mb_lg_30 cs_white_color text-opacity-75">
                  Professional home healthcare services — Nursing, Elderly Care, Postnatal Care, and Physiotherapy — delivered with compassion across Qatar.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span><i className="fa-solid fa-calendar-check me-2"></i></span>
                    <span>Book an Appointment</span>
                  </Link>
                  <Link to="/services" className="cs_btn_style_1 cs_white_bg cs_primary_color cs_radius_5">
                    <span>Our Services</span>
                  </Link>
                </div>
              </div>
              <div className="cs_hero_img_wrapper overflow-hidden position-relative">
                <div className="cs_hero_img_1 cs_radius_20">
                  <img src="/assets/img/hero_img_1.jpg" alt="First Choice Healthcare Nursing Team" />
                </div>
                <div className="cs_hero_img_2 position-absolute">
                  <img src="/assets/img/hero_img_2.webp" alt="In-home Patient Care" />
                </div>
                <div className="cs_visiting_info cs_accent_bg text-white">
                  <h2 className="cs_visitint_title cs_fs_20 cs_semibold mb-0 cs_white_color">24/7 Home Care Available:</h2>
                  <p className="cs_visiting_time mb-0 cs_white_color text-opacity-90">Serving All Areas in Doha & Qatar</p>
                </div>
              </div>
            </div>
            <div className="cs_hero_shape_1 position-absolute">
              <img src="/assets/img/hero_shape_1.svg" alt="Hero shape" />
            </div>
            <div className="cs_hero_shape_2 position-absolute">
              <img src="/assets/img/hero_shape_2.svg" alt="Hero shape" />
            </div>
            <div className="cs_hero_shape_3 position-absolute">
              <img src="/assets/img/hero_shape_3.svg" alt="Hero shape" />
            </div>
          </div>
        </section>
        {/* End Hero Section */}

        {/* Start Feature Grid Section */}
        <section className="cs_feature_section_2">
          <div className="container-fluid">
            <div className="cs_feature_grid_2">
              <div className="cs_feature_card_2 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img src="/assets/img/icons/doctor.svg" alt="Nursing Care Icon" />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Home Nursing Care</h2>
                </div>
                <p className="cs_feature_desc cs_mb_24">
                  24-hour nursing care, post-operative support, medication assistance, wound dressing, and chronic disease monitoring.
                </p>
                <div className="cs_feature_img">
                  <img src="/assets/img/feature_img_1.webp" alt="Nursing Care" />
                </div>
              </div>
              <div className="cs_feature_card_2 cs_radius_20 cs_color_2 cs_bg_filed" data-src="/assets/img/feature_img_3.webp">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img src="/assets/img/icons/emergency-call.svg" alt="Elderly Care Icon" />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Elderly & Senior Care</h2>
                </div>
                <p className="cs_feature_desc cs_mb_24">
                  Compassionate in-home care and residential aged care helping seniors live safely and comfortably at home.
                </p>
                <div className="cs_funfact_style_1 cs_mb_48 cs_mb_lg_36">
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                      <span>500+</span>
                    </div>
                    <div className="cs_funfact_title">Patients Served</div>
                  </div>
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                      <span>10+</span>
                    </div>
                    <div className="cs_funfact_title">Years Experience</div>
                  </div>
                </div>
                <Link to="/about-us" aria-label="About First Choice" className="cs_btn_style_1 cs_gray5_bg cs_primary_color cs_semibold cs_radius_5">
                  <span>Learn About Us</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
              <div className="cs_feature_card_2 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img src="/assets/img/icons/child.svg" alt="Postnatal Confinement Care Icon" />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Postnatal Confinement Care</h2>
                </div>
                <p className="cs_feature_desc cs_mb_24">
                  Specialized postnatal home care for mother and baby, assisting with daily baby care, confinement meals, and housekeeping.
                </p>
                <div className="cs_feature_img">
                  <img src="/assets/img/feature_img_2.webp" alt="Postnatal Confinement Care" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Feature Grid Section */}

        {/* Start About Section (Who We Are) */}
        <section className="cs_about_style_2 position-relative pb-0">
          <div className="container">
            <div className="cs_section_heading_style_2 cs_mb_48 cs_mb_lg_40">
              <div className="cs_section_heading_left">
                <p className="cs_section_subtitle cs_gray3_bg cs_radius_5 cs_accent_color cs_fs_14 mb-0">
                  // Experienced & Professional Caretakers
                </p>
              </div>
              <div className="cs_section_heading_right">
                <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                  First Choice Medical Services Provides High-End Home Care Across Qatar.
                </h2>
              </div>
            </div>
            <div className="row cs_gap_y_30">
              <div className="col-xl-5 col-lg-6">
                <div className="cs_about_img cs_radius_20 cs_parallax position-relative">
                  <img src="/assets/img/about_img_2.webp" alt="First Choice Medical Nurses" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="cs_about_content">
                  <div className="cs_about_text cs_mb_48 cs_mb_lg_30">
                    <p className="cs_about_desc cs_mb_22">
                      First Choice Medical Services provides high-end home care services to private clientele, companies, and clinics across Qatar. Our caretakers are experienced and professional. We have a large, equipped workforce providing in-home care, residential aged care, and disability care. We provide experienced and qualified disability support workers.
                    </p>
                    <ul className="cs_about_features_list cs_mp_0">
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Directly employed staff (No sub-contractors)</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Strict pre-employment recruitment & training</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>24/7 Round-the-clock home nursing</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Elderly care & residential aged care</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Postnatal confinement home care team</span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Qualified disability support workers</span>
                      </li>
                    </ul>
                    <Link to="/about-us" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                      <span>Read Our Full Story</span>
                      <span><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                  <div className="cs_about_testimonial_wrap">
                    <div className="cs_testimonial cs_gray2_bg cs_radius_20 position-relative">
                      <blockquote>
                        “We believe every patient deserves individual attention and quality care. Our goal is to provide dependable nursing support while giving patients and their families confidence and peace of mind.”
                      </blockquote>
                      <p className="cs_fs_20 cs_semibold cs_primary_color mb-0">
                        — First Choice Medical Services, <small>Doha, Qatar</small>
                      </p>
                      <img src="/assets/img/icons/quote.svg" alt="Quote icon" className="cs_quote_icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_about_shape_1 position-absolute">
            <img src="/assets/img/about_shape_1.svg" alt="About shape" />
          </div>
        </section>
        {/* End About Section */}

        {/* Start Ticker Strip */}
        <div className="cs_ticker_2 position-relative my-5">
          <div className="container-fluid overflow-hidden">
            <div className="cs_ticker_bg position-absolute">
              <img src="/assets/img/line_wave.svg" alt="Bg shape" />
            </div>
            <div className="cs_ticker_in">
              <div className="cs_ticker_content cs_ticker_items_list">
                <div className="cs_ticker_item cs_fs_60 cs_bold cs_white_color">
                  <span>First Choice Medical Services</span>
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                </div>
                <div className="cs_ticker_item cs_fs_60 cs_bold cs_white_color">
                  <span>Caring for You, Every Step of the Way</span>
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                </div>
                <div className="cs_ticker_item cs_fs_60 cs_bold cs_white_color">
                  <span>We Take Care Of You Always</span>
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Ticker Strip */}

        {/* Start Services List Section */}
        <section className="cs_service_section_2 position-relative z-1 py-5 my-4">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_type_1 cs_center_column cs_mb_48 text-center">
              <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5">
                // Our Specialized Home Healthcare Services
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                Delivering High-Quality Home Nursing & Care Services Across Qatar.
              </h2>
            </div>
            <div className="cs_service_grid_1">
              {homeServices.map((service, index) => (
                <div
                  key={index}
                  className={`cs_service_card_2 cs_gray2_bg cs_radius_20 ${activeServiceIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                >
                  <div className="cs_service_left">
                    <div className="cs_service_icon cs_center">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="cs_service_text">
                      <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">{service.title}</h3>
                      <div className="cs_short_desc">{service.desc}</div>
                      <div className="cs_btn_wrap">
                        <Link to={service.link} className="cs_btn_style_2 cs_radius_5">
                          <span>Learn More</span>
                          <img src="/assets/img/icons/arrow2-right.svg" alt="Arrow icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="cs_service_img cs_radius_20">
                    <img src={service.img} alt={service.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Services List Section */}

        {/* Start Special Feature Highlight: Postnatal Confinement Home Care */}
        <section className="cs_postnatal_highlight py-5 my-5 cs_gray4_bg cs_radius_20">
          <div className="container">
            <div className="row align-items-center cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_radius_20 overflow-hidden shadow-sm">
                  <img src="/assets/img/appointment_img_4.png" alt="Postnatal Confinement Care Team" className="w-100" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps_lg_4">
                  <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5 d-inline-block">
                    // Specialized Postnatal Support
                  </p>
                  <h2 className="cs_fs_40 cs_bold cs_mb_24">Postnatal Confinement Home Care Service</h2>
                  <p className="cs_fs_18 cs_mb_24">
                    First Choice provides a specialized and skilled postnatal home care team to assist with the daily care of the mother, baby, and family during the confinement period.
                  </p>
                  <p className="cs_fs_16 cs_mb_32 text-secondary">
                    The confinement period is a crucial time of recuperation after pregnancy and labor. During this time, we help the mother with the baby, cook confinement meals, and assist with housekeeping so the mother can rest and recover in full comfort.
                  </p>
                  <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span>Book Postnatal Care</span>
                    <span><i className="fa-solid fa-arrow-right ms-2"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Special Feature Highlight */}

        {/* Start Why Choose Us Section */}
        <section className="cs_whychoose_section_2 cs_gray2_bg cs_radius_20 py-5 my-5">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_type_1 cs_center_column cs_mb_48 text-center">
              <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5 text-uppercase">
                // Why Choose First Choice Medical Services
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                Dependable Nursing Support Giving Patients and Families Total Confidence & Peace of Mind.
              </h2>
            </div>
            <div className="row cs_gap_y_30 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="cs_faq_img cs_radius_20 cs_parallax position-relative">
                  <img src="/assets/img/whychoose_img_1.webp" alt="Why Choose First Choice" />
                  <div className="cs_faq_badge cs_accent_bg cs_white_color cs_radius_50">
                    <div className="cs_circular_text cs_center">
                      <img src="/assets/img/circular_text.svg" alt="Circular Text" />
                    </div>
                    <a href="tel:+97441402630" className="cs_call_btn cs_center cs_white_bg cs_radius_50">
                      <img src="/assets/img/icons/phone3.svg" alt="Phone icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_accordians_style_1">
                  <div className="cs_accordian active">
                    <div className="cs_accordian_head cs_fs_24 cs_medium cs_primary_color">
                      <span className="cs_accordian_icon cs_center">
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      </span>
                      <span>100% Direct Employment Guarantee</span>
                    </div>
                    <div className="cs_accordian_body">
                      All staff are directly employed by First Choice — never sub-contractors or independent contractors. This ensures consistent quality, accountability, and reliability.
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head cs_fs_24 cs_medium cs_primary_color">
                      <span className="cs_accordian_icon cs_center">
                        <img src="/assets/img/icons/medical-team.svg" alt="Recruitment icon" />
                      </span>
                      <span>Strict Recruitment & Training</span>
                    </div>
                    <div className="cs_accordian_body">
                      We enforce a strict recruitment and pre-employment training process; only applicants demonstrating significant experience, competence, and compassion are taken on board.
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head cs_fs_24 cs_medium cs_primary_color">
                      <span className="cs_accordian_icon cs_center">
                        <img src="/assets/img/icons/clock.svg" alt="Clock icon" />
                      </span>
                      <span>Individualized Patient Attention</span>
                    </div>
                    <div className="cs_accordian_body">
                      We believe every patient deserves individual attention and quality care tailored to their specific medical condition and comfort preferences.
                    </div>
                  </div>
                  <div className="cs_accordian">
                    <div className="cs_accordian_head cs_fs_24 cs_medium cs_primary_color">
                      <span className="cs_accordian_icon cs_center">
                        <img src="/assets/img/icons/transport.svg" alt="Support icon" />
                      </span>
                      <span>Serving Clients Across Qatar</span>
                    </div>
                    <div className="cs_accordian_body">
                      Providing in-home nursing care to private clientele, companies, and clinics across Doha and all regions in Qatar.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_hospil_facilities mt-5">
              <div className="cs_facility_item">
                <span className="cs_facility_title cs_bold cs_fs_20">500+</span>
                <span className="cs_facility_title">Patients Served</span>
              </div>
              <div className="cs_facility_item">
                <span className="cs_facility_title cs_bold cs_fs_20">10+</span>
                <span className="cs_facility_title">Years Experience</span>
              </div>
              <div className="cs_facility_item">
                <span className="cs_facility_title cs_bold cs_fs_20">24/7</span>
                <span className="cs_facility_title">Care Available</span>
              </div>
              <div className="cs_facility_item">
                <span className="cs_facility_title cs_bold cs_fs_20">100%</span>
                <span className="cs_facility_title">Direct Employees</span>
              </div>
            </div>
          </div>
        </section>
        {/* End Why Choose Us Section */}

        {/* Start Testimonials Section */}
        <section className="cs_testimonial_section_2 py-5 slider-section">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">
                // Client Testimonials
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
                What Families in Qatar Say About First Choice Medical Services
              </h2>
            </div>
            <div className="row cs_gap_y_30">
              <div className="col-lg-4">
                <div className="cs_testimonial_style_2 cs_white_bg cs_radius_20 p-4 shadow-sm h-100">
                  <div className="cs_testimonial_desc mb-3">
                    <div className="text-warning mb-2">★★★★★</div>
                    <blockquote className="cs_fs_16">
                      “First Choice gave my mother the best care at home. Truly professional and compassionate staff.”
                    </blockquote>
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_18 cs_bold mb-0">Ahmed Al-Mansoori</h3>
                    <p className="cs_author_designation mb-0 text-muted cs_fs_14">Doha, Qatar</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_testimonial_style_2 cs_white_bg cs_radius_20 p-4 shadow-sm h-100">
                  <div className="cs_testimonial_desc mb-3">
                    <div className="text-warning mb-2">★★★★★</div>
                    <blockquote className="cs_fs_16">
                      “The nurses are so kind and skilled. Highly recommended for elderly care.”
                    </blockquote>
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_18 cs_bold mb-0">Sarah K.</h3>
                    <p className="cs_author_designation mb-0 text-muted cs_fs_14">Doha, Qatar</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_testimonial_style_2 cs_white_bg cs_radius_20 p-4 shadow-sm h-100">
                  <div className="cs_testimonial_desc mb-3">
                    <div className="text-warning mb-2">★★★★★</div>
                    <blockquote className="cs_fs_16">
                      “Booking was easy and the postnatal care team was incredible.”
                    </blockquote>
                  </div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_18 cs_bold mb-0">Fatima Hassan</h3>
                    <p className="cs_author_designation mb-0 text-muted cs_fs_14">Al Rayyan, Qatar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}

        {/* Start FAQ Section */}
        <section className="cs_faq_section py-5 cs_gray4_bg">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
              <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_mb_12 cs_radius_5">
                // Frequently Asked Questions
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                Got Questions? We Have Answers.
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="accordion" id="firstChoiceFaq">
                  <div className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header" id="faqHeading1">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1">
                        Q: What areas in Qatar do you serve?
                      </button>
                    </h3>
                    <div id="faqCollapse1" className="accordion-collapse collapse show" data-bs-parent="#firstChoiceFaq">
                      <div className="accordion-body">
                        A: We serve clients across Qatar, including Doha and surrounding areas.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header" id="faqHeading2">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2">
                        Q: Are your nurses directly employed?
                      </button>
                    </h3>
                    <div id="faqCollapse2" className="accordion-collapse collapse" data-bs-parent="#firstChoiceFaq">
                      <div className="accordion-body">
                        A: Yes. All staff are directly employed by First Choice — no sub-contractors.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header" id="faqHeading3">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3">
                        Q: Do you offer 24-hour care?
                      </button>
                    </h3>
                    <div id="faqCollapse3" className="accordion-collapse collapse" data-bs-parent="#firstChoiceFaq">
                      <div className="accordion-body">
                        A: Yes. We provide round-the-clock nursing care for patients who need it.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header" id="faqHeading4">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4">
                        Q: How do I book an appointment?
                      </button>
                    </h3>
                    <div id="faqCollapse4" className="accordion-collapse collapse" data-bs-parent="#firstChoiceFaq">
                      <div className="accordion-body">
                        A: Call us at +974 4140 2630, email agentfcn@gmail.com, or use the booking form on this website.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header" id="faqHeading5">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5">
                        Q: What services do you offer?
                      </button>
                    </h3>
                    <div id="faqCollapse5" className="accordion-collapse collapse" data-bs-parent="#firstChoiceFaq">
                      <div className="accordion-body">
                        A: We offer home nursing care, elderly care, postnatal confinement care, infant and mother care, and physiotherapy services.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End FAQ Section */}

        {/* Start Contact Section */}
        <section className="cs_contact_section py-5">
          <div className="container">
            <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
              <h2 className="cs_section_title cs_fs_40 cs_bold mb-2">Get In Touch</h2>
              <p className="cs_fs_18 text-muted mb-0">Your health is our priority. Reach out to us anytime.</p>
            </div>
            <div className="row cs_gap_y_30 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="p-4 cs_gray2_bg cs_radius_15 text-center h-100 shadow-sm">
                  <div className="cs_fs_30 text-success mb-3"><i className="fa-solid fa-phone"></i></div>
                  <h3 className="cs_fs_20 cs_semibold mb-2">Phone</h3>
                  <p className="mb-1"><a href="tel:+97441402630" className="text-dark fw-bold">+974 4140 2630</a></p>
                  <p className="mb-0"><a href="tel:+97450002334" className="text-dark fw-bold">+974 5000 2334</a></p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="p-4 cs_gray2_bg cs_radius_15 text-center h-100 shadow-sm">
                  <div className="cs_fs_30 text-success mb-3"><i className="fa-solid fa-envelope"></i></div>
                  <h3 className="cs_fs_20 cs_semibold mb-2">Email</h3>
                  <p className="mb-0"><a href="mailto:agentfcn@gmail.com" className="text-dark fw-bold">agentfcn@gmail.com</a></p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="p-4 cs_gray2_bg cs_radius_15 text-center h-100 shadow-sm">
                  <div className="cs_fs_30 text-success mb-3"><i className="fa-solid fa-globe"></i></div>
                  <h3 className="cs_fs_20 cs_semibold mb-2">Website</h3>
                  <p className="mb-0"><a href="https://www.ngtgroup-qa.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold">www.ngtgroup-qa.com</a></p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="p-4 cs_gray2_bg cs_radius_15 text-center h-100 shadow-sm">
                  <div className="cs_fs_30 text-success mb-3"><i className="fa-solid fa-location-dot"></i></div>
                  <h3 className="cs_fs_20 cs_semibold mb-2">Address</h3>
                  <p className="mb-0 cs_fs_14 text-dark">
                    P.O.Box 15496, Bldg No. 76, Office No. 04, C-Ring Road, Umm Ghuwailina, Doha – State of Qatar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
    </>
  );
};

export default HomeV2;
