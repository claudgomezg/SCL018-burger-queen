import React from "react";
import { Link } from "react-router-dom";
import mesera from "../assets/mesera.jpg";

const Waitress = () => {
    return (
        <>
            <div className="waitress-container">
                <Link to="/"><button className="back-button">Atrás</button></Link>
            </div>
            <div className="waitress-container">
                <img src={mesera} alt="mesera" />
            </div>
        </>
    );
};


export default Waitress;