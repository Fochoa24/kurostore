import React from "react";
import './App.css';
import Navbar from "./navbar";
import ItemListContainer from "./Itemlistcontainer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;