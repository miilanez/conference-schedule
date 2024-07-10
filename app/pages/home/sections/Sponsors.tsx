import SponsorCard from "@/app/components/cards/SponsorCard";
import React from "react";

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-slate-100">
      <div className="container py-10 flex flex-col">
        <div id="title" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Parceiros</h1>
          <p className="my-5 text-sm text-slate-700 text-center">
            O evento só acontece com a ajuda de parceiros renomados que nos
            apoiam e garantem o sucesso do evento. Veja abaixo alguns deles:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <SponsorCard sponsorLink="/images/sponsors/sponsor1.png" />
          <SponsorCard sponsorLink="/images/sponsors/sponsor2.png" />
          <SponsorCard sponsorLink="/images/sponsors/sponsor3.png" />
          <SponsorCard sponsorLink="/images/sponsors/sponsor4.png" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
