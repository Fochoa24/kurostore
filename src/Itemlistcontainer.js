
import React from "react";
import products from "./data";

const ItemListContainer = ({ match }) => {
  const category = match.params.categoryName; // Obtenemos el nombre de la categoría de los parámetros de la URL

  // Filtramos los productos por categoría
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
            {/* Agrega más información del producto o enlace al detalle del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
