import React from 'react'
import '../services/index.css';

import { Catering, FastDelivery, GiftCards, Online } from '../../assets/images/index'; 
const Services = () => {
  return (
   <>
   <div className="container py-5">
        <div className="row">
        <div className="col-md-6"> 
    <p className="section-titles">OUR STORY & SERVICES</p>
  
    <h1 className="main-title">Our Culinary Journey<br/> And Services</h1>
    <p className="description">Rooted in passion, we curate unforgettable dining<br/> 
     experiences and offer exceptional services,<br/> 
      blending culinary artistry with warm hospitality.</p>
  
    <button className="btn btn-primarys btn-lg px-4 py-2" type="button">
       Explore
        </button>
</div>

            <div className="col-md-6">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="service-card">
                            
                            <img src={Catering} alt="shop" />
                            <p className="service-title">CATERING</p>
                            <p className="service-description">Delight your guests with our flavors and presentation</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-card">
                           
                            <img src={FastDelivery} alt="shop" />
                            <p className="service-title">FAST DELIVERY</p>
                            <p className="service-description">We deliver your order promptly to your door</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-card">
                        <img src={Online} alt="shop" />
                            <p className="service-title">ONLINE ORDERING</p>
                            <p className="service-description">Explore menu & order with ease using our Online Ordering</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-card">
                            
                            <img src={GiftCards} alt="shop" />
                            <p className="service-title">GIFT CARDS</p>
                            <p className="service-description">Give the gift of exceptional dining with Foodi Gift Cards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Services;
