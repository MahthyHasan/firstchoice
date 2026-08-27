import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Blog Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Latest News &amp; Blogs</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Parenting Guides, and Stories From Our <br  /> Pediatric Team Trusted by Families</h2>
          </div>
          <div className="row cs_gap_y_48 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_1.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">12</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">5 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">When To Keep Your Child Home vs Bring to Hospil Sick Bay</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_2.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">11</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">7 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Separation Anxiety &amp; Medical Daycare: Gentle Transitions</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_3.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">10</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">3 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Post-surgery Care Tips For Working Parents</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_4.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">09</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">8 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Robotic Knee Replacement: Faster Recovery &amp; Less Pain</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_5.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">08</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">6 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Mind-Body Connection: How Stress Affects Physical Health</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_6.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">07</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">4 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">5 Early Signs of Heart Disease You Should Never Ignore</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_7.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">06</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">7 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Reversing Prediabetes: Lifestyle Changes That Work</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_8.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">05</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">5 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">5 Signs Your Gum Pain Needs Immediate Care</Link>
                  </h3>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="cs_post_style_3">
                <Link  to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                <img  src="/assets/img/blog_img_9.webp" alt="Post image" />
                <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">04</span>
                <span className="cs_white_color">Apr</span>
                </span>
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_meta_wrapper cs_mb_14">
                    <div className="cs_post_author">
                      <span className="cs_author_icon cs_center cs_radius_50">
                      <img  src="/assets/img/favico.svg" alt="Author icon" />
                      </span>
                      <span className="cs_author_title cs_fs_14">By Admin</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <img  src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                      <span className="cs_reading_duration">9 min read</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                    <Link  to="/blog-details" aria-label="Read the post details">Braces vs Clear Aligners: Cost, Time &amp; Comfort</Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
          {/* Start Pagination */}
          <nav aria-label="Blog pagination">
            <ul className="cs_pagination cs_mp_0 justify-content-center">
              <li><a href="#" aria-label="Previous page"><img  src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{"transform":"rotate(180deg)"}} /></a></li>
              <li className="active"><a href="#">01</a></li>
              <li><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li><a href="#" aria-label="Next page"><img  src="/assets/img/icons/arrow-right.svg" alt="Next" /></a></li>
            </ul>
          </nav>
          {/* End Pagination */}
        </div>
      </section>
      {/* End Blog Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Blog;
