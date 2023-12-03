import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  image: StaticImageData;
  title: String;
  description: String;
}

const SingleCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="flex p-4">
      <div className="flex gap-y-4 w-[100%] gap-x-3 shadow-2xl  hover:scale-75 transition-all delay-[450]  bg-red-400 rounded-md">
        <Image
          src={image}
          height={60}
          width={60}
          alt="image"
          className="w-[40%] p-2 rounded-full"
        />

        <div className="flex flex-col w-[50%]  ">
          <h4 className="font-bold">{title}</h4>
          <p className="text-start ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
