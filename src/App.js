import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage.jsx";
import ProductPage from "./Components/Pages/ProductPage.jsx";
import AboutPg from "./Components/Pages/AboutPg.jsx";
import ContactUsPage from "./Components/Pages/ContactUsPage.jsx";
import RequestDemoPage from "./Components/Pages/RequestDemoPage.jsx";
import WeatherPage from "./Components/Pages/WeatherPage.jsx";
import WeatherCardPage from "./Components/Pages/WeatherCardPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPg />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/Contact" element={<ContactUsPage />} />
          <Route path="/request-demo" element={<RequestDemoPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/WeatherCard" element={<WeatherCardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//const demoLink = "/reques
//t-demo"; // Replace with the actual link
//backgroundImage: 'url(../image/product.png)',
//<a href=//


///<Route path="/About" element={<AboutPage />} />