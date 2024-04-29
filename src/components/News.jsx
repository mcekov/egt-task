import Image from "next/image";
import React from "react";
import Card from "./Card";
import { CARDS } from "@/constants";

const News = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {CARDS.map((card, index) => {
        const isLastItem = index === CARDS.length - 1;

        return (
          <>
            <Card key={index} card={card} />

            {!isLastItem && (
              <div className="hidden xl:block md:block h-[440px] w-px mt-20 bg-stroke opacity-50" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default News;
