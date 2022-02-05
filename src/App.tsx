import React from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="w-screen max-w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
