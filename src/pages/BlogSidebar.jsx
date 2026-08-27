import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebar = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
     <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog with Sidebar</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog with Sidebar</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Blog Sidebar Section */}
      <div className="cs_blog_sidebar_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_blog_posts_list">
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_19.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">12</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">5 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">When To Keep Your Child Home vs Bring to Hospil Sick Bay</Link>
                    </h2>
                  </div>
                </article>
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_20.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">11</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">7 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">Separation Anxiety & Medical Daycare: Gentle Transitions</Link>
                    </h2>
                  </div>
                </article>
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_21.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">10</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">3 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">Post-surgery Care Tips For Working Parents</Link>
                    </h2>
                  </div>
                </article>
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_22.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">09</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">8 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">Robotic Knee Replacement: Faster Recovery & Less Pain</Link>
                    </h2>
                  </div>
                </article>
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_23.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">08</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">6 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">Mind-Body Connection: How Stress Affects Physical Health</Link>
                    </h2>
                  </div>
                </article>
                <article className="cs_post_style_3">
                  <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                  <img  src="/assets/img/post_img_24.webp" alt="Post image" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                  <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">07</span>
                  <span className="cs_white_color">Apr</span>
                  </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                        <img  src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By Admin</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">4 min read</span>
                      </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link  to="/blog-details" aria-label="Read the post details">5 Early Signs of Heart Disease You Should Never Ignore</Link>
                    </h2>
                  </div>
                </article>
              </div>
              <nav aria-label="Blog pagination">
                <ul className="cs_pagination cs_mp_0">
                  <li>
                    <a href="#" aria-label="Previous page">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{"transform":"rotate(180deg)"}} />
                    </a>
                  </li>
                  <li className="active"><a href="#" aria-label="Page 1">01</a></li>
                  <li><a href="#" aria-label="Page 2">02</a></li>
                  <li><a href="#" aria-label="Page 3">03</a></li>
                  <li>
                    <a href="#" aria-label="Next page">
                    <img  src="/assets/img/icons/arrow-right.svg" alt="Next" />
                    </a>
                  </li>
                </ul>
              </nav>
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
                    <li><a href="#"><span>Maternity & Child</span><span>(6)</span></a></li>
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
      </div>
      {/* End Blog Sidebar Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default BlogSidebar;
