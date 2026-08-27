import React from 'react';
import { Link } from 'react-router-dom';

const TermCondition = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Term & Condition</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Term & Condition</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Term & Contion Section */}
      <section className="cs_policy_section">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-4">
              <div className="cs_sidebar_style_1 ms-0">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                <h2 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_16">On This Page</h2>
                <ul className="cs_policy_nav cs_mp_0">
                  <li><a href="#acceptance"><span>01</span> Acceptance of Terms</a></li>
                  <li><a href="#medical-services"><span>02</span> Medical Services &amp; Use</a></li>
                  <li><a href="#telehealth"><span>03</span> Telehealth &amp; Consultations</a></li>
                  <li><a href="#appointments"><span>04</span> Appointments &amp; Cancellations</a></li>
                  <li><a href="#privacy"><span>05</span> Privacy &amp; Data Protection</a></li>
                  <li><a href="#payments"><span>06</span> Payments &amp; Insurance</a></li>
                  <li><a href="#liability"><span>07</span> Limitation of Liability</a></li>
                  <li><a href="#modifications"><span>08</span> Modifications &amp; Contact</a></li>
                </ul>
                <div className="cs_policy_meta">
                  <p className="cs_fs_14 cs_secondary2_color mb-0">Last Updated: June 06, 2026</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cs_policy_content">
                <div className="cs_policy_block" id="acceptance">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">01</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Acceptance of Terms</h2>
                  </div>
                  <p>Welcome to Hospil General Hospital. These Terms and Conditions govern your use of our website, mobile application, telemedicine services, and any healthcare services provided by Hospil. By registering, booking an appointment, or using our digital platforms, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>
                  <p>Hospil reserves the right to update these Terms at any time. Continued use constitutes acceptance of the revised version.</p>
                </div>
                <div className="cs_policy_block" id="medical-services">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">02</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Medical Services &amp; Use</h2>
                  </div>
                  <p className="cs_mb_24">Hospil provides diagnostic, therapeutic, and emergency medical services through qualified healthcare professionals. All information provided on our platforms is for educational and informational purposes and does not replace direct medical advice. You should always seek the advice of your physician or another qualified health provider with any questions regarding a medical condition.</p>
                  <ul className="cs_policy_list cs_mp_0 cs_mb_24">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>In case of a medical emergency, please visit our emergency room or call our ambulance service immediately.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Online content does not establish a doctor-patient relationship unless a formal consultation occurs.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>You must provide accurate, complete, and truthful information for your health records.</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_policy_block" id="telehealth">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">03</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Telehealth &amp; Online Consultations</h2>
                  </div>
                  <p className="cs_mb_24">Hospil offers remote consultations via video/audio calls. By using telehealth services, you acknowledge potential limitations (e.g., technology failures, inability to perform physical exams). We will make reasonable efforts to ensure confidentiality, but you must ensure a private environment during consultations.</p>
                  <div className="cs_policy_note cs_type_warning">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p className="mb-0"><strong className="cs_primary_color">Important:</strong> Telehealth is not suitable for severe emergencies or conditions requiring immediate in-person intervention. In such cases, you must visit the nearest emergency department.</p>
                  </div>
                </div>
                <div className="cs_policy_block" id="appointments">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">04</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Appointments &amp; Cancellations</h2>
                  </div>
                  <p className="cs_mb_24">Patients can book, reschedule, or cancel appointments online or via our helpline. A valid phone number and email are required. Cancellations made less than 2 hours before the appointment time may be subject to a nominal fee. No-show policy: three missed appointments may lead to restricted online booking access.</p>
                  <ul className="cs_policy_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Emergency cases are prioritized irrespective of appointment status.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Surgical procedures require separate written consent forms.</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_policy_block" id="privacy">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">05</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Privacy &amp; Data Protection</h2>
                  </div>
                  <p className="cs_mb_24">Hospil is committed to protecting your personal health information in compliance with applicable data protection laws (including HIPAA standards where applicable). We collect, store, and process your medical records, payment details, and contact information only to provide healthcare services. We do not sell patient data to third parties. For more details, refer to our <Link  to="/privacy-policy" className="cs_accent_color cs_semibold">Privacy Policy</Link>.</p>
                  <p>You have the right to access, correct, or request deletion of your data, subject to legal retention requirements for medical records.</p>
                </div>
                <div className="cs_policy_block" id="payments">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">06</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Payments &amp; Insurance</h2>
                  </div>
                  <p className="cs_mb_24">All fees for consultations, procedures, diagnostics, and pharmacy services must be settled as per our billing policies. Hospil accepts cash, credit/debit cards, digital wallets, and major insurance plans. If you are using insurance coverage, it is your responsibility to verify coverage before treatment. Any balance not covered by insurance shall be paid by the patient or guardian.</p>
                  <p>We offer cashless hospitalization for empaneled insurance partners. For self-pay patients, an estimate will be provided before elective procedures.</p>
                </div>
                <div className="cs_policy_block" id="liability">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">07</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Limitation of Liability</h2>
                  </div>
                  <p className="cs_mb_24">To the fullest extent permitted by law, Hospil and its physicians, employees, and affiliates shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to treatment outcomes, delays, or technical errors. Medical treatment involves inherent risks; you acknowledge that no guaranteed results can be promised. Our total liability shall not exceed the fees paid by you for the specific service in dispute.</p>
                  <div className="cs_policy_note">
                    <i className="fa-solid fa-circle-info"></i>
                    <p className="mb-0">Nothing in this section excludes liability for gross negligence or willful misconduct.</p>
                  </div>
                </div>
                <div className="cs_policy_block" id="modifications">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">08</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Modifications &amp; Contact</h2>
                  </div>
                  <p className="cs_mb_24">We may revise these Terms from time to time. The updated version will be posted on this page with a revised "Last Updated" date. Your continued use after changes constitutes acceptance. If you have any questions or concerns regarding these Terms, please contact our Legal Department at:</p>
                  <div className="cs_policy_contact cs_gray4_bg cs_radius_10">
                    <ul className="cs_policy_contact_list cs_mp_0">
                      <li>
                        <span className="cs_policy_contact_icon"><i className="fa-regular fa-envelope"></i></span>
                        <a href="mailto:info@hospil.com" className="cs_fs_18 cs_medium cs_primary_color">legal@hospil.com</a>
                      </li>
                      <li>
                        <span className="cs_policy_contact_icon"><i className="fa-solid fa-phone"></i></span>
                        <a href="tel:+14448281507" className="cs_fs_18 cs_medium cs_primary_color">+1 444 828 1507 <span className="cs_fs_14 cs_secondary2_color">(Legal &amp; Compliance)</span></a>
                      </li>
                      <li>
                        <span className="cs_policy_contact_icon"><i className="fa-solid fa-location-dot"></i></span>
                        <span className="cs_fs_18 cs_medium cs_primary_color">58 Blue Spruce Lane Baltimore, MD 2321</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Term & Contion Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default TermCondition;
