import React from "react";

import Link from "next/link";
import Image from "next/image";

const Card = ({ card }) => {
  return (
    <section className="p-4 max-w-sm">
      <div className="flex h-full bg-transparent p-8 flex-col">
        <div className="flex items-center mb-3">
          <span className="mr-3">{card.icon}</span>
          <h2 className="text-black text-2xl">{card.iconTitle}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <Image
            src={card.image}
            className="h-40 w-full object-cover object-center mb-6"
            alt="content"
            width={card.width}
            height={card.height}
          />
          <h2 className="text-2xl text-black">{card.title}</h2>
          <p className="text-sm pb-3 py-1 text-gray-400">{card.date}</p>
          <p className="leading-relaxed text-base text-black text-pretty italic mb-5">
            {card.description}
          </p>
          <Link
            href="/"
            className="bg-primary px-4 py-3 text-sm text-white hover:bg-gray-100 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
