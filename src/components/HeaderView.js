import React from 'react';
import './../styles/header.scss';
import { Link } from 'react-router-dom';

export const HeaderView = () => {

    const logo = 'assets/img/logo.svg';

  return (
    <div className='header-cont'>

        <Link to="/Home" className="logo-cont">
        <img className='header-logo' src={logo}></img>  
        </Link> 
   
    
    
    </div>
  )
}
