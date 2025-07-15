import React from "react";

export default function CapsureLoanImg(props) {
 
    

    return (
        <>
            <div style={{ width: "1440px", display: "flex", alignItems: "center" }}>
                {/* Two images in the same line using flexbox */}
                <div className="product-image"></div>
                <div className="CapsureLoan-img" style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", padding: "10px",
                   backgroundColor:"white",width:"310px",height:"400px", margin:"70px", }}>
                    <h2>{props.title}</h2>
                    <p>{props.subText}</p>
                </div>
            </div>
        </>
    );
}


  