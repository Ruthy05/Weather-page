import React from 'react';
export default function SectionNine(props){
    return(
<>

<div className="section9">
    
    <div className="layer-view">

        <h4 className="section-nine">{props.title}</h4>
        
        
        
            <div className="social-text">
            
                <span className="local-phone"> <img src="image/Localphone (2).png" alt="localPhone"/></span>
                         <span className="contact">
        
                     <b> 01 279 8800 </b>
                        </span>
                     
                <span   className="mail"> <img src="image/mail.png" alt="mail" /></span>
                        <span className="contact">
                            <b>info@suretree.com </b> 
                             </span>
            
                    
                   <span className="vector" > <img src="image/vector.png" alt="vector"/></span>
                        <span className="contact">
                          <b>27 Commercial Avenue<br/> 
                           Sabo, Yaba, Lagos</b></span>
            
            
        <span className="Connect">Connect with us</span>
                           <span className="social-media">
                            <img src="/image/facebook.png" alt="facebook"/>
                            <img src="/image/instagram.png" alt="instagram"/>
                            <img src="/image/twitter.png" alt="twitter"/>
                        </span>
                        
                        </div> 
                        <div className="second-layer">
                    
    </div>
    </div>
                        
            
        
    

    <div className="multicolored-frame" >
        <h3 className="bold-text" >Your name</h3>
<div className="border-style"></div>
   <h3 className="bold-text">Email/Address</h3>   
        <div className="border-style"></div>
            
       <h3 className="bold-text">Message</h3>
 <div className="border-style2"></div>
       
              <div className="btn">
                <p>{props.subText}</p>
              </div>
              
           

               
    </div>
 
</div>
 
 
        


</>



    )
}