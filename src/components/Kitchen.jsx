import React from "react";
import { Link } from "react-router-dom";
import cocina from "../assets/cocina.jpg";

const Kitchen = () => {
    return (
        <>

            <div className="kitchen-container">
                <Link to="/"><button className="back-button">Atrás</button></Link>
            </div>
            <div className="kitchen-container">
                <img src={cocina} alt="cocina" />
            </div>
        </>
    );
};

export default Kitchen;