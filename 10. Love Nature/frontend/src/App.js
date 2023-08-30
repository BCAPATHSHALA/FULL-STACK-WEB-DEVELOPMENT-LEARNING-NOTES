import React from "react";
import Header from "./Components/Layout/Header/Header";
import "./Components/styles/app.scss";
import Footer from "./Components/Layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Services from "./Components/pages/Services/Services";
import Contacts from "./Components/pages/Contacts/Contacts";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
