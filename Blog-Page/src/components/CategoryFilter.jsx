import React from 'react';

const CategoryFilter = ({ categories }) => {
  return (
    <div id="categories">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <a href={`#`} className="category-pop">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
