// src/App.js
import React, { useState } from 'react';
import './App.css';
import Product from './Product';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (query) => {
    console.log(`Buscando productos con: ${query}`);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  const products = [
    { id: 1, name: 'Product 1', price: 20, imageUrl: 'https://placekitten.com/200/200' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'https://placekitten.com/201/200' },
    { id: 3, name: 'Product 3', price: 25, imageUrl: 'https://placekitten.com/202/200' },
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">KuroStore</div>
          <div className="search">
            <input type="text" placeholder="Buscar productos..." onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="cart">
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </nav>
      </header>
      <main>
        <h1>Bienvenido a KuroStore</h1>
        <div className="product-list">
          {products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
