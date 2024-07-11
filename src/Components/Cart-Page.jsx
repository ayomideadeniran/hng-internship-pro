import React from "react";
import { Link } from "react-router-dom";
import "../Css/Cart-Page.css";
import "../Css/Header.css";
import Image1 from "../Images/fairboy.png";
import Image2 from "../Images/jeans.png";
import Image3 from "../Images/T-shirt.png";
import Image4 from "../Images/Back-tshirt.png";

// import React from "react";
import "../Css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";

function CartPage() {
  return (
    <div className="header1">
      <nav className="main-header">
        <div className="brand">
          <img className="bacground" src="" alt="" />
          <span className="menu-toggle">☰</span>
          <h1>
            KAIROS
            <p>Premium Apparel</p>
          </h1>
        </div>
        <div className="navigation">
          <a className="contact" href="#contact">
            CONTACT
          </a>
          <a href="/">
            <i className="icon">
              <span class="material-symbols-outlined">account_circle</span>
            </i>
          </a>
          <a href="/">
            <i className="icon">
              <span class="material-symbols-outlined">favorite</span>
            </i>
          </a>
          <a href="/cart">
            <i className="icon">
              <span class="material-symbols-outlined">shopping_bag</span>
            </i>
          </a>
        </div>
      </nav>

      <main>
        <div className="shopping-cart">
          <div className="product-image">
            <img className="image-center" src={Image1} alt="" />
            <div className="additional-images">
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
            </div>
          </div>

          <div className="product-details">
            <p className="product-title">CUSTOM DENIM JACKET</p>
            <h2 className="product-name">Longer Dark Wash Denim Jacket</h2>
            <p className="review">10 reviews</p>
            <h1 className="price-tag">N150,000.00</h1>
            <ul>
              <li>MADE IN NIGERIA</li>
              <li>USES DEADSTOCK MATERIALS</li>
              <li>SHIPS FREE TO USA</li>
              <li>ELIGABLE FOR 30-DAY RETURNS</li>
              <li>UNISEX SIZE AND FIT</li>
            </ul>
            <div className="cart-actions">
              <button className="product-size">
                Size 1
                <span class="material-symbols-outlined">arrow_drop_down</span>
              </button>
              <button className="add-to-cart">ADD TO CART</button>
            </div>

              <Link to="/checkout">
                <button className="checkout-btn">
              Proceed to CheckOut
            </button>
              </Link>
          
            <p className="shipping">Shipping & Returns</p>
            <p className="free">Free shipping within lagos.</p>
            <p className="international">
              International rates calculated at checkout
            </p>
            <a style={{ color: "#646464" }} className="sku" href="">
              SKU VRML-OS-201-1
            </a>
            <h2 className="sub">Subcribe to our Newslettter</h2>
            <p className="email">Email</p>
            <button className="subscribe001">Subscribe</button>
          </div>
        </div>
      </main>

      <div className="footer">
        <div className="subscribe">
          <h1>Newsletter</h1>
          <div className="input-field">
            <input type="text" placeholder="Enter e-mail" />
            <button>
              <span class="material-symbols-outlined">mail</span>
              Subscribe
            </button>
          </div>
        </div>

        <div className="list">
          <ul>
            <li>Customer Care</li>
            <li>Exclusive</li>
            <li>Order and REturns</li>
            <li>Size Guide</li>
          </ul>
          <ul>
            <li>General Information</li>
            <li>Legal Area</li>
            <li>Privacy policy</li>
            <li>Cookie Policy</li>
            <li>Investor Relations</li>
          </ul>

          <ul className="icons">
            <li>Follow Us On</li>
            <div className="icons-list">
              <li>
                <FaPinterest className="pinterest-icon" />
              </li>
              <li>
                <FaTiktok className="tiktok-icon" />
              </li>
              <li>
                <FaInstagram className="instagram-icon" />
              </li>
              <li>
                <FaYoutube className="youtube-icon" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
