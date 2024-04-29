"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import MenuItem from "./MenuItem";
import MenuItemWithSub from "./MenuItemWithSub";

import { usePathname } from "next/navigation";
import RightNav from "./RightNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tOpen, setTopen] = useState(false);

  const pathname = usePathname();

  const genericHamburgerLine = cn(
    `h-1 w-6 my-[2px] transition ease transform duration-300`,
    {
      "bg-primary": isOpen,
      "bg-white": !isOpen,
    }
  );

  return (
    <header className="bg-primary border-b-[1px] border-[#263345]">
      <div className="flex  mx-auto w-full max-w-7xl justify-between pl-4">
        <div className="flex items-center gap-2 p-2">
          <Logo />
        </div>

        <div
          className={`ml-auto block cursor-pointer md:hidden ${
            isOpen ? "bg-[#e0e0e0] transition-all" : ""
          }`}
        >
          <div id="mobile-menu-button">
            <button
              className="flex flex-col h-12 w-12 border-none justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-2 group-hover:opacity-100 bg-red-500"
                    : "group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-2 group-hover:opacity-100 bg-red-500"
                    : "group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="hidden flex-1 items-center md:flex">
          <MainNav
            containerStyles="hidden sm:flex items-center whitespace-nowrap cursor-pointer"
            linkStyles="relative text-white hover:text-primary transition-all duration-150 hover:bg-gray-100 p-4"
          />
          <RightNav
            containerStyles="hidden sm:flex items-center whitespace-nowrap cursor-pointer ml-auto sm:pr-4"
            linkStyles="flex text-white text-[14px] hover:text-black transition-all duration-150 items-center"
          />
        </div>
      </div>
      <div>
        <ul
          className={cn(
            `bg-[#e0e0e0] grid gap-3 px-10 py-10 max-h-screen overflow-y-auto shadow-md absolute right-0 w-3/4 transition-opacity duration-100 md:hidden z-20`,
            {
              "opacity-0": !isOpen,
              "opacity-100": isOpen,
            }
          )}
        >
          {NAV_ITEMS.map((item, index) => {
            const isLastItem = index === NAV_ITEMS.length - 1;

            return (
              <div key={index}>
                {item.submenu ? (
                  <MenuItemWithSub
                    item={item}
                    toggleOpen={setTopen}
                    onMenuChange={() => setIsOpen(false)}
                  />
                ) : (
                  <MenuItem>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex w-full text-[18px] font-bold my-1 ${
                        item.path === pathname ? "text-primary" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </MenuItem>
                )}
                {!isLastItem && item.submenu && (
                  <MenuItem className="my-3 h-px w-full bg-stroke" />
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
