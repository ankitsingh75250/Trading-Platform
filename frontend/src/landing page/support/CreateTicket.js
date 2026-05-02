import React from 'react'

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 '>
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                </div>
                <div className='row p-5 fs-6'>
                <div className='col-4'>
                    <h4 className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <div className='p-3'>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF Account</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>
                    </div>
                </div>
                <div className='col-4 ml-5'>
                    <h4 className='fs-5'><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <div className='p-3 '>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Login Credential</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification and Segment Addition</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>DP ID and Bank details</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
                    </div>
                </div>
                <div className='col-4 ml-5'>
                    <h4 className='fs-5'><i class="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha Account</h4>
                    <div className='p-3'>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Margine/leverage,Product and Order types</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite Web and Mobile</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Coporate Actions</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Sentinel</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite API</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Pi and other platform</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>Stoclreporte+</a><br/>
                    <a href='/signup' style={{textDecoration:"none", lineHeight:"2.5"}}>GTT</a><br/>
                    </div>
                </div>
            
        </div>
        
        </div>
     );

}

export default CreateTicket;