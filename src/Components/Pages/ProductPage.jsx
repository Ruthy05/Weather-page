import React from "react";
import HeroSection from "../HeroSection.jsx";
import ProductsBoxComponent from "../ProductsBoxComponent.jsx";
import CapsureLoanImg from "../CapsureLoanImg.jsx";
import SectionNine from "../SectionNine.jsx";
import SectionTen from "../SectionTen.jsx";
import SectionEleven from "../SectionEleven.jsx";
export default function ProductPage () {





  const   sixthBox = [
  
     
    {
      backgroundImage: "/image/Banks.png",
        title:
         "capsure banks",
        
        subText:
         "Harness the power of digitization through satisfaction-building experiences and frictionless onboarding and end-to-end customer journeys.",
      },
      {
        backgroundImage: "/image/insurance.png",
          title:
           "capSure Insurance",
          
          subText:
           "CapSure assists insurers in channeling the potential of automation via experiences that enhance customer’s experience including Policy Purchase and Premium Collection.",
        },
  
        {
          backgroundImage: "/image/Health.png",
            title:
             "capSure Health",
            
            subText:
             "Through experiences that increase user preference, such as claim administration and policy renewals, CapSure enables users to take advantage of the agility of digitization.",
          },
    ];

  const thirdBox = [
//{
  
     // title: "Campaign Management",
     // subText:
      //  "Setup communication chains using the simple visual campaign designer, define conditions for transition between stages and monitor progress.",
   // },
    {
      backgroundImage: "/image/CapsureCollections.png",
      title: "Digital onboarding",
      subText:
        "CapSure platform delivers a frictionless solution for financial institutions to on the new individual and small business customers through both online and mobile channels.",
    },
    {
      backgroundImage: "/image/CapsureFinMangt.png",
      title: "Product Management",
      subText:
        "CapSure will help you manage the lifecycle of all your products and services profitably.",
    },

    {
      backgroundImage: "/image/CapsureWealth.png",
      title: "Data insights",
      subText:
        "CapSure redefines the customer journey and experience by capturing a multitude of data points every step of the way.",
    },
  ]
  return (
    <>
    
    <HeroSection
      title={<>Our Products</>}
      subText="CapSure’s industry-leading software helps you innovate,
      automate, deliver better customer experiences, and adapt which is essential to today’s
         environment of competition, regulations, and evolving market forces."
         image="/image/Frame.png"
         />
<div className="Product-section">
    <div className="second-wrapper">
        {sixthBox.map((e,index) => (
            <ProductsBoxComponent
            key={index}
            backgroundImage={e.backgroundImage}
              title={e.title}
              subText={e.subText}
            />
          
          ))}
         </div>
         </div>
         


          <div className="section3">
                 <div className="wrapper-flex">
                 <CapsureLoanImg
                 title={<>Campaign Management </>}
                 subText="Setup communication chains using the simple visual campaign designer, 
                 define conditions for transition between stages and monitor progress."
                 />
                   {thirdBox.map((e, index) => (
                      
                     <ProductsBoxComponent
                       key={index}
                       backgroundImage={e.backgroundImage}
                       title={e.title}
                       subText={e.subText}
                     />
                   ))}
                   </div>
                   </div>
                
                             
          <div class="Third-image-section" >
<h1>“A state-of-the-art digital onboarding experience that needs to match the expectations of the online consumer community while maintaining fiscal standards. Increase revenues through cross and up-selling, and the introduction of new streams”</h1>
<span class="bottom-button" >Request a demo</span> 
</div>    
  

  <SectionNine/>
  <SectionTen/>
  <SectionEleven
  subText={<> Copyright © CapSure 2022</>}

    />
</>
  );
};


