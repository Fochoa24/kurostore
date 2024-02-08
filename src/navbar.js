import React from "react";
import CartWidget  from "CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">KuroStore</div>
            <ul className="menu">
                <li><a href="#">Categoría 1</a></li>
                <li><a href="#">Categoría 2</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
};

export default  Navbar;
