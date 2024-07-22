import Image from "next/image";
import React from "react";
import Button from "../../../components/button/Button";

const About = () => {
  return (
    <section id='sobre' className="bg-slate-100">
      <div className="container py-10 flex flex-col">
        <div id="title" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Sobre o Evento</h1>
          <p className="my-5 text-sm text-slate-700 text-center">
            A Event Schedule América Latina é um importante espaço de diálogo entre
            diferentes atores da sociedade para refletir sobre o papel da
            tecnologia no continente e seu rumo nos próximos anos.
          </p>
        </div>
        <div id="cards" className="w-full mt-5 flex flex-col md:flex-row justify-center">
          <div
            id="card"
            className="w-full flex flex-col items-center p-2"
          >
            <Image
              src="/images/hero/eventoespectadores.png"
              alt="Espectadores do Evento"
              width={480}
              height={380}
            />
            <div className="">
              <h1 className="mt-5 text-xl font-bold">
                Qual o futuro da tecnologia?
              </h1>
              <p className="my-5 text-sm text-slate-700 text-left">
                A Event Schedule América Latina é um importante espaço de diálogo
                entre diferentes atores da sociedade para refletir sobre o papel
                da tecnologia no continente e seu rumo nos próximos anos.
              </p>
              <Button
                type="button"
                text="Saiba Mais"
                link="/"
                containerStyles="px-4 py-2 bg-violet-700 hover:bg-fuchsia-700"
              />
            </div>
          </div>
          <div
            id="card"
            className="w-full flex flex-col items-center p-2"
          >
            <Image
              src="/images/hero/eventoespectadores.png"
              alt="Espectadores do Evento"
              width={480}
              height={380}
            />
            <div className="">
              <h1 className="mt-5 text-xl font-bold">
                Quando usar o Wordpress nos seus sites?
              </h1>
              <p className="my-5 text-sm text-slate-700 text-left">
                A Event Schedule América Latina é um importante espaço de diálogo
                entre diferentes atores da sociedade para refletir sobre o papel
                da tecnologia no continente e seu rumo nos próximos anos.
              </p>
              <Button
                type="button"
                text="Saiba Mais"
                link="/"
                containerStyles="px-4 py-2 bg-violet-700 hover:bg-fuchsia-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
