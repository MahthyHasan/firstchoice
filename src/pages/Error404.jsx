import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">404 Not Found</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">404 Error</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Error 404 Section */}
      <section className="cs_error_section">
        <div className="container">
          <div className="cs_error_in">
            <span className="cs_error_code cs_bold" aria-hidden="true">404</span>
            <h2 className="cs_error_title cs_fs_40 cs_semibold cs_mb_16">Oops! Page Not Found</h2>
            <p className="cs_error_desc cs_fs_18 cs_mb_40">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.</p>
            <Link  to="/" aria-label="Back to home page"
              className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
            <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
            <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Error 404 Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Error404;
