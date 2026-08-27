import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Privacy Policy</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Privacy & Policy Section */}
      <section className="cs_policy_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-xl-4 col-lg-5">
              <div className="cs_sidebar_style_1 ms-0">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                <h2 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_16">On This Page</h2>
                <ul className="cs_policy_nav cs_mp_0">
                  <li><a href="#overview"><span>01</span> Overview</a></li>
                  <li><a href="#information-collect"><span>02</span> Information We Collect</a></li>
                  <li><a href="#information-use"><span>03</span> How We Use Your Information</a></li>
                  <li><a href="#information-share"><span>04</span> When We Share Information</a></li>
                  <li><a href="#data-security"><span>05</span> Data Security &amp; Retention</a></li>
                  <li><a href="#privacy-rights"><span>06</span> Your Privacy Rights</a></li>
                  <li><a href="#cookies"><span>07</span> Cookies &amp; Digital Tools</a></li>
                  <li><a href="#children"><span>08</span> Children's Privacy</a></li>
                  <li><a href="#changes"><span>09</span> Changes to This Policy</a></li>
                </ul>
                <div className="cs_policy_meta">
                  <p className="cs_fs_14 cs_secondary2_color mb-0">Last Updated: June 06, 2026</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_policy_content">
                <div className="cs_policy_block" id="overview">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">01</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Overview</h2>
                  </div>
                  <p className="cs_mb_24">At Hospil General Hospital, we are dedicated to safeguarding the confidentiality and security of your health information. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website, use our patient portal, or receive medical services. We comply with applicable health data protection regulations and international best practices.</p>
                  <p>By interacting with Hospil's digital platforms or visiting our facilities, you agree to the practices described in this policy.</p>
                </div>
                <div className="cs_policy_block" id="information-collect">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">02</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Information We Collect</h2>
                  </div>
                  <div className="cs_policy_grid">
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-regular fa-id-card"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Personal Identifiers</h3>
                      <p className="cs_policy_card_text mb-0">Name, DOB, gender, national ID, contact details, emergency contacts.</p>
                    </div>
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-solid fa-file-medical"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Medical Records</h3>
                      <p className="cs_policy_card_text mb-0">Diagnosis, treatment history, prescriptions, lab reports, radiology images.</p>
                    </div>
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-solid fa-globe"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Digital Interactions</h3>
                      <p className="cs_policy_card_text mb-0">IP address, cookies, appointment logs, teleconsultation data.</p>
                    </div>
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-regular fa-credit-card"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Billing &amp; Insurance</h3>
                      <p className="cs_policy_card_text mb-0">Payment info, insurance policy numbers, claim history.</p>
                    </div>
                  </div>
                </div>
                <div className="cs_policy_block" id="information-use">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">03</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">How We Use Your Information</h2>
                  </div>
                  <ul className="cs_policy_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Provide medical diagnosis, treatment, and personalized care.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Manage appointments, admissions, and emergency responses.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Process insurance claims and billing securely.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Improve healthcare services, conduct research (anonymized), and send health reminders.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Comply with legal &amp; regulatory obligations.</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_policy_block" id="information-share">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">04</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">When We Share Information</h2>
                  </div>
                  <p className="cs_mb_24">We never sell your personal data. Your information may be shared only in the following circumstances:</p>
                  <ul className="cs_policy_list cs_mp_0">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_primary_color">With your consent:</strong> For referrals, second opinions, or third-party health programs.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_primary_color">Healthcare providers:</strong> Specialists, labs, or pharmacies involved in your treatment.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_primary_color">Legal requirements:</strong> If required by law, court order, or for public health safety.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_primary_color">Business associates:</strong> Vendors who assist with our IT, billing, or analytics (under strict confidentiality agreements).</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_policy_block" id="data-security">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">05</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Data Security &amp; Retention</h2>
                  </div>
                  <p className="cs_mb_24">Hospil implements industry-standard encryption (AES-256, TLS 1.3), role-based access controls, regular security audits, and physical safeguards. Your medical records are retained as per regulatory requirements (minimum 10 years) and securely destroyed thereafter.</p>
                  <div className="cs_policy_grid">
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-solid fa-lock"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Encrypted Storage</h3>
                      <p className="cs_policy_card_text mb-0">All patient data stored in ISO 27001 certified data centers.</p>
                    </div>
                    <div className="cs_policy_card">
                      <div className="cs_policy_card_icon"><i className="fa-solid fa-user-shield"></i></div>
                      <h3 className="cs_policy_card_title cs_fs_24 cs_semibold cs_primary_color cs_mb_12">Strict Access</h3>
                      <p className="cs_policy_card_text mb-0">Only authorized medical staff can view your records.</p>
                    </div>
                  </div>
                </div>
                <div className="cs_policy_block" id="privacy-rights">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">06</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Your Privacy Rights</h2>
                  </div>
                  <p className="cs_mb_24">You have the right to:</p>
                  <ul className="cs_policy_list cs_mp_0 cs_mb_24">
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Access and obtain a copy of your health records.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Request corrections to inaccurate information.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Request deletion (subject to legal retention).</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Withdraw consent for certain data uses.</span>
                    </li>
                    <li>
                      <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span>Receive a portable electronic copy of your data.</span>
                    </li>
                  </ul>
                  <p>To exercise these rights, contact our Privacy Officer at <a href="mailto:info@hospil.com" className="cs_accent_color cs_semibold">privacy@hospil.com</a> or call our helpline.</p>
                </div>
                <div className="cs_policy_block" id="cookies">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">07</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Cookies &amp; Digital Tools</h2>
                  </div>
                  <p>Our website uses essential cookies for functionality and analytics to enhance user experience. You may control cookie preferences via browser settings. We do not use third-party advertising trackers on patient portals.</p>
                </div>
                <div className="cs_policy_block" id="children">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">08</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Children's Privacy</h2>
                  </div>
                  <p className="cs_mb_24">Hospil does not knowingly collect personal information from children under 13 without parental consent. For pediatric services, all data is managed under the supervision of a parent or guardian.</p>
                  <div className="cs_policy_note">
                    <i className="fa-regular fa-circle-question"></i>
                    <p className="mb-0"><strong className="cs_primary_color">Have questions about your privacy?</strong> Our dedicated Privacy Team is available Monday–Friday, 9 AM – 6 PM.</p>
                  </div>
                </div>
                <div className="cs_policy_block" id="changes">
                  <div className="cs_policy_block_head cs_mb_24">
                    <span className="cs_policy_number cs_accent_color cs_fs_40 cs_semibold">09</span>
                    <h2 className="cs_fs_40 cs_semibold mb-0">Changes to This Policy</h2>
                  </div>
                  <p>We may update this Privacy Policy periodically. Any material changes will be notified via email or prominent notice on our website. The "Last updated" date indicates the latest revision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Privacy & Policy Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default PrivacyPolicy;
