import React from "react";
import { Link } from "react-router-dom";
import cocina from "../assets/cocina.jpg";

const Kitchen = () => {
    return (
        <>

            <div className="kitchen-container">
                <Link to="/"><button className="back-button">Atrás</button></Link>
            </div>
            <div className="meme">
                <img src={cocina} alt="cocina" id="meme" />
            </div>
        </>
    );
};

export default Kitchen;