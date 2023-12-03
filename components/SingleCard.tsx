import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  image: StaticImageData;
  title: String;
  description: String;
}

const SingleCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="flex bg-slate-500 justify-center">
      <Image src={image} height={60} width={60} alt="image" />

      <div className="flex flex-col justify-start">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
