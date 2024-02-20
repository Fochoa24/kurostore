
import React from "react";
import { Link } from "react-router-dom"; // Importamos Link de React Router
import CartWidget from "./CartWidget"; // Corregimos la ruta del import

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">KuroStore</div>
            <ul className="menu">
                {/* Enlaces para las diferentes categorías */}
                <li><Link to="/">Catálogo Principal</Link></li>
                <li><Link to="/category/categoria1">Categoría 1</Link></li>
                <li><Link to="/category/categoria2">Categoría 2</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
};

export default Navbar;
