import React from "react";
import HeroSection from "../HeroSection.jsx";
import SecondHeroSection from "../SecondHeroSection.jsx";
import SecondBoxSection from "../SecondBoxSection.jsx";
import Capsure from "../Capsure.jsx";
import ThirdBoxSection from "../ThirdBoxSection.jsx";
import Rectangle from "../Rectangle.jsx";
import Product from "../Product.jsx";
import SectionFour from "../SectionFour.jsx";
import SectionFive from "../SectionFive.jsx";
import SectionSix from "../SectionSix.jsx";
import ButtonBox from "../ButtonBox.jsx";
import Questions from "../Questions.jsx";
import SectionEight from "../SectionEight.jsx";
import SectionEightBox from "../SectionEightBox.jsx";
import SectionNine from "../SectionNine.jsx";
import SectionTen from "../SectionTen.jsx";
import SectionEleven from "../SectionEleven.jsx";
import ImageBoxSeven from "../ImageBoxSeven.jsx";


export default function HomePage() {
  
    const secondBox = [
      {
        title: "Revenue increase",
        subText:
          "A state-of-the-art digital onboarding experience that needs to match the expectations of the online consumer standards. Increase revenues through cross and up-selling, and the introduction of new streams",
        image: "/image/revenueicon.png",
      },
      {
        title: "Real-time Data",
        subText:
          "Uniquely designed to support a full range of customer engagement activities, the components share real-time data across business functions to respond to customers' needs promptly",
        image: "/image/realicon.png",
      },
      {
        title: "Easy Launching",
        subText:
          "Easily launch new loan products and handle loans, savings, investments, pensions, insurance and health insurance policies",
        image: "/image/easyicon.png",
      },
    ];
  
    const thirdBox = [
      {
        backgroundImage: "/image/cust-eng.png",
        title: "Customer Engagement",
        subText:
          "CapSure CX delivers a suite of integration solutio that span the customer lifecycle to create a more engaging customer experience.",
      },
  
      {
        backgroundImage: "/image/camp-mang.png",
        title: "Campaign Management",
        subText:
          "Setup communication chains using the simple visual campaign designer, define conditions for transition between stages and monitor progress.",
      },
      {
        backgroundImage: "/image/digital.png",
        title: "Digital onboarding",
        subText:
          "CapSure platform delivers a frictionless solution for financial institutions to on the new individual and small business customers through both online and mobile channels.",
      },
      {
        backgroundImage: "/image/product.png",
        title: "Product Management",
        subText:
          "CapSure will help you manage the lifecycle of all your products and services profitably.",
      },
  
      {
        backgroundImage: "/image/data.png",
        title: "Data insights",
        subText:
          "CapSure redefines the customer journey and experience by capturing a multitude of data points every step of the way.",
      },
  
      {
        backgroundImage: "/image/collection.png",
        title: "Collection Services",
        subText:
          "The platform allows you to make and receive payments from customers as scheduled and with ease.",
      },
    ];
  
    // let titles = thirdBox.map(e=>  e.title);
    // console.log(titles);
  
    const   sixthBox = [
  
     
    {
      backgroundImage: "/image/robot.png",
        subText1:
         "capsure-blogw automation is transforming <br/>the world of today",
        
        subText2:
         "These efforts create immediate gains that strengthen market position and customer value.",
      },
      {
        backgroundImage: "/image/display.png",
          subText1:
           "capsure-blogw automation is transforming <br/>the world of today",
          
          subText2:
           "These efforts create immediate gains that strengthen market position and customer value.",
        },
  
        {
          backgroundImage: "/image/robot.png",
            subText1:
             "capsure-blogw automation is transforming <br/>the world of today",
            
            subText2:
             "These efforts create immediate gains that strengthen market position and customer value.",
          },
    ];
  
    const eightBox =[
      {
  subText:" Great job, I will definitely recommend! Capsure is exactly what our business has been lacking. Get on board now!",
      },
      {
        subText:" Great job, I will definitely recommend! Capsure is exactly what our business has been lacking. Get on board now!",
            },
  
            {
              subText:" Great job, I will definitely recommend! Capsure is exactly what our business has been lacking. Get on board now!",
                  },
  
                  {
                    subText:" Great job, I will definitely recommend! Capsure is exactly what our business has been lacking. Get on board now!",
                        },
  
  
    ];
  
   


  return (
    <>
      <HeroSection
        title={
          <>
            Transforming <br />
            Customer Experience
          </>
        }
        subText="We offer tailored digital process automation services that formulate omnichannel onboarding software solutions, 
        including face recognition and OCR...."
        image="/image/hero-vector.png"
      />

  <div className="hero2">
        <SecondHeroSection
          ImageUrl="./image/endless-constellation.png"
          title={<>Turn 3 weeks into 3 minutes</>}
          subText={
            <>
              Customer onboarding has changed from a long and bureaucratic
              process to an optimized, more secure, and quick process, resulting
              to:
            </>
          }
        />

       
<div className="second-box-section">
          {secondBox.map((e) => (
            <SecondBoxSection
              title={e.title}
              subText={e.subText}
              image={e.image}
            />
          ))}
        </div>
      </div>

      <div>
        <Capsure />
      </div>
      <div className="section3">
        <div className="wrapper-flex">
          {thirdBox.map((e, index) => (
            <ThirdBoxSection
              key={index}
              backgroundImage={e.backgroundImage}
              title={e.title}
              subText={e.subText}
            />
          ))}

          <Rectangle
            title={
              <>
                Exploring <br /> solutions
              </>
            }
          />
        </div>
      </div>
      <div className="same-section">
        <Product />
        {thirdBox.map((e, index) => (
          <ThirdBoxSection
            key={index}
            backgroundImage={e.backgroundImage}
            title={e.title}
            subText={e.subText}
          />
        ))}
        <ImageBoxSeven
        title={<>Collection services</>}
        subText={<>The platform allows you to make and receive payments from customers as scheduled and
<br/> with ease.</>}
        />

        <Rectangle
          title={
            <>
              Exploring <br /> solutions
            </>
          }
        />
      </div>
      <SectionFour
        title={<> Unfair Advantage </>}
        subText={
          <>
            Available in the cloud as software as a service (SaaS) and <br />
            includes an API gateway, identity and access management
            <br /> security and an ops management framework
          </>
        }
      />

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
  
    <div className="section6">
    <h1 className="capsure-blog" >The CapSure blog</h1>
    <div className="second-wrapper">
        {sixthBox.map((e,index) => (
            <SectionSix
            key={index}
            backgroundImage={e.backgroundImage}
              subText1={e.subText1}
              subText2={e.subText2}
            />
          
          ))}
         </div>
         </div>
         <ButtonBox/>
         <Questions/>
        <SectionEight

title={<>What people say about Capsure</>}
subText={<>Testimonials</>}
        />

<div className="section8">
    <div className="third-wrapper">
    {eightBox.map((e,index) => (
            <SectionEightBox
            key={index}
              subText={e.subText}
             
            />
          
          ))}

          </div>
          </div>

<SectionNine  
title={<>Get in touch</>}
subText={<>submit</>}
/>


<SectionTen/>


<SectionEleven
subText={<> Copyright © CapSure 2022</>}
/>
    </>
  );
}

//export default HomePage;






  
