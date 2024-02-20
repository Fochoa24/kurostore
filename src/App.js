
import React from "react";
import './App.css';
import Navbar from "./navbar";
import ItemListContainer from "./Itemlistcontainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Importamos BrowserRouter y las utilidades de React Router

const App = () => {
  return (
    <Router> {/* Envuelve toda la aplicación con el componente Router */}
      <div className="app">
        <Navbar />
        <Switch> {/* Utilizamos Switch para que solo una ruta se renderice a la vez */}
          <Route exact path="/" component={ItemListContainer} /> {/* Ruta para el catálogo principal */}
          {/* Ruta para el catálogo filtrado por categorías */}
          <Route path="/category/:categoryName" render={(props) => <ItemListContainer {...props} />} />
          {/* Ruta para la vista en detalle de un producto */}
          <Route path="/product/:productId" render={(props) => <ProductDetail {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
