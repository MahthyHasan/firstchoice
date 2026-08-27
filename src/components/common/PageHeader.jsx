import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subTitle, breadcrumb = [] }) => {
  return (
    <section className="cs_page_header_svg_banner">
      {/* Background Ambient Orbs */}
      <div className="cs_header_orb_1" aria-hidden="true" />
      <div className="cs_header_orb_2" aria-hidden="true" />

      {/* Floating Animated Medical SVG Icons */}
      <div className="cs_header_floating_shape cs_header_shape_1" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#00c2cb" strokeWidth="3" strokeDasharray="6 6" />
          <path d="M50 25 V75 M25 50 H75" stroke="#00c2cb" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="cs_header_floating_shape cs_header_shape_2" aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40 C 20 20, 60 20, 60 40 C 60 60, 20 60, 20 40 Z" stroke="#ffffff" strokeWidth="3" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#00c2cb" />
        </svg>
      </div>

      <div className="cs_header_floating_shape cs_header_shape_3" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="10" stroke="#00c2cb" strokeWidth="3" />
          <path d="M30 20 V40 M20 30 H40" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Animated ECG Pulse Wave SVG */}
      <div className="cs_header_ecg_line" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-100 h-100">
          <path
            className="cs_ecg_path"
            d="M0,30 L300,30 L315,10 L330,50 L345,15 L360,40 L375,30 L600,30 L615,5 L630,55 L645,10 L660,45 L675,30 L1200,30"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container position-relative z-2">
        <div className="cs_page_header_in">
          <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">{title}</h1>
          {subTitle && <p className="cs_fs_18 cs_white_color text-opacity-75 mb-3">{subTitle}</p>}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb cs_breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {breadcrumb.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${index === breadcrumb.length - 1 ? 'active' : ''}`}
                  aria-current={index === breadcrumb.length - 1 ? 'page' : undefined}
                >
                  {item.url && index !== breadcrumb.length - 1 ? (
                    <Link to={item.url}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
