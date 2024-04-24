// Product.js
import React, { useState, useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import SingleProduct from './SingleProduct';
import { IoIosSearch } from "react-icons/io";

const Product = () => {
  const { products } = useProductContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filtered products whenever the search query or category filter changes
  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, products]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
        className="SearchInput"
      />

      <select value={categoryFilter} onChange={handleCategoryChange} className="select">
        <option value="">All Categories</option>
        <option value="Sushi">Sushi</option> 
        <option value="Rolls">Rolls</option>
        <option value="Salads">Saleds</option>
        {/* Add more category options as needed */}
      </select>

      <div className="products">
        {filteredProducts.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
