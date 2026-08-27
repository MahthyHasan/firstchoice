import React from 'react';
import { Link } from 'react-router-dom';

const PatientResource = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Patient Resource</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Patient Resource</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Essential Tools & Guides Section */}
      <section className="cs_resource_section_1" aria-label="Essential tools and guides">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48 cs_mb_lg_40 mx-auto">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Essential Tools &amp; Guides</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Navigate Your Healthcare Journey With Confidence <br  />Using Our Curated Resources.</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/patient-guide.svg" alt="New patient icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">New Patient Guide</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">Step-by-step checklist: registration, insurance verification, first appointment, &amp; what to bring.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/billing.svg" alt="Insurance icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">Insurance &amp; Billing</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">Understand cashless claims, TPA partners, estimated costs, and financial aid programs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/article-line2.svg" alt="Surgery icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">Pre-Surgery Checklist</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">Preparation tips, medication adjustments, fasting guidelines, and day-of-surgery steps.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/telehealth.svg" alt="Telehealth icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">Telehealth Instruction</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">How to set up virtual consults, technical requirements &amp; appointment etiquette.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/medication-safety.svg" alt="Medication icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">Medication Safety</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">Manage prescriptions, avoid interactions, and understand your pharmacy benefits.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_resource_card cs_white_bg cs_radius_15">
                <div className="cs_resource_card_header">
                  <div className="cs_resource_card_icon cs_radius_10 cs_center">
                    <img  src="/assets/img/icons/heart-bit.svg" alt="Discharge plan icon" />
                  </div>
                  <h3 className="cs_resource_card_title cs_fs_24 cs_medium mb-0">Post-Discharge Plan</h3>
                </div>
                <p className="cs_resource_card_desc mb-0">Recovery timeline, follow-up appointments, and home care support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Essential Tools & Guides Section */}
      {/* Start FAQ Section */}
      <section className="cs_faq_section_2 cs_gray2_bg" aria-label="Frequently asked questions">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-5 col-xl-4">
              <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Frequently Asked Questions</p>
                <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Comforting answers for worried hearts</h2>
              </div>
              <div className="cs_faq_img cs_radius_20 position-relative overflow-hidden h-auto">
                <img  src="/assets/img/faq_img_2.webp" alt="Care navigator" />
                <div className="cs_faq_callout cs_radius_10">
                  <p className="cs_white_color cs_fs_16 mb-0">Still have a question?<br  />Our care navigator is ready to help.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 offset-xl-1">
              <div className="cs_accordians_style_2">
                <div className="cs_accordian active">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. How do I schedule an appointment?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> You can book online via our "Book Appointment" form, call our helpline at +880 10678, or visit the reception desk. Teleconsultation is also available.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. What documents should I bring for my first visit?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Please bring a valid government-issued photo ID, your insurance card, a list of current medications, and any previous medical records relevant to your visit.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Does Hospil accept my health insurance?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Hospil partners with most major insurance providers and TPAs. Our billing team will verify your coverage before treatment and help you understand any out-of-pocket costs.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. What are visiting hours?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> General visiting hours are 10am-12pm and 4pm-7pm daily. ICU and special care units follow stricter schedules — please check with your nursing station for details.</p>
                  </div>
                </div>
                <div className="cs_accordian">
                  <div className="cs_accordian_head position-relative">
                    <span className="cs_accordian_title cs_fs_20 cs_semibold cs_primary_color">Q. Can I get my lab reports online?</span>
                    <span className="cs_accordian_toggler cs_center cs_radius_50">
                    <img  src="/assets/img/icons/arrow-down.svg" alt="Toggle icon" />
                    </span>
                  </div>
                  <div className="cs_accordian_body">
                    <p className="mb-0"><strong className="cs_primary_color">Ans:</strong> Yes — sign in to the Hospil patient portal to view, download, and securely share lab reports with your doctor or family within hours of completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
      {/* Start Watch & Learn Section */}
      <section className="cs_video_section_1" aria-label="Watch and learn videos">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48 cs_mb_lg_40 mx-auto">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">//  Watch &amp; Learn</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Short Educational Videos from Hospil Experts.</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_video_card">
                <a href="https://www.youtube.com/embed/cFV85I2GLME" aria-label="Play video: Preparing for Your Hospital Stay" className="cs_video_card_thumb cs_radius_20 cs_mb_24 cs_video_open">
                <img  src="/assets/img/video_img_1.webp" alt="Preparing for your hospital stay video" />
                <span className="cs_video_card_play cs_center cs_radius_50">
                <img  src="/assets/img/icons/polygon.svg" alt="Play icon" />
                </span>
                </a>
                <div className="cs_video_card_info">
                  <h3 className="cs_video_card_title cs_fs_24 cs_medium cs_mb_12">Preparing for Your Hospital Stay</h3>
                  <p className="cs_video_card_desc mb-0">Tips from our patient experience team.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_video_card">
                <a href="https://www.youtube.com/embed/cFV85I2GLME" aria-label="Play video: Understanding Your Rights as a Patient" className="cs_video_card_thumb cs_radius_20 cs_mb_24 cs_video_open">
                <img  src="/assets/img/video_img_2.webp" alt="Patient rights video" />
                <span className="cs_video_card_play cs_center cs_radius_50">
                <img  src="/assets/img/icons/polygon.svg" alt="Play icon" />
                </span>
                </a>
                <div className="cs_video_card_info">
                  <h3 className="cs_video_card_title cs_fs_24 cs_medium cs_mb_12">Understanding Your Rights as a Patient</h3>
                  <p className="cs_video_card_desc mb-0">Privacy, consent and safety.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_video_card">
                <a href="https://www.youtube.com/embed/cFV85I2GLME" aria-label="Play video: Medication Management After Discharge" className="cs_video_card_thumb cs_radius_20 cs_mb_24 cs_video_open">
                <img  src="/assets/img/video_img_3.webp" alt="Medication management video" />
                <span className="cs_video_card_play cs_center cs_radius_50">
                <img  src="/assets/img/icons/polygon.svg" alt="Play icon" />
                </span>
                </a>
                <div className="cs_video_card_info">
                  <h3 className="cs_video_card_title cs_fs_24 cs_medium cs_mb_12">Medication Management After Discharge</h3>
                  <p className="cs_video_card_desc mb-0">Pharmacist advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Watch & Learn Section */}
      {/* Start Cost Estimates & Aid Section */}
      <section className="cs_estimate_section_1 position-relative p-0" aria-label="Cost estimates and aid">
        <div className="cs_estimate_bg position-absolute">
          <img  src="/assets/img/vector_shape_12.svg" alt="Vector background" />
        </div>
        <div className="container position-relative">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48 cs_mb_lg_40 mx-auto">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">//  Cost Estimates &amp; Aid</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Get transparent Cost Estimates, Apply For Charity Care, <br  />Or Set Up A Payment Plan.</h2>
          </div>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_30">
            <div className="col-lg-6">
              <div className="cs_estimate_card cs_white_bg cs_radius_20">
                <div className="cs_estimate_card_icon cs_accent_bg cs_radius_15 cs_center">
                  <img  src="/assets/img/icons/insurance.svg" alt="Insurance icon" />
                </div>
                <div className="cs_estimate_card_body">
                  <h3 className="cs_estimate_card_title cs_fs_24 cs_medium cs_mb_6">Insurance pre-authorization</h3>
                  <p className="cs_estimate_card_desc mb-0">We assist with paperwork.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_estimate_card cs_white_bg cs_radius_20">
                <div className="cs_estimate_card_icon cs_accent_bg cs_radius_15 cs_center">
                  <img  src="/assets/img/icons/calculator.svg" alt="EMI icon" />
                </div>
                <div className="cs_estimate_card_body">
                  <h3 className="cs_estimate_card_title cs_fs_24 cs_medium cs_mb_6">EMI &amp; payment plans</h3>
                  <p className="cs_estimate_card_desc mb-0">0% interest options available.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_center">
            <Link  to="/contact-us" aria-label="Request a cost estimate" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
            <span>Request Estimate</span>
            <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
            </Link>
          </div>
        </div>
      </section>
      {/* End Cost Estimates & Aid Section */}
      {/* Start Blog Section */}
      <section className="cs_blog_section_1 position-relative">
        <div className="container position-relative z-1">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle  cs_accent_color cs_fs_14 cs_mb_17">// Health Insights Blog</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Evidence-Based Articles from Hospil Doctors.</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-5 col-xl-6">
              <article className="cs_post_style_2 cs_type_1 cs_radius_20">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img">
                <img  src="/assets/img/post_img_25.webp" alt="Post image" />
                </Link>
                <div className="cs_post_overlay position-absolute"></div>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_fs_14 cs_mb_12">
                    <div className="cs_post_meta">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favico.svg" alt="Author icon" />
                        </span>
                        <span className="cs_author_title">By Admin</span>
                      </div>
                    </div>
                    <div className="cs_post_meta">
                      <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span className="cs_posted_date">April 05, 2026</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">5 Signs You Should See a Cardiologist</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="row cs_gap_y_24">
                <div className="col-sm-6">
                  <article className="cs_post_style_2 cs_type_2 cs_radius_20">
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_20">
                    <img  src="/assets/img/post_img_26.webp" alt="Post image" />
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_meta_wrapper cs_fs_14 cs_mb_12">
                        <div className="cs_post_meta">
                          <div className="cs_post_author">
                            <span className="cs_author_icon cs_center cs_radius_50">
                            <img  src="/assets/img/favico.svg" alt="Author icon" />
                            </span>
                            <span className="cs_author_title">By Admin</span>
                          </div>
                        </div>
                        <div className="cs_post_meta">
                          <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                          <span className="cs_posted_date">April 04, 2026</span>
                        </div>
                      </div>
                      <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                        <Link  to="/blog-details" aria-label="Read the post details">Nutrition Tips for Post-Surgery Recovery</Link>
                      </h3>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  <article className="cs_post_style_2 cs_type_2 cs_radius_20">
                    <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_20">
                    <img  src="/assets/img/post_img_27.webp" alt="Post image" />
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_meta_wrapper cs_fs_14 cs_mb_12">
                        <div className="cs_post_meta">
                          <div className="cs_post_author">
                            <span className="cs_author_icon cs_center cs_radius_50">
                            <img  src="/assets/img/favico.svg" alt="Author icon" />
                            </span>
                            <span className="cs_author_title">By Admin</span>
                          </div>
                        </div>
                        <div className="cs_post_meta">
                          <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                          <span className="cs_posted_date">April 02, 2026</span>
                        </div>
                      </div>
                      <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                        <Link  to="/blog-details" aria-label="Read the post details">Managing Anxiety Before a Procedure</Link>
                      </h3>
                    </div>
                  </article>
                </div>
              </div>
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

export default PatientResource;
