import React from "react";
import { Link } from "react-router-dom";
import homeBtn from "../assets/home-btn.png";
import logo from "../assets/logo4.png";

const Header = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo-header">
                    <img src={logo} alt="logo" />
                </div>
                <Link to="/">
                    <img className="homeBtn" src={homeBtn} alt="home-button">
                    </img>
                </Link>
            </nav>
        </>
    );
};
export { Header };
