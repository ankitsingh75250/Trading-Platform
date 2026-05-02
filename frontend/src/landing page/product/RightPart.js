import React from 'react'

function RightPart({
    imageURL,
  productName,
  productDescription,
  learnMore,
}) {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col p-5'>
                     <h1 className='fs-3 pt-5 mt-5'>{productName}</h1>
                    <p className='text-muted' >{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more  <i class="fa-solid fa-right-long"></i></a>
                   
                </div>
                <div className='col '>
                    <img src={imageURL} style={{width:"105%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightPart;