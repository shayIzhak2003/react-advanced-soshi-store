// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import products from './products.json';
import { ProductProvider } from './context/ProductContext';
import Error from './components/Error';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';

function App() {
  console.log(products);
  return (
    <ProductProvider products={products}>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="/" element={<div className="main"><Product /></div>} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </ProductProvider>
  );
}

export default App;
