import React from "react";
export default function CapsureBoxes({ backgroundImage, title, subText }) {

   const imageBoxStyle = {

      width:'411px',
      height:'345px',
      borderRadius:'24px',
      float:'left',
      marginRight: '15px',
      marginBottom: '15px',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition:'center',
      backgroundImage: `url(${backgroundImage})`, 
    };

return(
<>
<div className="capsure-box">
    <div style={imageBoxStyle}>
      <div className="gradientcolour">
        <div className="text-block">
        <h3>{title}</h3>
        <p>{subText}</p> 
        </div>
      </div>
    </div>
    </div>
  
    </>
  );
}

      
   
 
   
  
   


    

//<div className="image-box">
  // <div className="gradientcolour">     
 // < div
      // style={{
       //  ...imageBoxStyle,
       //  backgroundImage: 'url(../image/)',
      // }}
    // >
    //  </div>
//</div>
//</div>