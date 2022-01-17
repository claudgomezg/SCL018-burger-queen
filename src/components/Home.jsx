import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className="m-20">
                <div className="flex justify-center space-x-10">
                    <Link to="/waitress"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">Waitress</button></Link>
                    <Link to="/kitchen"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">Kitchen</button></Link>
                </div>
            </div>
        </>
    );
};

export default Home;