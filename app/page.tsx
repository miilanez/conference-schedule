import React from "react";
import Hero from "./pages/home/sections/Hero";
import About from "./pages/home/sections/About";
import Timer from "./pages/home/sections/Timer";
import {Speakers} from "./pages/home/sections/Speakers";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Timer />
      <Speakers />
    </div>
  );
};

export default page;
