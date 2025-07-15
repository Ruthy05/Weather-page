import React from 'react';
export default function SectionSix({ backgroundImage, subText1,subText2 }){



    const whiteBoxImageStyle = {

       backgroundSize: 'cover',
      width:'390px',
      height:'200px',
      float: 'left',
       backgroundImage: `url(${backgroundImage})`, 
        
     };

      const whiteBoxStyle = {

        width:'300px',
        height:'463px',
        borderRadius: '5px',
        paddingRight: '90px',
        paddingBottom: '24px',
        marginLeft:'-15px',
        marginRight:'30px',
        gap: '10px',
        float: 'left',
        marginTop:'10px',
    };
      

    return(
<>

    <div className="white-box">
     <div style={whiteBoxStyle}>
    
     <div className="white-box  three">
     <div style={whiteBoxImageStyle}>
        <p class="first-paragraph">{subText1}</p>
<p class="second-paragraph">{subText2}</p>
   
<div>
<span class="john-pics"></span>
<img src="/image/john.png" alt="john"/>
<span class="text-layout">JohnBirmingham 25 December 2019</span>
</div>
</div>

    
     </div>
     </div>
     
  </div>
  


 





</>




    );
}
//<h1 class="capsure-blog" >{title}</h1>
//<div className="second-wrapper">