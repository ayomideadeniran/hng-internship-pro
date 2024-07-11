import React from "react";
import "../Css/Info.css";
import Image from "../Images/3.png";
import Image2 from "../Images/2.png";

const App = () => {
  return (
    <div className="container">
      <div className="top-section">
        <img src={Image2} alt="Fashion accessories" className="top-image" />
        <div className="overlay-text">
          <h2>Explore the Creations</h2>
          <p>Be inspired by the latest arrivals.</p>
        </div>
      </div>
      <div className="bottom-section">
        <img src={Image} alt="Fashion model" className="bottom-image" />
        <div className="categories">
          <h1 className="end-of-season">End of season sale</h1>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Girls</li>
            <li>Lifestyle</li>
          </ul>
        </div>
        {/* <div className="end-of-season">End of season sale</div> */}
      </div>
    </div>
  );
};

export default App;
