import React from 'react';

import '../banner/HeroSection.css'; 
import cardimg from '../../assets/images/Mask.png'


const BannerCard = () => {
  return (
    <>

<div className="card">
    <img src={cardimg} alt="Spicy noodles" className="card-image" />
    <div className="card-content">
      <h3 className="card-title">Spicy noodles</h3>
      <div className="stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
      </div>
      <div className="price">$18.00</div>
    </div>
  </div>

  <div className="food-items">
          <div className="food-item">
            <img
              src="https://storage.googleapis.com/a1aa/image/D7hJVsXFGg4HFNYufc4GGCroJaXSGm5Hlj6LSKLyYOof2TkTA.jpg"
              alt="Spicy noodles"
              width="150"
              height="100"
            />
            <h5>Spicy noodles</h5>
            <div className="price">$18.00</div>
          </div>
          <div className="food-item">
            <img
              src="https://storage.googleapis.com/a1aa/image/DvWMMdfl2IQwFKl1UCqwJtV1VPLiodPgPfIVIXZeZJMAunInA.jpg"
              alt="Vegetarian salad"
              width="150"
              height="100"
            />
            <h5>Vegetarian salad</h5>
            <div className="price">$23.00</div>
          </div>
        </div>
    </>
    
  
  );
};

export default BannerCard;
