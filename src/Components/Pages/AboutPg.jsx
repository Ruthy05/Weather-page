import React from "react";
import SectionNine from "../SectionNine.jsx";
import SectionTen from "../SectionTen.jsx";
import SectionEleven from "../SectionEleven.jsx";
import HeroSection from "../HeroSection.jsx";
import SureTreeTechImg from "../SureTreeTechImg.jsx";
import SectionFive from "../SectionFive.jsx";


export default function AboutPg() {
  const secondBox = [
    {
      title: "Sure Tree Technologies",
     subText:"Suretree provides omni-channel solutions that transform customer experiences and strengthen engagement throughout the entire customer lifecycle. These platforms address key digitisation, operational efficiency, and customer experience challenges through a suite of plug-and-play, integrated, SaaS software and technology solutions.",
     backgroundImage: "/image/sure-tree.png",
     align:"left",
   },
   {
  title: "Delivering Excellence",
 subText:"Our quality-centric, scalable software solutions drive your core business operations efficiently and safely. CapSure solutions are engineered in compliance with industry standards, supported by a secure, integrated infrastructure and developed by industry-savvy business analysts and architects.",
 backgroundImage: "/image/excellence.png",
 align:"right",
   },
  ]
  return (
    <>
       {/* FetchAbout now acts fully like Hero Section */}
       <HeroSection
               title={"About CapSure"}
               subText="CapSure is a wholly-owned subsidiary of Suretree Technologies. Suretree Technologies is a customer engagement technology provider serving the financial services industry in Africa."
               image={null}
               backgroundImage="./image/About-backGround.png"
             />
       
       {/* <AboutComponent
        ImageUrl="./image/About-backGround.png"
        title="About CapSure"
        subText="CapSure is a wholly-owned subsidiary of Suretree Technologies. Suretree Technologies is a customer engagement technology provider serving the financial services industry in Africa."
      /> */}



      {/* Other About Page content continues */}

      <div className="second-box">
  {secondBox.map((e, index) => (
    <SureTreeTechImg
      key={index}
      title={e.title}
      subText={e.subText}
      backgroundImage={e.backgroundImage}
      align={e.align}
    />
  ))}
</div>



      {/* Third Box Section */}
      <div className="Third-image-section">
        <h1 style={{paddingLeft:"159px"}}>
          “Enable customer retention and success by putting actionable customer data right at your fingertips. Customer service representatives can instantly 
           a record of every interaction a customer has had with you across all channels...”
        </h1>
       
        <span className="bottom-button">Request a demo</span>
      </div>
      <div className="section5" style={{height:"600px"}}>
<SectionFive 
        title={<> Our Partners </>}
        subText={
          <>
           
            We deliver everything our partners need to build and distribute
            <br />
            their products, creating immediate gains that strengthen market
            <br />
            position and customer value.
          </>
        }
      />
      </div>

      {/* Footer Sections */}
     
      <SectionNine title={<>Get in touch</>} subText={<>Submit</>} />
      
      <SectionTen />
      <SectionEleven
      subText={<> Copyright © CapSure 2022</>}
      />
    </>
  );
}
