import React from "react";
import "../Css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
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
        <ul className="list-move">
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
  );
}

export default Footer;
