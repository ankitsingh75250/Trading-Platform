import React from 'react'
import { Link } from 'react-router-dom';


function Hero() {
    return ( 
     <div className='container w-75 h-50 mb-5'>
          <div className='row text-center'>
               <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />               
               <h1 className='pt-2'> Invest in everything </h1>
               <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
               <Link className='p-2 btn btn-primary fs-5 mb-4 mt-2' to="/signup" style={{width:"20%",margin:"0 auto"}}>Signup Now </Link>
          </div>
     </div>
         );
}

export default Hero;