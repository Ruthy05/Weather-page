import React from 'react' ;
export default function SectionFive(props){
return(
<>

<div className="section5">
        <div className="top">
        <h5>{props.title}</h5>
            <p className="nextwriteup" >{props.subText}</p>
        </div>
        <div className="right-tower-image1" >
            <img src="/image/tower.png"alt="tower"/>     
        </div>
        <div className="right-partners-image1">
            <img src="/image/partners.png"alt="partners"/>
        </div>
     </div>
        

     
    
    

</>


);

}
