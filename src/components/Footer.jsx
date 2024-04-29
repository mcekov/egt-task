"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp, Facebook, FacebookIcon, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  const [scrollYPos, setScrollYPos] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setScrollYPos(false) : setScrollYPos(true);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <footer>
      <section className="bg-[#e0e0e0]">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-[#424a59] text-[12px]">
          <div className="flex flex-1 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-nowrap hidden xl:block lg:block md:block">
              <h2 className="font-bold tracking-widest text-sm mb-3">R-LINE</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    Premier R4
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    Premier R6
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    Premier R8
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-nowrap hidden xl:block lg:block md:block">
              <h2 className="font-bold tracking-widest text-sm mb-3">S-LINE</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    S32
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    S32/32
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    S32/32/27
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    Stork
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-nowrap hidden xl:block lg:block md:block">
              <h2 className="font-bold tracking-widest text-sm mb-3">T-LINE</h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    LTTR Live
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    LTTR Auto
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    LTTR LC
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-nowrap hidden xl:block lg:block md:block">
              <h2 className="font-bold tracking-widest text-sm mb-3 text-nowrap">
                OUR SOLUTION
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    SBG
                  </Link>
                </li>
              </nav>
            </div>

            <div className="xl:block md:block hidden h-[200px] w-px bg-stroke opacity-50 mr-1 ml-10 bg-[#a4a7a]" />

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-nowrap">
              <h2 className="font-bold tracking-widest text-sm mb-3  hidden xl:block lg:block md:block">
                COMPANY
              </h2>
              <nav className="list-none mb-10  flex flex-col gap-3">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r8">
                    Careers
                  </Link>
                </li>
              </nav>

              <nav className="list-none mb-10 -mt-5 justify-center sm:hidden flex">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    <Youtube />
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden xl:block lg:block md:block">
              <h2 className="font-bold tracking-widest text-sm mb-3 text-nowrap">
                SOCIAL NETWORKS
              </h2>
              <nav className="list-none mb-10 flex">
                <li>
                  <Link className="hover:text-primary" href="/r-line/r4">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="/r-line/r6">
                    <Youtube />
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="text-sm text-white py-5 flex items-center justify-center opacity-60">
          © 2024 Euro Games Technology All rights reserved.
        </div>
      </section>
      <div className="fixed z-30 bottom-0 right-0 mr-6 mb-6">
        <Link
          onClick={scrollToTop}
          id="back2top"
          href="#"
          className={cn(
            "opacity-60 bg-primary text-white block p-2 shadow-md hover:shadow-lg hover:bg-red-300 transition duration-150 ease-in-out",
            {
              hidden: scrollYPos,
            }
          )}
        >
          <span className="hidden">Back To Top</span>
          <ChevronUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
