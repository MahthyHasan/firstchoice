import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Blog Details Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <article className="cs_blog_details">
                <div className="cs_blog_details_thumb cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_19.webp" alt="When To Keep Your Child Home vs Bring to Hospil Sick Bay" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center_column">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">12</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                </div>
                <div className="cs_blog_details_meta cs_mb_12">
                  <div className="cs_post_author">
                    <span className="cs_author_icon cs_center cs_radius_50">
                    <img  src="/assets/img/favicon.webp" alt="Author icon" />
                    </span>
                    <span className="cs_author_title cs_fs_16">By Admin</span>
                  </div>
                  <div className="cs_post_meta cs_fs_16">
                    <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                    <span className="cs_reading_duration">5 min read</span>
                  </div>
                </div>
                <h2>When To Keep Your Child Home vs Bring to Hospil Sick Bay</h2>
                <p>As a parent, few things are more stressful than seeing your child unwell. The eternal question: &ldquo;Should I keep them home, or rush to Hospil Sick Bay?&rdquo; With flu season and common childhood illnesses, making the right call can mean faster recovery and reduced exposure to other infections.</p>
                <div className="cs_blog_quote cs_mb_48 cs_mb_lg_30">
                  <blockquote>“Mild symptoms often resolve with rest and hydration at home. However, certain red flags require immediate medical attention at our pediatric sick bay.”</blockquote>
                  <small>- Dr. Christopher Emory</small>
                  <span className="cs_blog_quote_icon">
                  <img  src="/assets/img/icons/quote.svg" alt="Quote icon" />
                  </span>
                </div>
                <h2>The General Rule: Home vs. Hospital</h2>
                <ul className="cs_blog_rule_list cs_mp_0 cs_mb_48 cs_mb_lg_30">
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Fever:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Below 101°F (38.3°C) + playful</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Cough &amp; Cold:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Mild cough, drinking well, no breathing trouble</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Vomiting/Diarrhea:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Mild, able to keep fluids down, no dehydration signs</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Rash:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Localized, non-blistering, child acts normal</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Ear Pain:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Mild discomfort, no fever</span></li>
                </ul>
                <h2 className="cs_blog_details_h2 cs_fs_40 cs_semibold cs_mb_22">Red Flags: When to Bring Your Child IMMEDIATELY to Hospil</h2>
                <p className="cs_mb_24">Trust your parental instinct. If you observe any of the following, do not wait — our 24/7 pediatric sick bay team is ready.</p>
                <div className="cs_red_flag_grid cs_mb_48 cs_mb_lg_30">
                  <div className="cs_red_flag_card cs_radius_20 cs_color_1">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">Difficulty Breathing</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Retractions, nasal flaring</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_2">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">Signs of Dehydration</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">No urine for 6+ hours</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_3">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">Lethargy / Unresponsiveness</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Difficulty waking up</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_4">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">Severe Headache + Stiff Neck</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Possible meningitis signs</p>
                  </div>
                </div>
                <h2 className="cs_blog_details_h2 cs_fs_40 cs_semibold cs_mb_22">When Keeping at Home is Best</h2>
                <p className="cs_mb_10">Home care is often sufficient for mild viral illnesses, common colds, or low-grade fevers. The key is monitoring and providing supportive care:</p>
                <ul className="cs_blog_check_list cs_mp_0 cs_mb_48 cs_mb_lg_24">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Encourage hydration (water, ORS, clear soups).</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Use child-safe acetaminophen/ibuprofen for fever (as per weight).</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Humidifier for cough &amp; nasal congestion.</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Isolate from siblings to prevent spread.</span>
                  </li>
                </ul>
                <h2>Why Choose Hospil Sick Bay for Your Child?</h2>
                <p>Our dedicated pediatric sick bay is separate from the main ER — designed to be child-friendly, with minimal waiting times and specialized pediatric nurses. We offer:</p>
                <ul className="cs_blog_check_list cs_mp_0 cs_mb_48 cs_mb_lg_24">
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Pediatric ER consultants 24/7</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Painless vaccination &amp; IV protocols</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Distraction therapy &amp; play area</span>
                  </li>
                  <li>
                    <img  src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Parent-inclusive beds &amp; emotional support</span>
                  </li>
                </ul>
                <div className="cs_post_tags cs_mb_48 cs_mb_lg_30">
                  <span className="cs_post_tags_title cs_fs_16 cs_primary_color">Tags:</span>
                  <ul className="cs_tags_list cs_mp_0">
                    <li><a href="#">Heart Health</a></li>
                    <li><a href="#">Medical Care</a></li>
                    <li><a href="#">Hospital</a></li>
                  </ul>
                </div>
                <nav className="cs_post_navigation" aria-label="Post navigation">
                  <Link  to="/blog-details" className="cs_post_nav_item cs_radius_20">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{"transform":"rotate(180deg)"}} />
                    Previous Post
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">Separation Anxiety &amp; Medical Daycare: Gentle Transitions</h3>
                  </Link>
                  <Link  to="/blog-details" className="cs_post_nav_item cs_radius_20 cs_post_nav_next">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                    Next Post
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Next" />
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">Robotic Knee Replacement: Faster Recovery &amp; Less Pain</h3>
                  </Link>
                </nav>
              </article>
              <div className="cs_comment_form_wrap">
                <h2 className="cs_comment_form_title cs_fs_40 cs_semibold cs_mb_10">Leave a Reply</h2>
                <p className="cs_comment_form_subtitle cs_mb_24">Your email address will not be published. Required fields are marked *</p>
                <form action="#" className="cs_comment_form">
                  <div className="row cs_gap_y_24">
                    <div className="col-md-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_name" className="cs_fs_14 cs_primary_color">Name</label>
                        <input  id="comment_name" type="text" name="name" placeholder="Enter your name" autocomplete="off" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_email" className="cs_fs_14 cs_primary_color">Email</label>
                        <input  id="comment_email" type="email" name="email" placeholder="Enter your email" autocomplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_website" className="cs_fs_14 cs_primary_color">Website</label>
                        <input  id="comment_website" type="url" name="website" placeholder="Enter your website link" autocomplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_message" className="cs_fs_14 cs_primary_color">Comment</label>
                        <textarea id="comment_message" name="comment" rows="4" placeholder="Write your comment here..."></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="cs_save_check cs_fs_16 cs_secondary_color">
                      <input  type="checkbox" name="save_info" />
                      <span>Save my name, email, and website in this browser for the next time I comment.</span>
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                      <span>Post A Comment</span>
                      <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Search</h3>
                  <form action="#" className="cs_search_form position-relative">
                    <input  type="search" name="search" placeholder="Search articles here..." />
                    <button type="submit" aria-label="Search">
                    <img  src="/assets/img/icons/search.svg" alt="Search icon" />
                    </button>
                  </form>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Categories</h3>
                  <ul className="cs_categories_list cs_mp_0">
                    <li><a href="#"><span>Cardiology</span><span>(12)</span></a></li>
                    <li><a href="#"><span>Neurology</span><span>(8)</span></a></li>
                    <li><a href="#"><span>Orthopedics</span><span>(10)</span></a></li>
                    <li><a href="#"><span>Maternity &amp; Child</span><span>(6)</span></a></li>
                    <li><a href="#"><span>Oncology</span><span>(5)</span></a></li>
                    <li><a href="#"><span>Wellness Tips</span><span>(14)</span></a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Recent Posts</h3>
                  <ul className="cs_recent_posts_list cs_mp_0">
                    <li className="cs_post_style_6">
                      <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                      <img  src="/assets/img/post_img_16.webp" alt="Post thumbnail" />
                      </Link>
                      <div className="cs_post_info">
                        <span className="cs_post_date cs_mb_6">
                        <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                        April 15, 2026
                        </span>
                        <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                          <Link  to="/blog-details" aria-label="Read the post details">Understanding Diabetes Management</Link>
                        </h3>
                      </div>
                    </li>
                    <li className="cs_post_style_6">
                      <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                      <img  src="/assets/img/post_img_17.webp" alt="Post thumbnail" />
                      </Link>
                      <div className="cs_post_info">
                        <span className="cs_post_date cs_mb_6">
                        <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                        April 14, 2026
                        </span>
                        <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                          <Link  to="/blog-details" aria-label="Read the post details">Mental Health After Surgery</Link>
                        </h3>
                      </div>
                    </li>
                    <li className="cs_post_style_6">
                      <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                      <img  src="/assets/img/post_img_18.webp" alt="Post thumbnail" />
                      </Link>
                      <div className="cs_post_info">
                        <span className="cs_post_date cs_mb_6">
                        <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                        April 13, 2026
                        </span>
                        <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                          <Link  to="/blog-details" aria-label="Read the post details">Pediatric Vaccination Guide</Link>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_promo_widget cs_radius_20 cs_bg_filed text-center" data-src="/assets/img/team_img_21.webp">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_24">Ask Our Experts</h3>
                  <p className="cs_promo_desc cs_white_color cs_mb_12">Have a health concern? Get personalized advice from Hospil specialists.</p>
                  <Link  to="/appointment" aria-label="Book consultation" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                  <img  src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>Book Consultation</span>
                  </Link>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Popular Tags</h3>
                  <ul className="cs_tags_list cs_mp_0">
                    <li><a href="#">Heart Health</a></li>
                    <li><a href="#">Diabetes Care</a></li>
                    <li><a href="#">Mental Wellness</a></li>
                    <li><a href="#">Physiotherapy</a></li>
                    <li><a href="#">Vaccination</a></li>
                    <li><a href="#">Nutrition</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Details Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default BlogDetails;
