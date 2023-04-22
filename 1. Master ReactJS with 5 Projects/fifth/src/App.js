import React, { useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
