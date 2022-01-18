import React from "react";
import logo from "../assets/logo4.png";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
    return (
        <>
            <div className="menu-container">
            <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="button-menu">
                    <Link to="/waitress"><button className="home-button">Pedidos</button></Link>
                    <Link to="/kitchen"><button className="home-button">Cocina</button></Link>
                </div>
            </div>
        </>
    );
};

export default Home;