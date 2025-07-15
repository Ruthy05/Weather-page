import React from "react";
import NavBar from "./NavBar.jsx";
export default function HeroSection(props) {
  return (
    <>
    <div className="container">
      <div className="hero" style={props.backgroundImage?{backgroundImage: `url(${props.backgroundImage})`}:null}>
        
      
      <NavBar />
     
  
        
         {/*hero text*/}
        <div className="hero-left">
          <h1>{props.title}</h1>
          <p>{props.subText}</p>
        
        {/*button-box*/}
        <div className="button-box">
        <span>Request a demo</span>
        </div>

       {/*image at the right*/}
</div>
        <div className="hero-right">
          {props.image? <img src={props.image} alt="hero-vector" />:null}
        </div>
      </div>
    
  </div>
  
    </>

    
  );
}
    
//<a href={props.demoLink}  //
//{props.button}></a></div>//
