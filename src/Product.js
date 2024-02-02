// src/Product.js
import React from 'react';

const Product = ({ name, price, imageUrl, onAddToCart }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default Product;
