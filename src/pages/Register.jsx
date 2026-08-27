import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Register = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <PageHeader title="Account Register" breadcrumb={[{ label: 'Register' }]} />
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
                  <h2 className="cs_login_title cs_fs_40 cs_semibold cs_primary_color cs_mb_12">Register for an Account</h2>
                  <p className="cs_login_subtitle cs_secondary_color mb-0">Register today and manage appointments, prescriptions, and more.</p>
                </div>
                <form action="#" className="cs_login_form">
                  <div className="cs_login_field cs_radius_5">
                    <label htmlFor="cs_login_name" className="cs_login_label cs_fs_14 cs_primary_color">Full Name</label>
                    <input  type="text" id="cs_login_name" name="email" placeholder="Enter your name" autocomplete="name" />
                  </div>
                  <div className="cs_login_field cs_radius_5">
                    <label htmlFor="cs_login_email" className="cs_login_label cs_fs_14 cs_primary_color">Email address</label>
                    <input  type="email" id="cs_login_email" name="email" placeholder="Enter your email" autocomplete="email" />
                  </div>
                  <div className="cs_login_field cs_radius_5">
                    <label htmlFor="cs_login_password" className="cs_login_label cs_fs_14 cs_primary_color">Password</label>
                    <input  type="password" id="cs_login_password" name="password" placeholder="************" />
                  </div>
                  <div className="cs_login_field cs_radius_5">
                    <label htmlFor="cs_login_cpassword" className="cs_login_label cs_fs_14 cs_primary_color">Confirm Password</label>
                    <input  type="password" id="cs_login_cpassword" name="password" placeholder="************" />
                  </div>
                  <div className="cs_login_actions w-100">
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100">
                    <span>Register Account</span>
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </button>
                  </div>
                  <p className="cs_login_register m-0">Already have an account? <Link  to="/login" className="cs_accent_color">Login</Link></p>
                </form>
              </div>
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

export default Register;
