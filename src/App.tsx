import React, { useRef } from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onGetStartedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-screen max-w-full overflow-x-hidden">
      <Header />
      <Hero onGetStartedClick={onGetStartedClick} />
      <Statistics inputRef={inputRef} />
      <Boost onGetStartedClick={onGetStartedClick} />
      <Footer />
    </div>
  );
}

export default App;
