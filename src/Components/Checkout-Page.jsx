import React from "react";
import { Link } from 'react-router-dom';

// import "../Css/Cart-Page.css";
// import "../Css/Header.css";
import "../Css/Checkout-Page.css";
import Image from "../Images/fairboy.png";
import Image2 from "../Images/image copy.png";
import { FaInstagram, FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";

function CheckoutPage() {
  return (
    <div>
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

          <Link to="/cart">
          <a href="">
            <i className="icon">
              <span class="material-symbols-outlined">shopping_bag</span>
            </i>
          </a>
          </Link>
        </div>
      </nav>
      {/*  */}
      <div className="checkout-page">
        <div className="product-summary">
          <img src={Image} alt="Custom Denim Jacket" />
          <div className="product-details">
            <h2>CUSTOM DENIM JACKET</h2>
            <h3>Longer Dark Wash Denim Jacket</h3>
            <p className="reviews">10 Reviews</p>
            <p className="price">N150,000.00</p>
            <div className="price-breakdown">
              <div>
                <span>Subtotal</span>
                <span>N150,000</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>N5,000</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>N155,000</span>
              </div>
              <p style={{ fontSize: "9px" }}>Including N837.21 in taxes</p>
            </div>
          </div>
        </div>
        <div className="checkout-form">
          <div className="form-header">
            <span>Contact</span>
            <a href="#" className="login-link">
              Log in
            </a>
          </div>
          <form className="form">
            <input type="text" placeholder="Email or phone Number" />
            <div className="form-header">
              <span>Delivery</span>
            </div>
            <select>
              <option>Country/Region</option>
            </select>
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Apartment (optional)" />
            <div className="city-state">
              <input type="text" placeholder="City" />
              <select>
                <option>State</option>
              </select>
            </div>
            <input type="text" placeholder="Phone" />
            <div className="form-header">
              <span>Shipping Method</span>
            </div>
            <div className="radio-group">
              <label className="background">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  defaultChecked
                />
                <span className="span">Standard</span>
              </label>
              <label className="background">
                <input type="radio" name="shipping" value="mainland" />
                <span className="span">Mainland Delivery</span>
              </label>
              <label className="background">
                <input type="radio" name="shipping" value="island" />
                <span>Island Delivery</span>
              </label>
            </div>
            <div className="form-header">
              <span>Payment</span>
            </div>
            <p className="secure-note">
              All transactions are secure and encrypted.
            </p>
            <div className="payment-method">
              <span className="span">Paystack</span>
              <div className="payment-icons">
                <img src={Image2} alt="PayPal" />
                {/* <img src={Image} alt="Mastercard" />
                <img src={Image} alt="Visa" /> */}
              </div>
            </div>
            <div className="form-header">
              <span>Billing Address</span>
            </div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="billing"
                  value="same"
                  defaultChecked
                />
                <span className="span">Same as shipping address</span>
              </label>
              <label>
                <input type="radio" name="billing" value="different" />
                <span>Use a different billing address</span>
              </label>
            </div>
            <button type="submit" className="pay-button">
              Pay now
            </button>
          </form>
        </div>
      </div>
      {/*  */}
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
            <li>Order and Returns</li>
            <li>Size Guide</li>
          </ul>
          <ul>
            <li>General Information</li>
            <li>Legal Area</li>
            <li>Privacy Policy</li>
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

export default CheckoutPage;
