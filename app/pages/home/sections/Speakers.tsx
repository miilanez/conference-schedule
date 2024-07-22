import React from "react";
import EventSpeaker from "../../../components/cards/EventSpeaker";

export const Speakers = () => {
  return (
    <section id="palestrantes">
      <div className="container py-10 flex flex-col">
        <div id="title" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Palestrantes</h1>
          <p className="my-5 text-sm text-slate-700 text-center">
            Este importante evento tem como objetivo trazer conhecimento a
            comunidade de devs do Brasil e da América Latina. Para isso,
            contamos com palestrantes qualificados e antenados nas novidades do
            mercado de tecnologia.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <EventSpeaker
            nameSpeaker="John Doe"
            jobSpeaker="CEO da Futurecom"
            imageLink="/images/speakers/Speaker1.png"
          />
          <EventSpeaker
            nameSpeaker="Declan John"
            jobSpeaker="Administrador de TI"
            imageLink="/images/speakers/Speaker2.png"
          />
          <EventSpeaker
            nameSpeaker="Shane Kyle"
            jobSpeaker="Líder de Devops"
            imageLink="/images/speakers/Speaker3.png"
          />
          <EventSpeaker
            nameSpeaker="Adam Smith"
            jobSpeaker="Tech Leader"
            imageLink="/images/speakers/Speaker4.png"
          />
          <EventSpeaker
            nameSpeaker="Michael Von"
            jobSpeaker="Tech Leader"
            imageLink="/images/speakers/Speaker5.png"
          />
          <EventSpeaker
            nameSpeaker="Juan Smith"
            jobSpeaker="Product Owner"
            imageLink="/images/speakers/Speaker6.png"
          />
          <EventSpeaker
            nameSpeaker="Marten Doc"
            jobSpeaker="Product Manager"
            imageLink="/images/speakers/Speaker7.png"
          />
          <EventSpeaker
            nameSpeaker="Linda Hamilton"
            jobSpeaker="CEO"
            imageLink="/images/speakers/Speaker8.png"
          />
        </div>
      </div>
    </section>
  );
};
