import React from "react";
export default function ContactComponent(props){
  return(
<>

<div className="hero" style={{height:"300px"}}>
    <div className="title">
<h1>{props.title}</h1>
</div>

  <div className="middle-side">
        <div class="row">
            <div class="column1" style={{width:"300px"}}>
              <h2>Address:</h2>
              <p >256 Muritala Mohammed Way Yaba<br/>Lagos</p>
                
                
                    
            </div>
            <div class="column2"  style={{width:"300px"}}>
              <h2>Website: </h2>
              <p style={{marginLeft:"80px"}}>www.capsure.tech</p> 
             
              
            </div>
            <div class="column3" style={{width:"300px"}}>
              <h2>Contact us</h2>
              <p style={{marginLeft:"80px"}}>09090777042 <br/>info@capsure.tech</p>
            </div>

</div>
</div>

</div>



</>

  );
}