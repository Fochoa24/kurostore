
import React from "react";

const ItemListContainer = ({ match, products }) => {
  const category = match.params.categoryName;
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="item-list-container">
      <h1>{category ? `Productos de ${category}` : "Todos los productos"}</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
