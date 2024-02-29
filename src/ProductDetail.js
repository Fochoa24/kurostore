
import React from "react";

const ProductDetail = ({ match, products }) => {
  const productId = parseInt(match.params.productId);
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
