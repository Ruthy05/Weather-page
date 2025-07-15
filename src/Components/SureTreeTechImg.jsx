import React from "react";
export default function SureTreeTechImg (props){
    const isImageRight = props.align === "right";
    return(
      <>
       
    <div
      style={{
        display: "flex",
        flexDirection: isImageRight ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 110px",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {/* Image Section */}
      <div style={{ width:"45%", textAlign: isImageRight ? "right" : "left" }}>
        <img
          src={props.backgroundImage}
          alt="..."
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}
        />
      </div>

      {/* Text Section */}
      <div className="text" style={{ width:"50%" }}>
        <h1>{props.title}</h1>
        <p>{props.subText}</p>
      </div>
    </div>

   
</>


    )
  }


//<div className="second-box-positioning2">
//<span class="text">
          // <span style={{ position: "relative", float: "left", marginLeft: "70px" }}>
         //   <img src={props.image} alt="Excellence" />
         // </span>
       // </span>
      //  </div>
     // <img src={props.image} alt="img"/>