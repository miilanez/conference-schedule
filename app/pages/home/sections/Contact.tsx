import Button from "@/app/components/button/Button";
import React from "react";

const Contact = () => {
  return (
    <section id='contato' className="bg-slate-100">
      <div className="container py-10 flex flex-col md:flex-row">
        <div
          id="title"
          className="flex flex-col justify-center items-center w-full lg:w-[50%] p-5"
        >
          <h1 className="text-3xl font-bold">
            Alguma duvida? Entre em contato conosco
          </h1>
          <p className="mt-6">
            Use os campos ao lado para mandar seu recado para a nossa equipe.
            Entraremos em contato assim que possível.
          </p>
        </div>
        <div className="w-full lg:w-[50%] bg-white p-5 md:p-10">
          <form action="#" method="POST">
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-sm text-gray-600">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-slate-500"
              />
              <label htmlFor="message" className="text-sm text-gray-600 mt-3">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="p-2 focus:outline-none"
              ></textarea>
              <Button
                type="submit"
                text="Enviar"
                containerStyles="mt-3 px-4 py-2 bg-violet-700 hover:bg-fuchsia-700"
                link=""
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
