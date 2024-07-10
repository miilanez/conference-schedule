"use client";

import React, { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("July 24, 2029 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; // Retorna nulo até que o componente esteja montado no cliente
  }

  return (
    <section className="bg-timer bg-cover bg-center">
      <div className="container py-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">
          Venha explorar Startups e negócios <br></br> de mais de 10.000
          pessoas.
        </h1>
        {/* <div className="py-10 flex flex-row justify-evenly">
          <div className="mx-2 md:mx-6">Div1</div>
          <div className="mx-2 md:mx-6">Div2</div>
          <div className="mx-2 md:mx-6">Div3</div>
        </div> */}
        <div className="flex flex-row justify-around mt-5">
          <div className="flex justify-center items-center text-4xl">
            <div className="mx-2 md:mx-6 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-6xl font-extrabold text-purple-400">
                {timeLeft.days}
              </h1>{" "}
              <h2 className="text-xl md:text-2xl font-bold text-white">dias</h2>
            </div>
            <div className="mx-2 md:mx-6 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-6xl font-extrabold text-purple-400">
                {timeLeft.hours}
              </h1>{" "}
              <h2 className="text-xl md:text-2xl font-bold text-white">
                horas
              </h2>
            </div>
            <div className="mx-2 md:mx-6 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-6xl font-extrabold text-purple-400">
                {timeLeft.minutes}
              </h1>{" "}
              <h2 className="text-xl md:text-2xl font-bold text-white">
                minutos
              </h2>
            </div>
            <div className="mx-2 md:mx-6 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-6xl font-extrabold text-purple-400">
                {timeLeft.seconds}
              </h1>{" "}
              <h2 className="text-xl md:text-2xl font-bold text-white">
                segundos
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
