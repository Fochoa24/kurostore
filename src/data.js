
const getProducts = () => {
    return new Promise((resolve, reject) => {
      // Simulando una solicitud asíncrona
      setTimeout(() => {
        const products = [
          { id: 1, name: 'Producto 1', category: 'Categoria 1', price: 10 },
          { id: 2, name: 'Producto 2', category: 'Categoria 2', price: 20 },
          { id: 3, name: 'Producto 3', category: 'Categoria 1', price: 15 },
          // Agrega más productos según sea necesario
        ];
        resolve(products);
      }, 1000); // Simulamos un tiempo de carga de 1 segundo
    });
  };
  
  export default getProducts;
  