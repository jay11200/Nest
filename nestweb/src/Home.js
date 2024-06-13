import React from 'react';
import './App.css';
import cat1 from './cat-1.png';
import cat2 from './cat-2.png';
import cat3 from './cat-3.png';
import cat4 from './cat-4.png';
import cat5 from './cat-5.png';
import cat9 from './cat-9.png';
import cat11 from './cat-11.png';
import cat12 from './cat-12.png';
import cat13 from './cat-13.png';
import cat14 from './cat-14.png';

const categories = [
  { name: 'Cake & Milk', items: 11, image: cat13 },
  { name: 'Organic Kiwi', items: 6, image: cat5 },
  { name: 'Peach', items: 6, image: cat4 },
  { name: 'Read Apple', items: 10, image: cat3 },
  { name: 'Snacks', items: 11, image: cat2 },
  { name: 'Vegetables', items: 6, image: cat14 },
  { name: 'Strawberry', items: 10, image: cat11 },
  { name: 'Black plum', items: 10, image: cat12 },
  { name: 'Custard apple', items: 10, image: cat1 },
  { name: 'Coffe & Tea', items: 11, image: cat9 },
];

  function FeaturedCategories (){
  return (
    <div className="featured-categories">
      <h2>Featured Categories</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <div className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

  function Home() {
  return (
    <div>
      <div className="Banner">
        <div className="image">
          <img src="https://nest.whatsmenu.page/uploads/restorants/28172315-3e1a-40d4-aca5-6628f5573b2a_cover.jpg" alt="" />
        </div>
        <div className="form">
          <form>
            <input id="Email" type="email" name="EMAIL" placeholder="Your email address" />
            <input id="subscribe" type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <FeaturedCategories />
    </div>
  );
};

export default Home;
