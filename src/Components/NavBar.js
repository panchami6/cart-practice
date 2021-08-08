import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

export const NavBar = () => {
    return (
        <div>
            <nav className = "nav-bar">
                <ul className = "nav-components">
                <li className = "header">Flipkart</li>
                <Link style = {{textDecoration: "none", color:"white"}} to = "/"><li className = "nav-list">Products</li></Link>
                    <Link style = {{textDecoration: "none", color:"white"}} to = "/cart"><li className = "nav-list">Cart</li></Link>
                </ul>
            </nav>
        </div>
    )
}


