import React from "react";
import Link from "next/link";

import { Facebook, Youtube } from "lucide-react";

const Socials = () => {
  return (
    <div className="w-[60px] h-[120px] fixed right-0 top-48 bg-slate-200 z-10 border border-[#9aa7b3]">
      <div className="flex flex-col items-center h-full place-content-center place-items-center">
        <Link href="/">
          <div className="rounded-full bg-blue-500 p-[5px]">
            <Facebook size={24} className="text-white items-center" />
          </div>
        </Link>
        <div className="my-3 px-3 h-px w-3/4 bg-[#9aa7b3]" />
        <div className="rounded-full bg-red-500 p-[5px]">
          <Link href="/">
            <Youtube size={24} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
