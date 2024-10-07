import React from 'react';
import '../Testimonials/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';


import chefImage from '../../assets/images/cheif.png';
import rectangle from '../../assets/images/Rectangle.png';
const Testimonials = () => {
  return (
    <div className="container testimonials-section">
    <div className="row">
     <div className="col-md-6 ">
    
       <div className="chef-card">
    <div className="best-chef-badge">
    <img src={rectangle} alt="Best Chef" className="rectangle" />
      <img src={chefImage} alt="Best Chef" className="chef-image" />
      <div className="emoji-left">😊</div>
        <div className="emoji-right">🍕</div>
        <div className="chef-title">
          Our Best Chef <span>😊</span>
        </div>
    </div>
    </div>
     </div>
     <div className="col-md-6">
      <div className="testimonials-content">
       <h6>
        TESTIMONIALS
       </h6>
       <h2>
        What Our Customers <br/> Say About Us
       </h2>
       <p>
        “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
       </p>
       <div className="customer-feedback">
        <img alt="Customer 1" height="40" src="https://storage.googleapis.com/a1aa/image/bav8w30WBRJwDlvszE4jN7RMeFoYexy06o0aB6eWrAVZxMInA.jpg" width="40"/>
        <img alt="Customer 2" height="40" src="https://storage.googleapis.com/a1aa/image/S6YJnMCAgN5qIpXq4jYFJsGSX0swVe9YJghDraUi7y6VMDyJA.jpg" width="40"/>
        <img alt="Customer 3" height="40" src="https://storage.googleapis.com/a1aa/image/xf2FdFMJr9yqTCxPsZKDThbfqJCNefoU0IymNEPDTX7niZQOB.jpg" width="40"/>
        <img alt="Customer 4" height="40" src="https://storage.googleapis.com/a1aa/image/CAf3O1G9rY1eQkpPQHJIdNMya3O3ris5HteHfYwQvdJ5iZQOB.jpg" width="40"/>
        <div className="customer-feedback-text">
         <span>
          Customer Feedback
         </span>
         <div className="rating">
         <FontAwesomeIcon icon={faStar} />
          <span>
           4.9 (18.6k Reviews)
          </span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
};

export default Testimonials;