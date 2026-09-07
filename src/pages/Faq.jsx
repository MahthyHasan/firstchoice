import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Faq = () => {
  const faqs = [
    {
      q: "What areas in Qatar do you serve?",
      a: "We serve clients across Qatar, including Doha and surrounding areas."
    },
    {
      q: "Are your nurses directly employed?",
      a: "Yes. All staff are directly employed by First Choice — no sub-contractors or independent contractors."
    },
    {
      q: "Do you offer 24-hour care?",
      a: "Yes. We provide round-the-clock 24/7 nursing care for patients who need continuous medical or personal care."
    },
    {
      q: "How do I book an appointment?",
      a: "Call us at +974 4140 2630 or +974 5000 2334, emailcontact@firstcmedical.com, or use the online booking form on this website."
    },
    {
      q: "What services do you offer?",
      a: "We offer home nursing care, elderly and senior care, postnatal confinement care, infant and mother care, and physiotherapy services."
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Frequently Asked Questions" subTitle="Got questions about our home healthcare services in Qatar?" breadcrumb={[{ label: 'FAQ' }]} />

        <section className="cs_faq_section py-5 cs_gray4_bg">
          <div className="container">
            <div className="cs_section_heading_style_1 text-center cs_mb_48">
              <p className="cs_section_subtitle cs_gray3_bg cs_accent_color cs_fs_14 cs_radius_5 d-inline-block">
                // First Choice Healthcare FAQ
              </p>
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Frequently Asked Questions</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((item, index) => (
                    <div key={index} className="accordion-item cs_radius_10 mb-3 border-0 shadow-sm">
                      <h3 className="accordion-header" id={`faqHead${index}`}>
                        <button
                          className={`accordion-button fw-bold cs_fs_18 ${index !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqCol${index}`}
                          aria-expanded={index === 0 ? 'true' : 'false'}
                        >
                          Q: {item.q}
                        </button>
                      </h3>
                      <div
                        id={`faqCol${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body cs_fs_16 text-secondary">
                          A: {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-5 p-4 bg-white cs_radius_15 shadow-sm">
                  <h3 className="cs_fs_24 cs_semibold mb-2">Have Additional Questions?</h3>
                  <p className="cs_fs_16 text-muted mb-3">Our Qatar healthcare representatives are available 24/7 to assist you.</p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="tel:+97441402630" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                      <span>Call +974 4140 2630</span>
                    </a>
                    <Link to="/contact-us" className="cs_btn_style_1 cs_primary_bg cs_white_color cs_radius_5">
                      <span>Contact Form</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
