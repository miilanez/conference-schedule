import Image from "next/image";
import React from "react";

interface EventSpeakerProps {
  imageLink: string;
  nameSpeaker: string;
  jobSpeaker: string;
}

const EventSpeaker: React.FC<EventSpeakerProps> = ({
  imageLink,
  nameSpeaker,
  jobSpeaker,
}) => {
  return (
    <div
      id="card-speaker"
      className="flex flex-col justify-center items-center p-3"
    >
      <div>
        <div id="image-speaker" className="w-[160px] h-[160px]">
          <Image
            src={imageLink}
            width={160}
            height={160}
            alt="Imagem de perfil do palestrante"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
      <div id="name-speaker" className="flex flex-col text-center">
        <span className="font-bold text-lg mt-3">{nameSpeaker}</span>
        <span className="text-slate-600 text-sm">{jobSpeaker}</span>
      </div>
    </div>
  );
};

export default EventSpeaker;
