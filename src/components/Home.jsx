import React from 'react';
import '../components.css';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Home = () => {

    return (
        <div className="menu-container">
        <div className="logo-home">
                <img src={logo} alt="logo" />
            </div>
            <div className="button-menu">
                <Link to="/waitress"><button className="home-button">Pedidos</button></Link>
                <Link to="/kitchen"><button className="home-button">Cocina</button></Link>
            </div>
        </div>
    )
}

export default Home;
