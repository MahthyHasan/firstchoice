import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Pricing Plan</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Pricing Section */}
      <section className="cs_pricing_section_2" aria-label="Pricing Plans">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Transparent Pricing & Care Plans</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Affordable, Flexible Health Plans Designed for You and Your Family. No Hidden Fees at Hospil.</h2>
          </div>
          <div className="cs_center cs_mb_24">
            <div className="cs_pricing_toggle" role="group" aria-label="Billing period">
              <button type="button" className="cs_pricing_toggle_label active" data-period="monthly">Monthly</button>
              <label className="cs_pricing_switch">
              <input  type="checkbox" id="cs_billing_toggle" />
              <span className="cs_pricing_slider"></span>
              </label>
              <button type="button" className="cs_pricing_toggle_label" data-period="yearly">Yearly <span className="cs_pricing_save">(Save 20%)</span></button>
            </div>
          </div>
          <div className="row cs_gap_y_30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1  cs_color_1 cs_radius_20">
                <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/pricing_img_1.webp" alt="Essential Care plan" />
                </div>
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Essential Care</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span className="cs_pricing_amount" data-monthly="$49" data-yearly="$470">$49</span><small>/ month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">For individuals &amp; routine checkups</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>General OPD Consultation (2x/month)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Basic Lab Tests (CBC, Sugar, Urine)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>10% off on Pharmacy</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Specialist Visit (extra charge)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>24/7 Telehealth Support</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Choose Essential Care plan" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Choose Plan</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_color_2 cs_radius_20 active">
                <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/pricing_img_2.webp" alt="Family Wellness plan" />
                </div>
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Family Wellness</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span className="cs_pricing_amount" data-monthly="$99" data-yearly="$950">$99</span><small>/ month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">Best for families (up to 4 members)</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Unlimited General OPD</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Specialist Visit (2 free/month)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Annual Health Checkup (worth $200)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>20% off on Diagnostics &amp; Pharmacy</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Priority Appointment &amp; Ambulance discount</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Choose Family Wellness plan" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Choose Plan</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_color_3 cs_radius_20">
                <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/pricing_img_3.webp" alt="Elite Care plan" />
                </div>
                <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Elite Care</h3>
                <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span className="cs_pricing_amount" data-monthly="$189" data-yearly="$1,815">$189</span><small>/ month</small></div>
                <span className="cs_pricing_badge cs_fs_14 cs_mb_22">Complete coverage + VIP services</span>
                <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>All Family Wellness benefits</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Unlimited Specialist visits (any dept)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Private Deluxe Room (20% off on IPD)</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Free Annual Master Health Checkup</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Concierge &amp; Priority Surgery scheduling</span>
                  </li>
                </ul>
                <Link  to="/contact-us" aria-label="Choose Elite Care plan" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                <span>Choose Plan</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Pricing;
