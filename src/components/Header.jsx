import '../components.css';
import { Link } from "react-router-dom";
import React, { Fragment } from 'react';
import logo from "../images/logo.png";


const Header = () => {
    return (
      <Fragment>
       <Link to="/">
       <img className="header_logo" src= {logo} alt="page logo" /></Link>
      </Fragment>
    );
  }
  
  export default Header;