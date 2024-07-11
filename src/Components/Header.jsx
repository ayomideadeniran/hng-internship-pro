import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';
import '../Css/Product.css';
import '../Css/Info.css';
import '../Css/Footer.css';
import Image1 from '../Images/glasses.png';
import Image2 from '../Images/watch.png';
import Image3 from '../Images/sweater.png';
import Image4 from '../Images/newyork.png';
import Image5 from '../Images/shoeand bag.png';
import InfoImage1 from '../Images/3.png';
import InfoImage2 from '../Images/2.png';
import { FaInstagram, FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <span className="menu-icon">☰</span>
          <h1>
            KAIROS
            <p>Premium Apparel</p>
          </h1>
        </div>
        <div className="nav-items">
          <Link className="contact" to="/contact">
            CONTACT
          </Link>
          <Link to="/cart">
            <i className="icon-user">
              <span className="material-symbols-outlined">account_circle</span>
            </i>
          </Link>
          <Link to="/cart">
            <i className="icon-heart">
              <span className="material-symbols-outlined">favorite</span>
            </i>
          </Link>
          <Link to="/cart">
            <i className="icon-cart">
              <span className="material-symbols-outlined">shopping_bag</span>
            </i>
          </Link>
        </div>
      </nav>
      <main className="hero">
        <div className="hero-content">
          <h2>
            Modern
            <br />
            Touch
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae mauris mauris elit
            pellentesque blandit magna dignissim eu laoreet. Quisque enim
            potenti turpis sem et enim suspendisse elit sed.
          </p>
        </div>
      </main>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    { id: 1, name: "TNF 1996 NUPTSE JACKET", price: "$350", image: Image1 },
    { id: 2, name: "TEN THOUSAND X YOUNG LA", price: "$225", image: Image2 },
    { id: 3, name: "TNF DENALI FLEECE", price: "$230", image: Image3 },
    { id: 4, name: "TNF RETRO NUPTSE JACKET", price: "$330", image: Image4 },
    { id: 5, name: "TNF SUIT DRESS", price: "$270", image: Image5 },
    { id: 6, name: "TNF PUFFER TNF NEON JACKET", price: "$370", image: Image4 },
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Info = () => {
  return (
    <div className="container">
      <div className="top-section">
        <img src={InfoImage2} alt="Fashion accessories" className="top-image" />
        <div className="overlay-text">
          <h2>Explore the Creations</h2>
          <p>Be inspired by the latest arrivals.</p>
        </div>
      </div>
      <div className="bottom-section">
        <img src={InfoImage1} alt="Fashion model" className="bottom-image" />
        <div className="categories">
          <h1 className="end-of-season">End of season sale</h1>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Girls</li>
            <li>Lifestyle</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe">
        <h1>Newsletter</h1>
        <div className="input-field">
          <input type="text" placeholder="Enter e-mail" />
          <button>
            <span className="material-symbols-outlined">mail</span>
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
};

const App = () => {
  return (
    <div>
      <Header />
      <ProductGrid />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
