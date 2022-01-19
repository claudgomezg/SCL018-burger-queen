
// import { Link } from "react-router-dom";
import { Header } from "./Header";
import MenuOrder from "./Order";
import React from "react";

const Waitress = () => {
    return (
        <>
        <div className="waitress-container">
        <Header/>{/*componente header */}
        <MenuOrder/>
        
        </div>
        </>
    );
};

export default Waitress;