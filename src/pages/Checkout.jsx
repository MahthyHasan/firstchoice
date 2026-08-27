import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Checkout</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Checkout Section */}
      <section className="cs_checkout_section_1">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <h2 className="cs_fs_40 cs_semibold cs_mb_24">Billing Details</h2>
              <form action="#" className="cs_checkout_form">
                <div className="row cs_gap_y_24">
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="first_name">First Name</label>
                      <input  type="text" className="cs_form_field" id="first_name" name="first_name" placeholder="Enter your name" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="last_name">Last Name</label>
                      <input  type="text" className="cs_form_field" id="last_name" name="last_name" placeholder="Enter your last name" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="company_name">Company Name (Optional)</label>
                      <input  type="text" className="cs_form_field" id="company_name" name="company_name" placeholder="Enter your company name" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="country">Country Region *</label>
                      <select className="cs_form_field cs_choice" id="country" name="country">
                        <option selected disabled>Enter your country name</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="street_address">Street Address</label>
                      <input  type="text" className="cs_form_field" id="street_address" name="street_address" placeholder="Enter your street address" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="city">Town/City</label>
                      <input  type="text" className="cs_form_field" id="city" name="city" placeholder="Enter your city" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="zip_code">Zip Code</label>
                      <input  type="text" className="cs_form_field" id="zip_code" name="zip_code" placeholder="Enter your zip code" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="phone">Phone</label>
                      <input  type="tel" className="cs_form_field" id="phone" name="phone" placeholder="Enter your phone number" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="email">Email</label>
                      <input  type="email" className="cs_form_field" id="email" name="email" placeholder="Enter your email address" autocomplete="off" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="order_notes">Order Notes (Optional)</label>
                      <textarea className="cs_form_field" id="order_notes" name="order_notes" placeholder="e.g. special notes about your order"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="cs_checkout_sidebar cs_gray2_bg cs_radius_20">
                <h2 className="cs_checkout_box_title cs_fs_20 cs_semibold cs_mb_12">Your Order</h2>
                <ul className="cs_order_summary_list cs_mp_0 cs_mb_24">
                  <li><span>Pulse Oximeter:</span><span>$39.00</span></li>
                  <li><span>Microscope Isolated:</span><span>$299.00</span></li>
                  <li><span>Diabetes Lancing Device:</span><span>$19.00</span></li>
                  <li className="cs_order_summary_strong"><span>Subtotal:</span><span>$357.00</span></li>
                  <li><span>Shipping:</span><span>Free</span></li>
                  <li className="cs_order_summary_strong"><span>Total:</span><span>$357.00</span></li>
                </ul>
                <h2 className="cs_checkout_box_title cs_fs_20 cs_semibold cs_mb_12">Payment</h2>
                <p className="cs_secure_note cs_fs_14 cs_primary_color cs_mb_8">All transactions are secure.</p>
                <div className="cs_payment_methods cs_mb_24">
                  <label className="cs_payment_option">
                  <input  type="radio" name="payment_method" value="paypal" />
                  <span>PayPal</span>
                  </label>
                  <div>
                    <label className="cs_payment_option">
                    <input  type="radio" name="payment_method" value="bank_transfer" checked />
                    <span>Direct Bank Transfer</span>
                    </label>
                    <p className="cs_payment_desc cs_fs_14 mb-0">Transfer your payment directly to our bank account using your order ID as reference.</p>
                  </div>
                  <label className="cs_payment_option">
                  <input  type="radio" name="payment_method" value="cod" />
                  <span>Cash on delivery</span>
                  </label>
                </div>
                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 cs_semibold">
                <span>Place Your Order</span>
                <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Checkout Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Checkout;
