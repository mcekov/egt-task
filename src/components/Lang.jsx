import { ChevronUp } from "lucide-react";
import React from "react";

const Lang = () => {
  return (
    <div className="flex gap-2 items-center">
      <span className="fi fi-gb"></span>
      <span className="text-white text-[14px]">EN</span>
      <ChevronUp size={15} className="text-gray-600" />
    </div>
  );
};

export default Lang;
