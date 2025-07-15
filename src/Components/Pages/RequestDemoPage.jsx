import React from "react";
import RequestDemoComponent from "../RequestDemoComponent.jsx";
import NavBar from "../NavBar.jsx";
export default function RequestDemoPage(props){
return(
<>
<NavBar/>
<RequestDemoComponent
title={<>Request Demo</>}
subText="Start your experience with CapSure.
            We just needed a little information to make sure you<br> get exactly what you require"

/>



</>




);
}