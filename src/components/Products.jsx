import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <section className="w-full my-20">
      <div className="bg-[#f7f7f7]">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl py-6">Our Products</h2>
        </div>
        <div className="flex justify-center gap-10 pb-10 flex-wrap">
          <Image
            src="/img/t-line.jpg"
            alt="pic_01"
            width={300}
            height={170}
            className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          />
          <Image
            src="/img/t-line.jpg"
            alt="pic_01"
            width={300}
            height={170}
            className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          />
          <Image
            src="/img/t-line.jpg"
            alt="pic_01"
            width={300}
            height={170}
            className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <h2 className="text-4xl text-center">
          Our Global Server Based Solution
        </h2>
      </div>

      <div className="flex justify-center md:w-full w-[400px] h-[600px] content-center mx-auto">
        <Image
          src="/img/octopus.jpg"
          alt="pic_01"
          width={980}
          height={500}
          className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out p-10 xl:px-0  object-cover"
        />
      </div>
    </section>
  );
};

export default Products;
