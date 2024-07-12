'use client'
import VerticalTab from "@/app/components/tabs/VerticalTab";
import React from "react";

const EventSchedule = () => {
  return (
    <section>
      <div className="container py-10 flex flex-col">
        <div id="title" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Calendário</h1>
          <p className="my-5 text-sm text-slate-700 text-center">
            Acompanhe o calendário completo do evento, com as datas e horários
            de acesso às salas.
          </p>
        </div>
        <div>
          <VerticalTab />
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
