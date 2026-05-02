import React from 'react';

function Hero() {
  return ( 
    <section className='container-fluid' id='supportHero'>
      <div className='pt-5' id='supportWrapper'>
        <h4>Support Portal</h4> 
        <a href='/support' style={{ color: "white" }}>Track Ticket</a>
      </div>

      <div className='row p-3 m-3'>
        <div className='col-6 p-5'>
          <h1 className='fs-3 p-2'>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input 
            placeholder='Eg. how do I activate F&O' 
            className='p-2'
          />

          <br />

          <a href='/support' style={{ color: "white" }} className='p-2'>
            Eg. how do I activate F&O, Track account opening, Segment activation, Intraday margins, Kite user manual
          </a>
        </div>

        <div className='col-6 p-5'>
          <h1 className='fs-3'>Featured</h1>

          <a href='/support' style={{ color: "white" }}>
            1. Current Takeovers and Delisting - January 2024
          </a>

          <br />

          <a href='/support' style={{ color: "white" }}>
            2. Latest Intraday leverages - MIS & CO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;