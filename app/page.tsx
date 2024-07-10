import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Timer from "./components/sections/Timer";
import {Speakers} from "./components/sections/Speakers";

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
