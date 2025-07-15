import React from "react";
export default function SecondBoxSection(props) {
  
    return (
        <>
       <div className="second-shadow-box">
        <div className="second-shadow-box three">
        <img src={props.image} alt="icon"/>
           <h1>{props.title}</h1>
           <p>{props.subText}</p>
           </div>
   
</div>

            
           
  
    

</>

    );
}

    