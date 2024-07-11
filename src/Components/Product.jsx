import React from 'react';
import '../Css/Product.css'
import Image from '../Images/1.png';
import Image1 from '../Images/glasses.png';
import Image2 from '../Images/watch.png';
import Image3 from '../Images/sweater.png';
import Image4 from '../Images/newyork.png';
import Image5 from '../Images/shoeand bag.png';
import Image6 from '../Images/cap.png';


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

export default ProductGrid;

