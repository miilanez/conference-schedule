import React from "react";
import Hero from "./pages/home/sections/Hero";
import About from "./pages/home/sections/About";
import Timer from "./pages/home/sections/Timer";
import { Speakers } from "./pages/home/sections/Speakers";
import Sponsors from "./pages/home/sections/Sponsors";
import Price from "./pages/home/sections/Price";
import EventSchedule from "./pages/home/sections/EventSchedule";
import Contact from "./pages/home/sections/Contact";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Timer />
      <Speakers />
      <Sponsors />
      <EventSchedule />
      <Price />
      <Contact />
    </div>
  );
};

export default page;
