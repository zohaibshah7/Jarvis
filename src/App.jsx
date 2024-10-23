import React from "react";
import "./App.css";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Blog from "./components/Blog"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Blog/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
