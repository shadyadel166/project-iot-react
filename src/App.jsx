import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import LandingHeroSection from "./pages/landingPage/LandingHeroSection";
import ContactUs from "./pages/contactUs/ContactUs";
import BlogPage from "./pages/blog/BlogPage";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <LandingPage></LandingPage> */}
        {/* <BlogPage></BlogPage> */}
        <ContactUs></ContactUs>
        <Routes>
          {/* <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="" element={<BlogPage />} /> */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
