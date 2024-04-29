"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

const Lang = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2 items-center relative">
        <span className="fi fi-gb" />
        <span className="text-white text-[14px]">EN</span>
        <ChevronUp
          size={15}
          className="text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/*  <ul
          className={cn(
            `bg-[#e0e0e0] px-10 py-10 max-h-screen shadow-md absolute right-0 top-10 transition-opacity duration-100 z-20`,
            {
              "opacity-0": !isOpen,
              "opacity-100": isOpen,
            }
          )}
        >
          <li>lang</li>
        </ul> */}
      </div>
    </>
  );
};

export default Lang;
