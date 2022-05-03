import React from "react";
import About from "./components/About";
import Platforms from "./components/Platforms";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import { ScrollToTop } from "./components/utils/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platforms />
      <Pricing />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
