import PriceCard from "@/app/components/cards/PriceCard";
import React from "react";

const Price = () => {
  return (
    <section>
      <div className="container py-10 flex flex-col">
        <div id="title" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Preço</h1>
          <p className="my-5 text-sm text-slate-700 text-center">
            Escolha o melhor preço para você, considerando as vantagens e
            benefícios que o evento oferece.
          </p>
          <div className="flex flex-col md:flex-row justify-evenly">
            <PriceCard namePass="Day" price={69} linkButton="/" />
            <PriceCard namePass="Full" price={79} linkButton="/" />
            <PriceCard namePass="Group" price={99} linkButton="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
