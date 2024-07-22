import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const networks = [
  { name: "Instagram", target: "", logo: <FaInstagram /> },
  { name: "LinkedIn", target: "", logo: <FaLinkedin /> },
  { name: "Facebook", target: "", logo: <FaFacebook /> },
  {
    name: "WhattsApp",
    target:
      "https://api.whatsapp.com/send?phone=5581982301817&text=Fala%20Gabriel%2C%20Bom%20dia!",
    logo: <FaWhatsapp />,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="w-full container mx-auto flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-4">
          <div id="brand logo">
              <Logo />
          </div>
          <div id="social networks" className="flex flex-row">
            {networks.map((network, index) => {
              return (
                <Link key={index} href={network.target}>
                  <span className="flex flex-row p-3 text-xl text-violet-800 hover:text-violet-950">
                    {network.logo}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="p-2"></hr>
        <div className="w-full text-xs text-center py-3">
          Copyright © 2024 Blue Umbrella Tech | Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};
