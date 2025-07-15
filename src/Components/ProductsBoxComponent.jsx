import React from 'react';
export default function ProductsBoxComponent({ backgroundImage,title,subText }){



    const whiteBoxImageStyle = {

       backgroundSize: 'cover',
      width:'310px',
      height:'200px',
      float: 'left',
       backgroundImage: `url(${backgroundImage})`, 
        
     };

    
      

    return(
<>

    <div className="Product-box">
    
      
    
     <div className="Product-box  firststage">
     <div style={whiteBoxImageStyle}>
        <h2 className="product-title">{title}</h2>
<p className="product-subText">{subText}</p>
   

</div>

    
     </div>
     </div>
     
  
  


 





</>




    );
}
//<h1 class="capsure-blog" >{title}</h1>
//<div className="second-wrapper">
//<img src="./image/CapsureProduct.png"  alt="capsure product"/>//
