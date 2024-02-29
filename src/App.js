
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import ProductDetail from './ProductDetail';
import getProducts from './data';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <ItemListContainer products={products} />} />
          <Route path="/category/:categoryName" render={({ match }) => <ItemListContainer match={match} products={products} />} />
          <Route path="/product/:productId" render={({ match }) => <ProductDetail match={match} products={products} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
