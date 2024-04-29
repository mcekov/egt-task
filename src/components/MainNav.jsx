import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

const Nav = ({ containerStyles, linkStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {NAV_ITEMS.map((item, index) => {
        if (item.submenu && !item.lang) {
          return (
            <div key={index} className={`${linkStyles} relative group z-50`}>
              <p className="text-[14px]">{item.title}</p>

              <div className="absolute left-0 top-[53px] opacity-0 min-w-[250px] flex-col gap-1 transition-all group-hover:opacity-100 bg-gray-100 p-5 shadow-md">
                {item.subMenuItems?.map((subItem, i) => {
                  const isLastSubItem = i === item.subMenuItems.length - 1;

                  return (
                    <div key={i}>
                      <Link
                        href={subItem.path}
                        className={cn(
                          "flex items-center py-5 text-black font-bold text-[13px] hover:text-primary",
                          {
                            "text-primary": subItem.path === pathname,
                          }
                        )}
                      >
                        {subItem.title}
                      </Link>

                      {!isLastSubItem && (
                        <div className="h-px w-full bg-stroke" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        return null;
      })}
    </nav>
  );
};

export default Nav;
