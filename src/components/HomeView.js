import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/home.scss';


export const HomeView = () => {

  const illustration ='assets/img/285.svg';

  return (
    <div className='home-cont'>
    
    <section className='home-text-cont'>
        <h3>Welcome to</h3>
        <h1>NeoBANKS</h1>
        <img src={illustration}></img>
        <h3>Your finances on your divace</h3>
    </section>
   
    <Link to="/Transactions" className="home-link-cont appear">
            <h1>Discover</h1>  
    </Link>
    
    </div>
  )
}
