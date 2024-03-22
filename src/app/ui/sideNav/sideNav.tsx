"use client";
import { IconMenu } from "@/app/lib/icons/iconProvider";
import { OPTIONS_SIDENAV } from "@/app/lib/icons/utils/optionMenu";
import { useState } from "react";

export const SideNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <div className="SideNav w-full h-16 bg-color-menu items-center flex overflow-hidden">
      <div className="justify-end w-full flex items-center ">
        <div className={`mr-10 flex absolute cursor-pointer scale-100 hover:scale-110 ${menuOpen && "rotate-90 duration-200"}`}>
          <button onClick={() => handleMenu()}>
            <IconMenu />
          </button>
        </div>

        <div
          className={`transform duration-200 ${
            menuOpen ? "-translate-x-24" : "translate-x-96"
          } flex gap-3`}
        >
          {OPTIONS_SIDENAV.map((option, id) => {
            return (
              <ul className="flex font-bold w-full text-base hover:text-lg cursor-pointer" key={id}>
                {option.label}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
