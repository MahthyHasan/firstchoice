import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      
    
    
    {/* Start Main Content */}
    <main>
      {/* Start Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" data-src="/assets/img/page_header_bg.webp">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Shopping Cart</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Cart Section */}
      <section className="cs_cart_section_1">
        <div className="container">
          <div className="cs_cart_table_wrap">
            <div className="cs_cart_table cs_mb_24">
              <div className="cs_cart_head">
                <span>Product</span>
                <span>Name</span>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Subtotal</span>
                <span></span>
              </div>
              <div className="cs_cart_row">
                <div className="cs_cart_cell cs_cart_cell_img">
                  <Link  to="/shop-details" className="cs_cart_product_img">
                  <img  src="/assets/img/product_img_2.webp" alt="Pulse Oximeter" />
                  </Link>
                </div>
                <div className="cs_cart_cell" data-label="Name">
                  <h2 className="cs_cart_product_name cs_fs_24 cs_medium mb-0">
                    <Link  to="/shop-details">Pulse Oximeter</Link>
                  </h2>
                </div>
                <div className="cs_cart_cell text-center" data-label="Price">
                  <span>$39.00</span>
                </div>
                <div className="cs_cart_cell text-center" data-label="Quantity">
                  <div className="cs_quantity">
                    <button type="button" className="cs_decrement" aria-label="Decrease quantity"><i className="fa-solid fa-minus"></i></button>
                    <span className="cs_quantity_input">01</span>
                    <button type="button" className="cs_increment" aria-label="Increase quantity"><i className="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <div className="cs_cart_cell text-center" data-label="Subtotal">
                  <span>$39.00</span>
                </div>
                <div className="cs_cart_cell cs_cart_cell_remove" data-label="Remove">
                  <button type="button" className="cs_cart_remove" aria-label="Remove Pulse Oximeter">
                  <img  src="/assets/img/icons/delete-bin.svg" alt="Delete icon" />
                  </button>
                </div>
              </div>
              <div className="cs_cart_row">
                <div className="cs_cart_cell cs_cart_cell_img">
                  <Link  to="/shop-details" className="cs_cart_product_img">
                  <img  src="/assets/img/product_img_3.webp" alt="Microscope Isolated" />
                  </Link>
                </div>
                <div className="cs_cart_cell" data-label="Name">
                  <h2 className="cs_cart_product_name cs_fs_24 cs_medium mb-0">
                    <Link  to="/shop-details">Microscope Isolated</Link>
                  </h2>
                </div>
                <div className="cs_cart_cell text-center" data-label="Price">
                  <span>$299.00</span>
                </div>
                <div className="cs_cart_cell text-center" data-label="Quantity">
                  <div className="cs_quantity">
                    <button type="button" className="cs_decrement" aria-label="Decrease quantity"><i className="fa-solid fa-minus"></i></button>
                    <span className="cs_quantity_input">01</span>
                    <button type="button" className="cs_increment" aria-label="Increase quantity"><i className="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <div className="cs_cart_cell text-center" data-label="Subtotal">
                  <span>$299.00</span>
                </div>
                <div className="cs_cart_cell cs_cart_cell_remove" data-label="Remove">
                  <button type="button" className="cs_cart_remove" aria-label="Remove Microscope Isolated">
                  <img  src="/assets/img/icons/delete-bin.svg" alt="Delete icon" />
                  </button>
                </div>
              </div>
              <div className="cs_cart_row">
                <div className="cs_cart_cell cs_cart_cell_img">
                  <Link  to="/shop-details" className="cs_cart_product_img">
                  <img  src="/assets/img/product_img_4.webp" alt="Diabetes Lancing Device" />
                  </Link>
                </div>
                <div className="cs_cart_cell" data-label="Name">
                  <h2 className="cs_cart_product_name cs_fs_24 cs_medium mb-0">
                    <Link  to="/shop-details">Diabetes Lancing Device</Link>
                  </h2>
                </div>
                <div className="cs_cart_cell text-center" data-label="Price">
                  <span>$19.00</span>
                </div>
                <div className="cs_cart_cell text-center" data-label="Quantity">
                  <div className="cs_quantity">
                    <button type="button" className="cs_decrement" aria-label="Decrease quantity"><i className="fa-solid fa-minus"></i></button>
                    <span className="cs_quantity_input">01</span>
                    <button type="button" className="cs_increment" aria-label="Increase quantity"><i className="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <div className="cs_cart_cell text-center" data-label="Subtotal">
                  <span>$19.00</span>
                </div>
                <div className="cs_cart_cell cs_cart_cell_remove" data-label="Remove">
                  <button type="button" className="cs_cart_remove" aria-label="Remove Diabetes Lancing Device">
                  <img  src="/assets/img/icons/delete-bin.svg" alt="Delete icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-lg-8">
              <div className="cs_cart_actions">
                <form action="#" className="cs_coupon_form">
                  <input  type="text" name="coupon" placeholder="Discount coupon code" autocomplete="off" />
                  <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 cs_semibold">
                  <span>Apply Coupon</span>
                  <img  src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                  </button>
                </form>
                <button type="button" className="cs_btn_style_2 cs_white_bg cs_radius_5 cs_semibold cs_primary_color">
                <span>Update Cart</span>
                <img  src="/assets/img/icons/shopping-cart.svg" alt="Shopping cart" />
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_cart_totals cs_gray2_bg cs_radius_20">
                <h2 className="cs_cart_totals_title cs_fs_20 cs_semibold cs_primary_color cs_mb_12">Cart Totals</h2>
                <ul className="cs_cart_totals_list cs_mp_0">
                  <li><span>Subtotal:</span><span>$357.00</span></li>
                  <li><span>Shipping:</span><span>Free</span></li>
                  <li className="cs_cart_total_row"><span>Total:</span><span>$357.00</span></li>
                </ul>
                <Link  to="/checkout" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 cs_semibold">
                <span>Proceed to checkout</span>
                <img  src="/assets/img/icons/shopping-cart.svg" alt="Shopping cart" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cart Section */}
    </main>
    {/* End Main Content */}
    
    
    
    
    
    
    
    
    
    
    
  

    </>
  );
};

export default Cart;
