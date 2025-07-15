import React from "react";
import NavBar from "./NavBar";
export default function AboutComponent(props) {
  return (
<>
<NavBar/>
    <div className="fetch-about">
        <div className="hero-left" style={{paddingLeft:"80px", paddingTop:"150px"}}>
      <h1> {props.title}</h1>
      <p>{props.subText}</p>
      
    </div>
    </div>

    </>
  );
}
