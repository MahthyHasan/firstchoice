import React from 'react';
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Change Password</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Password</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Login Section */}
      <section className="cs_login_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-xl-6 col-lg-5">
              <div className="cs_login_banner">
                <div className="cs_login_brand cs_center_column text-center">
                  <img  src="/assets/img/logo.svg" alt="Hospil Logo" />
                  <p className="cs_login_card_tagline mb-0">Advanced Care. Human Touch.</p>
                </div>
                <div className="cs_login_thumb cs_radius_20">
                  <img  src="/assets/img/team_img_21.webp" alt="Hospil Doctors" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="cs_login_form_wrap">
                <div className="cs_login_form_head cs_mb_48 cs_mb_lg_30">
                  <h2 className="cs_login_title cs_fs_40 cs_semibold cs_primary_color cs_mb_12">Forgot Your Password?</h2>
                  <p className="cs_login_subtitle cs_secondary_color mb-0">Don't worry! Enter the email address associated with your account and we'll send you a secure link to reset your password.</p>
                </div>
                <form action="#" className="cs_login_form">
                  <div className="cs_login_field cs_radius_5">
                    <label htmlFor="cs_forgot_email" className="cs_login_label cs_fs_14 cs_primary_color">Email address</label>
                    <input  type="email" id="cs_forgot_email" name="email" placeholder="Enter your registered email" autocomplete="email" />
                  </div>
                  <div className="cs_login_actions w-100">
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100">
                    <span>Send Reset Link</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </button>
                  </div>
                  <p className="cs_login_register cs_secondary_color m-0">Back to Login <Link  to="/login" className="cs_accent_color">Login</Link></p>
                </form>
              </div>
              {/* End Forgot Password Section */}
            </div>
          </div>
        </div>
      </section>
      {/* End Login Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Password;
