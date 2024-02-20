
import React from "react";
import products from "./data";

const ProductDetail = ({ match }) => {
  const productId = parseInt(match.params.productId); // Obtenemos el id del producto de los parámetros de la URL
  const product = products.find(product => product.id === productId); // Buscamos el producto por su id

  if (!product) {
    return <div>Producto no encontrado</div>; // Manejamos el caso en el que el producto no exista
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      {/* Agrega más detalles del producto según sea necesario */}
    </div>
  );
};

export default ProductDetail;
