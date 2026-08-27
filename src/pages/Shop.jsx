import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Medical Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Shop Section */}
      <div className="cs_shop_section_1">
        <div className="container">
          <div className="cs_shop_toolbar">
            <p className="cs_shop_result cs_fs_16 mb-0">Showing 1–9 of 30 results</p>
            <div className="cs_shop_sort cs_gray2_bg cs_radius_5">
              <select className="cs_choice" name="orderby" aria-label="Shop order">
                <option selected>Default Sorting</option>
                <option>Sort by Popularity</option>
                <option>Sort by Latest</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="row cs_gap_y_48">
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_1.webp" alt="Digital Blood Pressure" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Digital Blood Pressure</Link>
                  </h2>
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
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_2.webp" alt="Pulse Oximeter" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Pulse Oximeter</Link>
                  </h2>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$39.00</span>
                    <del className="cs_product_old_price cs_fs_16">$50.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_3.webp" alt="Microscope Isolated" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Microscope Isolated</Link>
                  </h2>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$299.00</span>
                    <del className="cs_product_old_price cs_fs_16">$350.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_4.webp" alt="Diabetes Lancing Device" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Diabetes Lancing Device</Link>
                  </h2>
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
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_5.webp" alt="Blue Asthma Inhaler" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Blue Asthma Inhaler</Link>
                  </h2>
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
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_6.webp" alt="Eye Drops Bottle" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Eye Drops Bottle</Link>
                  </h2>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$29.00</span>
                    <del className="cs_product_old_price cs_fs_16">$35.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_7.webp" alt="Stethoscope" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Stethoscope</Link>
                  </h2>
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
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_8.webp" alt="Infrared Temp Scanner" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Infrared Temp Scanner</Link>
                  </h2>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$29.00</span>
                    <del className="cs_product_old_price cs_fs_16">$39.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="cs_product_card_1">
                <div className="cs_product_thumb cs_radius_20 cs_mb_24">
                  <img  src="/assets/img/product_img_9.webp" alt="Adjustable Hospital Bed" />
                  <Link  to="/cart" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color addToCart">
                  <span>Add To Cart</span>
                  <img  src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                  </Link>
                </div>
                <div className="cs_product_info">
                  <h2 className="cs_product_title cs_fs_24 cs_medium cs_mb_12">
                    <Link  to="/shop-details">Adjustable Hospital Bed</Link>
                  </h2>
                  <div className="cs_product_meta">
                    <span className="cs_product_price cs_fs_20 cs_semibold">$250.00</span>
                    <del className="cs_product_old_price cs_fs_16">$300.00</del>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* Start Pagination */}
          <nav aria-label="Shop pagination">
            <ul className="cs_pagination cs_mp_0 justify-content-center">
              <li><a href="#" aria-label="Previous page">
                <img  src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{"transform":"rotate(180deg)"}} /></a>
              </li>
              <li className="active"><a href="#">01</a></li>
              <li><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li><a href="#" aria-label="Next page"><img  src="/assets/img/icons/arrow-right.svg" alt="Next" /></a></li>
            </ul>
          </nav>
          {/* End Pagination */}
        </div>
      </div>
      {/* End Shop Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Shop;
