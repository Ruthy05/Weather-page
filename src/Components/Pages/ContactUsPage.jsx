import React from "react";
import NavBar from "../NavBar.jsx"
import ContactComponent from "../ContactComponent.jsx"
import SectionNine from "../SectionNine.jsx";
import SectionTen from "../SectionTen.jsx";
import SectionEleven from "../SectionEleven.jsx";
export default function ContactUsPage(props){
  return(
<>
<NavBar/>
<div className="hero" style={{height:"10px",}}>
  <ContactComponent
title={<>Contact us</>}
    />
  
    <SectionNine/>
    
    <SectionTen/>
     <SectionEleven
          subText={<> Copyright © CapSure 2022</>}
          />
         

</div>

</>

  );
}