import React from 'react'

function Education () {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col'>
              <img src='media\images\education.svg' style={{width:"80%"}}/>
            </div>
            <div className='col'>
              <h1 className='fs-3'>Free and open market education</h1>
              <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-right-long"></i></a>
              <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='' style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-right-long"></i></a>
            </div>
          </div>
        </div>
      );
}

export default  Education;