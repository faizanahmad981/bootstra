import React from 'react';
import '../category/index.css';

import { Breakfast, BrowseAll, Dessert, Pngwing } from '../../assets/images/index';
const categories = [
  {
    title: 'Main Dish',
    subtitle: '(86 dishes)',
    image: Pngwing,
  },
  {
    title: 'Break Fast',
    subtitle: '(12 break fast)',
    image: Breakfast,
  },
  {
    title: 'Dessert',
    subtitle: '(48 dessert)',
    image: Dessert,
  },
  {
    title: 'Browse All',
    subtitle: '(255 Items)',
    image: BrowseAll,
  },
];

const Categories = () => {
  return (
    <div className="container">
      <div className="section-title">
        <p>CUSTOMER FAVORITES</p>
        <h2>Popular Categories</h2>
      </div>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div className="col-md-3" key={index}>
            <div className="category-card">
              <img alt={`Image of ${category.title}`} src={category.image} />
              <div className="category-title">{category.title}</div>
              <div className="category-subtitle">{category.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
