// SingleProduct.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiTwotoneInfoCircle } from "react-icons/ai";

const SingleProduct = (props) => {
  const { product } = props;
  const { addToCart } = useProductContext();
  const { addToFavorites } = useProductContext();

  return (
    <div className="product" key={product.id}>
      <img src={product.image} alt={product.title} title={product.title} />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="price" style={{color:'green', fontSize: '25px'}}>${product.price}</span>
          <button onClick={() => addToCart(product)}>
            <FaShoppingCart />{' '}
          </button>
          <button onClick={() => addToFavorites(product)}>
            <FaHeart />
          </button>
          <Link to={`/product/${product.id}`} style={{ fontSize:"20px" }}><AiTwotoneInfoCircle /></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
