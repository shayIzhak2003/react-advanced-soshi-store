import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { IoHeartDislikeOutline } from "react-icons/io5";
import { Button } from 'antd'; // Import Button from antd
import "./style/Favorites.css";

const Favorites = () => {
  const { favorites, removeFromFavorites, removeAllFromFavorites, setFavorites } = useProductContext();

  const handleRemoveAllFromFavorites = () => {
    if(favorites == 0){
      removeAllFromFavorites();
      return;
    }
    const choice = window.confirm(`Are you sure you want to remove all items from the favorites section?`);
    if (choice) {
      setFavorites([]);
    } else {
      alert("Action canceled! Favorites will not be removed.");
    }
  };
  

  return (
    <>
      <h2 className="fav-title">Favorites</h2>
      <div className="fav-container">
        <div className="favorites-container">
          {favorites.length ? (
            favorites.map((product) => (
              <div key={product.id} className="fav-item">
                <div className="fav-product">
                  <p>{product.title} SN:{product.id}</p>
                  <img src={product.image} alt={product.title} />
                  <Button className="favButton" onClick={() => removeFromFavorites(product.id)} danger><IoHeartDislikeOutline /></Button>
                </div>
              </div>
            ))
          ) : (
            <p className="nothingInCart">You have no favorites yet.</p>
          )}
        </div>
        <Button onClick={handleRemoveAllFromFavorites}>Remove All</Button>
      </div>
      
    </>
  );
};

export default Favorites;
