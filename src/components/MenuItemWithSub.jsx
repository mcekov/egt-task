import { usePathname } from "next/navigation";
import { useState } from "react";

import MenuItem from "./MenuItem";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MenuItemWithSubMenu = ({ item, toggleOpen, onMenuChange }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-[18px]"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center font-bold">
            <div
              className={`${
                pathname.includes(item.path) || subMenuOpen
                  ? "text-primary"
                  : ""
              }`}
            >
              {item.lang && <span className="fi fi-gb text-[25px] mr-2"></span>}
              {item.title}
            </div>

            <div
              className={cn(
                `${
                  subMenuOpen && "rotate-180 transition-transform text-primary"
                }`
              )}
            >
              <ChevronDown width={20} height={20} />
            </div>
          </div>
        </button>
      </MenuItem>

      <div className="mt-2 ml-2 flex flex-col space-y-5">
        {subMenuOpen ? (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx} className="font-bold">
                  <Link
                    href={subItem.path}
                    onClick={() => {
                      toggleOpen();
                      onMenuChange();
                    }}
                    className={`${
                      subItem.path === pathname ? "text-primary" : ""
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default MenuItemWithSubMenu;
