import Image from "next/image";
import React from "react";

interface SponsorCardProps {
  sponsorLink: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsorLink }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div id="sponsor-card" className="w-[180px] h-[90px]">
        <Image
          src={sponsorLink}
          width={120}
          height={90}
          alt="Parceiro do Evento"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SponsorCard;
