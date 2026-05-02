import React from "react";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col p-5">
            <img src={imageURL} style={{width:"100%"}} />
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col p-5 " >
            <h1 className="fs-4" >{productName}</h1 >
            <p className="fs-9 text-muted">{productDescription}</p>
            <div className="pt-2"><a href={tryDemo} style={{textDecoration:"none"}} >Try Demo  <i class="fa-solid fa-right-long"></i></a>
            <a href={learnMore} style={{textDecoration:"none",margin:"50px"}}> Learn More  <i class="fa-solid fa-right-long"></i></a></div>
            <div className="pt-5"><a href={googlePlay}><img src="media\images\googlePlayBadge.svg" /></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media\images\appstoreBadge.svg" /></a></div>
            
            
            
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
