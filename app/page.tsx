import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Timer from "./components/sections/Timer";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Timer />
    </div>
  );
};

export default page;
