// ProductInfo.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { Link, useParams } from 'react-router-dom';
import './style/ProductInfo.css'; 
import Accordion from './Accordion';
import { Button } from 'antd';


const ProductInfo = () => {
  const { products } = useProductContext();
  const { id } = useParams();
  
  const product = products.find((product) => product.id === parseInt(id));
  // random number between 1-100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
         alert(`the user coordinnce are ${longitude},${latitude}`)
          // You can use latitude and longitude values as needed
        },
        (error) => {
        alert(`Error getting user location: ${error}`);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, title, description, price } = product;

  return (
    <div className="product-info-container">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <Accordion title="Product Description & Time Of Delivery!" content={`${description}, ${randomNumber+":minutes (intill delivery time!)"}`} />
      <p className="price">Price: ${price.toFixed(2)}</p>
      <Link to="/" style={{margin:"10px"}}> back To Home</Link>
      <Button onClick={getUserLocation}>Get Location!</Button>
    </div>
  );
}; 

export default ProductInfo;
