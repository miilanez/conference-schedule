import Image from "next/image";
import React from "react";
import Button from "../../../components/button/Button";

const Hero = () => {
  return (
    <section>
      <div className="relative min-h-96 bg-hero bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container pt-16 text-white">
          <div className="text-center mt-10">
            <h3 className="text-xl font-light md:text-2xl">
              Maior Evento do Ano
            </h3>
            <h1 className="text-3xl font-bold uppercase md:text-6xl my-3">
              1ª Event Schedule América Latina
            </h1>
            <h5 className="text-base md:text-base">
              Para uma América Justa, Sustentável e Desenvolvida
            </h5>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center px-3 py-16">
        <div className="w-full md:w-1/2 pb-16 md:pb-0">
          <h1 className="text-3xl font-bold">
            Venha explorar Startups e negócios de mais de 10.000 pessoas.
          </h1>
          <p className="my-5 text-sm text-slate-700">
            A Event Schedule América Latina é um importante espaço de diálogo entre
            diferentes atores da sociedade para refletir sobre o papel da
            tecnologia no continente e seu rumo nos próximos anos. Após as mais
            de 200 Conferências preparatórias que aconteceram de dezembro de
            2023 a maio de 2024 em vários países, chegou a vez da América Latina
            aprensentar suas soluções em tecnologia para o mundo.
          </p>
          <Button
            type="button"
            text="Saiba Mais"
            link="/"
            containerStyles="px-4 py-2 bg-violet-700 hover:bg-fuchsia-700"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/hero/eventoespectadores.png"
            alt="Espectadores do Evento"
            width={480}
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
