import React from "react";
import Button from "../button/Button";

interface PriceCardProps {
  namePass: string;
  price: number;
  linkButton: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  namePass,
  price,
  linkButton,
}) => {
  return (
    <div className="bg-white shadow-md p-10 m-5 rounded-md">
      <h2 className="font-semibold">{namePass} Pass</h2>
      <h1 className="my-5 text-4xl text-rose-600 font-extrabold">R$ {price}</h1>
      <ul className="my-5 text-sm">
        <li>Ingressos para as conferências</li>
        <li>Café e Almoço inclusos</li>
        <li>Certificados</li>
        <li>Acesso livre aos espaços</li>
      </ul>
      <Button
        type="button"
        text="Adquirir"
        link={linkButton}
        containerStyles="px-4 py-2 bg-violet-700 hover:bg-fuchsia-700"
      />
    </div>
  );
};

export default PriceCard;
