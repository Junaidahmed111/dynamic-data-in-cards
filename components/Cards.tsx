import React from "react";
import SingleCard from "./SingleCard";
import cardData from "@/utils/CardData";

const Cards = () => {
  return (
    <div className="flex flex-col">
      <h2>Our Top Services</h2>
      <div className="flex flex-col lg:flex-row gap-y-3 text-center">
        {cardData.map((card, index) => (
          <SingleCard
            key={index}
            image={card.imageUrl}
            title={card.title}
            description={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
