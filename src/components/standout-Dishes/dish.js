import React from 'react';
import '../standout-Dishes/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import saladImg from '../../assets/images/salad.png';
import salad1Img from '../../assets/images/salad1.png';
import salad2Img from '../../assets/images/salad2.png';
const dishes = [
  {
    title: 'Fattoush salad',
    description: 'Description of the item',
    price: '$24.00',
    rating: '4.9',
    image: saladImg
  },
  {
    title: 'Vegetable salad',
    description: 'Description of the item',
    price: '$26.00',
    rating: '4.6',
    image: salad1Img,
  },
  {
    title: 'Egg vegi salad',
    description: 'Description of the item',
    price: '$23.00',
    rating: '4.5',
    image: salad2Img
  }
];

const Dishes = () => {
  return (
    <div className="container mt-5 position-relative">
      <div class="row">
            <div class="col-8 ">
                <div class="special-dishes">SPECIAL DISHES</div>
                <h1 className="standout-dishes alignmentleft">Standout Dishes From Our Menu</h1>
            </div>
            <div class="col-4">
                <div class="carousel-controls">
                    <button class="btn btn-prev">
                    <FontAwesomeIcon class="fas fa-chevron-left" icon={faChevronLeft} />
                    </button>
                    <button class="btn btn-next">
                    <FontAwesomeIcon class="fas fa-chevron-right" icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
      <div className="row mt-4">
        {dishes.map((dish, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card position-relative">
              <img alt={`Image of ${dish.title}`} className="card-img-top" src={dish.image} />
              <div className="card-body ">
                <h5 className="card-title alignmentleft">{dish.title}</h5>
                <p className="card-text alignmentleft">{dish.description}</p>
                <div className="d-flex justify-content-between w-100">
    <p className="price">{dish.price}</p>
    <p className="rating">
      <FontAwesomeIcon icon={faStar} /> {dish.rating}
    </p>
  </div>
                
              </div>
              <div className="heart-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;