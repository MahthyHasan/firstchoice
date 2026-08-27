import React from 'react';
import { Link } from 'react-router-dom';

const ShopDetails = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Shop Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Shop Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Shop Details Section */}
      <section className="cs_shop_details_section_1 pb-0">
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-5">
              <div className="cs_product_gallery cs_radius_20">
                <img  src="/assets/img/product_details_img_1.webp" alt="Pulse Oximeter" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_product_summary">
                <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">Pulse Oximeter</h2>
                <div className="cs_product_meta cs_mb_26">
                  <span className="cs_product_price cs_fs_20 cs_semibold cs_accent_color">$39.00</span>
                  <del className="cs_product_old_price cs_fs_16">$50.00</del>
                  <div className="cs_rating" data-rating="5">
                    <div className="cs_rating_percentage"></div>
                  </div>
                </div>
                <p className="cs_product_desc cs_secondary_color cs_mb_12">Accurate & reliable fingertip pulse oximeter with OLED display, real-time SpO2, pulse rate, and plethysmograph. Perfect for home use, sports, and medical monitoring. FDA & CE certified.</p>
                <ul className="cs_product_feature_list cs_mb_24">
                  <li><strong>Fast & Accurate:</strong> 8 seconds reading, ±2% accuracy</li>
                  <li><strong>Bright OLED Screen:</strong> 6 display modes, auto-rotate</li>
                  <li><strong>Long Battery Life:</strong> Up to 40 hours with 2 AAA batteries</li>
                  <li><strong>Smart Sensor:</strong> Automatic shut-off, low power indicator</li>
                </ul>
                <div className="cs_product_cart_row cs_mb_24">
                  <span className="cs_fs_16 cs_semibold cs_primary_color">Quantity:</span>
                  <div className="cs_quantity">
                    <button type="button" className="cs_decrement" aria-label="Decrease quantity"><i className="fa-solid fa-minus"></i></button>
                    <span className="cs_quantity_input">01</span>
                    <button type="button" className="cs_increment" aria-label="Increase quantity"><i className="fa-solid fa-plus"></i></button>
                  </div>
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Shopping cart" />
                  </Link>
                </div>
                <ul className="cs_product_assurance cs_mp_0">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_semibold">Secure transaction</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_semibold">Free delivery</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_semibold">Free returns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Start Product Tabs */}
          <div className="cs_product_details_tabs">
            <ul className="cs_tab_links cs_shop_tab_nav cs_mp_0">
              <li className="active"><a href="#tab_specifications">Technical Specifications</a></li>
              <li><a href="#tab_shipping">Shipping & Returns</a></li>
              <li><a href="#tab_reviews">Customer Reviews</a></li>
            </ul>
            <div className="cs_tabs cs_product_tab_content position-relative">
              <div className="cs_tab active" id="tab_specifications">
                <div className="row cs_gap_y_16">
                  <div className="col-lg-6">
                    <ul className="cs_spec_list cs_mp_0">
                      <li><span className="cs_spec_label">Model:</span><span className="cs_spec_value">OXI-FINGER PRO</span></li>
                      <li><span className="cs_spec_label">SpO2 Range:</span><span className="cs_spec_value">70% – 100%</span></li>
                      <li><span className="cs_spec_label">Accuracy (SpO2):</span><span className="cs_spec_value">±2% (70-100%)</span></li>
                      <li><span className="cs_spec_label">Warranty:</span><span className="cs_spec_value">2 years manufacturer warranty</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="cs_spec_list cs_mp_0">
                      <li><span className="cs_spec_label">Display:</span><span className="cs_spec_value">OLED with 6 modes</span></li>
                      <li><span className="cs_spec_label">Pulse Rate Range:</span><span className="cs_spec_value">30 – 250 bpm</span></li>
                      <li><span className="cs_spec_label">Power:</span><span className="cs_spec_value">2x AAA batteries (included)</span></li>
                      <li><span className="cs_spec_label">Weight:</span><span className="cs_spec_value">50g (with batteries)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cs_tab" id="tab_shipping">
                <p className="cs_secondary_color mb-0">Orders are processed within 24 hours and delivered free of charge within 3–5 business days. Returns are accepted within 30 days of delivery in original, unopened packaging. Refunds are issued to the original payment method within 5–7 business days of receiving the returned item.</p>
              </div>
              <div className="cs_tab" id="tab_reviews">
                <p className="cs_secondary_color mb-0">Rated 5 out of 5 by verified buyers. Customers praise the fast readings, bright OLED display, and dependable battery life for everyday home monitoring.</p>
              </div>
            </div>
          </div>
          {/* End Product Tabs */}
        </div>
      </section>
      {/* End Shop Details Section */}
      {/* Start You May Also Like Section */}
      <section className="cs_related_products_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">You May Also Like</h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/product_img_4.webp" alt="Diabetes Lancing Device" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h3 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Diabetes Lancing Device</Link>
                  </h3>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$19.00</span>
                    <del className="cs_product_old_price cs_fs_16">$25.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/product_img_1.webp" alt="Digital Blood Pressure" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h3 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Digital Blood Pressure</Link>
                  </h3>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$49.00</span>
                    <del className="cs_product_old_price cs_fs_16">$55.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24 cs_mb_lg_20">
                  <img  src="/assets/img/product_img_5.webp" alt="Blue Asthma Inhaler" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h3 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Blue Asthma Inhaler</Link>
                  </h3>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$15.00</span>
                    <del className="cs_product_old_price cs_fs_16">$20.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* End You May Also Like Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default ShopDetails;
