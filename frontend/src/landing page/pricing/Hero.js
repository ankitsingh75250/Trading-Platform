import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5">
        <h1 className="fs-3 p-2 mt-5">Charges</h1>
        <h4 className="fs-5 text-muted pt-3">List of all charges and taxes</h4>
      </div>
      <div className="row text-center mt-3 p-5">
        <div className="col-4 ">
          <img src="media\images\pricing0.svg" className="w-75 h-50" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted fs-6 mt-4"> 
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\intradayTrades.svg" className="w-75 h-50"/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-6 mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing0.svg" className="w-75 h-50" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted fs-6 mt-4">
           All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
