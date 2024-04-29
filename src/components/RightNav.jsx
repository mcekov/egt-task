import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Lang from "./Lang";

const RightNav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  const lang = NAV_ITEMS.find((item) => item.lang);

  return (
    <nav className={`${containerStyles}`}>
      {NAV_ITEMS.map((item, i) => {
        const isLastItem = i === item.length - 1;

        if (!item.submenu) {
          return (
            <div key={i}>
              <Link
                href={item.path}
                className={cn(linkStyles, {
                  "text-black": item.path === pathname,
                })}
              >
                {item.title}

                {!isLastItem && (
                  <div className="h-[30px] w-px bg-stroke opacity-30 mx-4" />
                )}
              </Link>
            </div>
          );
        }
      })}
      <Lang />
    </nav>
  );
};

export default RightNav;
