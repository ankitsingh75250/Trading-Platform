import React from 'react'

function Brokerage() {
    return ( 
        <div className='row p-5 mt-5 '>
            <div className='col-8 p-4'>
                <a href='' style={{textDecoration:"none"}}><h3 className='fs-5 text-center'>Brokerage calculator</h3></a>
                <ul className='p-5'>
                    <li className='p-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50+GST per order</li>
                    <li className='p-2'>Digital contract notes will be sent via e-mail</li>
                    <li className='p-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className='p-2'>For NRI account (non-PSI), 0.5% or  ₹100 per executed order for equity (whichever is lower).</li>
                    <li className='p-2'>For NRI account (non-PSI), 0.5% or  ₹200 per executed order for equity (whichever is lower).</li>
                    <li className='p-2'>If the account is in debit balance,any order placed will be charged  ₹40 per executed order insted of  ₹20 p;er executed order.</li>
                </ul>
            </div>
            <div className='col-4 p-4'>
                <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
            </div>
        </div>
    );
}

export default Brokerage; 