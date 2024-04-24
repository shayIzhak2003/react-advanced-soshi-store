import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children, products }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [quantity, setQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem('cartQuantity');
    return storedQuantity ? JSON.parse(storedQuantity) : {};
  });

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToCart = (product) => {
    alert(`The item ${product.title} SN:${product.id} added to the cart!`);
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem) {
        
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
       
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });

    
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [product.id]: (prevQuantity[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  
  
  
  };
  const removeFromFavorites = (itemId) => {

          setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
  };
  
 
  const removeAllFromCart = () => {
    if(cartItems == 0){
      alert("Your cart is empty!");
    }else{
      
       setCartItems([]);
      
    }

    
  };
  
  const removeAllFromFavorites = () => {
    if(favorites == 0){
      alert("your favorites section if ampty!")
    }
    }
  
  
  
  

  const addToFavorites = (product) => {
    const index = favorites.findIndex((p) => p.id === product.id);
    if (index === -1) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
      alert(`The product ${product.title}, SN:${product.id} added to favorites!`);
    } else {
      alert(`The product ${product.title}, SN:${product.id} is already in your favorites!`);
    }
  };

  // Save cartItems, quantity, and favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartQuantity', JSON.stringify(quantity));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [cartItems, quantity, favorites]);

  return (
    <ProductContext.Provider value={{ products, cartItems, addToCart, removeFromCart, quantity, setQuantity, favorites, setFavorites, addToFavorites, removeFromFavorites , removeAllFromCart, removeAllFromFavorites}}>
      {children}
    </ProductContext.Provider>
  );
};
