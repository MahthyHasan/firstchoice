import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Packages</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Pricing & Packages</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Packages Section */}
      <section className="cs_packages_section" aria-label="Treatment Packages">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Treatment Pricing Plans</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Transparent, Affordable Packages With No Hidden Costs.</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1 ms-0">
                <div className="cs_sidebar_widget cs_white_bg cs_filter_menu cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_8">Filter by Category</h3>
                  <p className="cs_filter_widget_subtitle cs_secondary_color cs_mb_12">Select category to see relevant pricing</p>
                  <h4 className="cs_filter_group_title cs_fs_20 cs_semibold cs_mb_14">Treatment Type</h4>
                  <ul className="cs_filter_list cs_mp_0 cs_mb_24" data-filter-group="treatment">
                    <li>
                      <button type="button" className="cs_filter_btn active" data-filter="all">All Treatments</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="surgeries">Surgeries & Orthopedics</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="diagnostics">Diagnostics & Checkups</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="dental">Dental Care</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="ophthalmology">Ophthalmology</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="wellness">Wellness & Therapy</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="cosmetic">Cosmetic Procedures</button>
                    </li>
                  </ul>
                  <h4 className="cs_filter_group_title cs_fs_20 cs_semibold cs_mb_14">Price Range</h4>
                  <ul className="cs_filter_list cs_mp_0" data-filter-group="price">
                    <li>
                      <button type="button" className="cs_filter_btn active" data-filter="all">All Prices</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="under-1k">Under $1k</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="mid">$1k &ndash; $5k</button>
                    </li>
                    <li>
                      <button type="button" className="cs_filter_btn" data-filter="above-5k">Above $5k</button>
                    </li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_contact cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Need Help Choosing?</h3>
                  <div>
                    Talk to our care coordinator:
                    <div>
                      <a href="tel:+14448281507"> +1 444 828-1507</a> or
                    </div>
                    <div>
                      email: <a href="mailto:info@hospil.com">camp@hospil.com</a>
                    </div>
                  </div>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Venue Location</h3>
                  <div className="cs_venue_address cs_mb_24">
                    <img  src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                    <span>Hospil Main Campus, Outdoor Arena</span>
                  </div>
                  <div className="cs_venue_map cs_radius_20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.0!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE3JzI1LjQiTiA3NsKwMzYnNDQuMCJX!5e0!3m2!1sen!2sus!4v1700000000000" title="Hospil Main Campus location map"></iframe>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-8">
              <div className="row cs_gap_y_30" id="cs_packages_grid">
                <div className="col-md-6 cs_package_item" data-filter="diagnostics under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_1.webp" alt="Full Body Checkup" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Full Body Checkup</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$199</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>80+ tests</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Doctor consultation</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>ECG & Lipid profile</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Digital reports</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Full Body Checkup" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="diagnostics under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_2.webp" alt="Cardiac Screening" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Cardiac Screening</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$299</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Troponin</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>2D Echo</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Stress test</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Cardiologist review</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Cardiac Screening" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="surgeries above-5k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_3.webp" alt="Knee Replacement" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Knee Replacement (Single)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$7,890</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Implant included</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Pre-op tests</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>5 days hospital stay</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>1 year follow-up</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Knee Replacement" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="ophthalmology mid">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_4.webp" alt="Cataract Surgery" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Cataract Surgery</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$1,250</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Phacoemulsification</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Lens included</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>One day procedure</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Post-op drops</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Cataract Surgery" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="dental under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_5.webp" alt="Root Canal Treatment" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Root Canal Treatment</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$450</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Ceramic crown</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Local anesthesia</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Follow-up visit</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Pain management</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Root Canal Treatment" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="dental under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_6.webp" alt="Teeth Whitening" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Teeth Whitening</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$220</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>1 hour session</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Laser whitening</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Take-home kit</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Free touch-up</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Teeth Whitening" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="wellness under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_7.webp" alt="Physiotherapy" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Physiotherapy (6 sessions)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$540</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Manual therapy</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Personalized rehab</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Dry needling</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Progress report</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Physiotherapy" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="wellness under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_8.webp" alt="Yoga and Stress Management" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Yoga & Stress Management</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$180</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Mindfulness guide</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>8 group classes</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Breathing techniques</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Online access</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Yoga and Stress Management" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="cosmetic mid">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_9.webp" alt="Liposuction" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Liposuction (1 area)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$2,990</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Compression garment</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Local anesthesia</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>3 follow-ups</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Body contouring</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Liposuction" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="surgeries mid">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_10.webp" alt="Gallbladder Removal" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Gallbladder Removal (Lap)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$1,550</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Surgeon fee</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>2 nights stay</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Anesthesia</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Dietary guidance</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Gallbladder Removal" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="surgeries mid">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_11.webp" alt="Hernia Repair" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Hernia Repair (Laparoscopic)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$3,250</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Overnight stay</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Mesh included</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Anesthesia</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>30-day care plan</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Hernia Repair" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="dental mid">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_12.webp" alt="Dental Implant" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Dental Implant (Single)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$1,290</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Crown placement</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Titanium implant</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>CT scan included</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>1 year warranty</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Dental Implant" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="wellness under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_13.webp" alt="Annual Wellness Membership" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Annual Wellness Membership</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$399</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>24/7 tele consult</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>2 full checkups</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>10% off pharmacy</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Vaccination alerts</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Annual Wellness Membership" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="cosmetic under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_14.webp" alt="Skin Rejuvenation" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">Skin Rejuvenation (PRP)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$590</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>3 sessions</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Platelet rich plasma</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Glow boost</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Dermatologist care</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book Skin Rejuvenation" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 cs_package_item" data-filter="diagnostics under-1k">
                  <div className="cs_pricing_table_2 cs_gray2_bg cs_type_1 cs_radius_20">
                    <div className="cs_pricing_thumb cs_radius_20 cs_mb_24">
                      <img  src="/assets/img/package_img_15.webp" alt="MRI Single Region" />
                    </div>
                    <h3 className="cs_pricing_heading cs_fs_24 cs_medium cs_mb_12">MRI (Single Region)</h3>
                    <div className="cs_pricing_value cs_fs_40 cs_semibold cs_accent_color cs_primary_font cs_mb_12"><span>$420</span></div>
                    <ul className="cs_pricing_feature_list cs_mb_34 cs_mp_0">
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>High-res MRI</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>CD & report</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Radiologist review</span>
                      </li>
                      <li>
                        <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>Same-day slot</span>
                      </li>
                    </ul>
                    <Link  to="/contact-us" aria-label="Book MRI Single Region" className="cs_btn_style_1 cs_semibold cs_primary_color cs_radius_5">
                    <span>Book Now</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </Link>
                  </div>
                </div>
                <p className="cs_packages_empty cs_secondary_color text-center w-100" hidden>No packages match the selected filters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Packages Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Packages;
