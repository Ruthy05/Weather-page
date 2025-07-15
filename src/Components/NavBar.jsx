import { Link } from "react-router-dom";
import React, {useState} from "react";
export default function NavBar() {



  const[viewState, setViewState]=useState("none");
  
  const OverLay= ()=>{
    setViewState("block");
  };
  return (
<>
    <nav style={{backgroundColor:"white",}}>
      <div className="left-side">
<Link to ="/"><img src="./image/logo.png" alt="Logo" /></Link>
      </div>

      <div className="right-side">
        <span className="top-nav-menu">
        <Link to="/About">About us</Link>
        </span>

        <span className="top-nav-menu"  
        onMouseOver={() => OverLay()}
         onMouseLeave={() => setViewState("none")}>
          Solutions <i className="fa fa-chevron-down"></i>
          </span>


        <span className="top-nav-menu">
          <Link to="/Products">Products</Link>
          </span>
        <span className="top-nav-menu">
        <Link to="/Contact">Contact us</Link>
        </span>
        <span className="top-nav-menu">
       <Link to= "/weather">Weather</Link>
        </span>
        <span className="top-nav-menu">
       <Link to= "/WeatherCard">Weather</Link>
        </span>
        <span className="top-nav-menu-button">
       <Link to= "/request-demo">Request a demo</Link>
        </span>
      </div>
    </nav>
    <div className="hover-view"
     style={{display:viewState}}
     onMouseOver={() => OverLay()}
      onMouseLeave={() => setViewState("none")}>
    <ul>
        <li>Customer Engagement</li>
        <li>Campaign Engagement</li>
        <li>Digital onboarding</li>
        <li>Product Management</li>
        <li>Data Insights</li>
        <li>collection Services</li>
      </ul>
    </div>

    </>
  
  );
}

    
