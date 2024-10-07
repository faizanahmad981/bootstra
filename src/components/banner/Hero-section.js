import React from "react";
import '../banner/HeroSection.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faPlay } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div className="hero-section">
        

       
    <div className="hero-text">
      <h1>
        Dive into Delights<br/> Of Delectable <span>Food</span>
      </h1>
      <p>
        Where Each Plate Weaves a Story of Culinary<br/> Mastery and Passionate Craftsmanship
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary">
          Order Now
        </button>
        <div className="watch-video">Watch Video 
      <div className='playcircle' >
      <FontAwesomeIcon icon={faPlay} />
      </div>
     </div>
      {/*   <button className="btn btn-secondary">
          Watch Video
          <div className="circleplay">
             <FontAwesomeIcon  width={'20px'} icon={faPlay} className=" ml-2" /></div>
         
        </button> */}
        
      </div>
    </div>
    <div className="hero-image">
      <img
        src="https://storage.googleapis.com/a1aa/image/ObbyKU1fK4T1QCcEJHz4mUCMScCKVAZhJxnf8OfJbGn9RpInA.jpg"
        alt="Woman holding a bowl of spicy noodles and a plate of vegetarian salad"
        width="400"
        height="400"
      />
      <div className="badge">
        Hot spicy Food
        <FontAwesomeIcon icon={faPepperHot} className="ml-2" />
      </div>
    </div>
    
  </div>
  );
};

export default HeroSection;
