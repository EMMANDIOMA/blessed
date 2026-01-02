import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const Links = ["Home", "Menu", "About", "Contact"];
  const Buttons = ["Laundry Services", "Weekly Feature"];
  const [Open, setOpen] = useState(false);
  return (
    <>
      <header
        className="flex justify-between px-2 sm:justify-around items-center bg-[#FFFAF6] h-20 sticky top-0 shadow-md z-50 
        "
      >
        <div className="font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r from-[#EF9965] to-[purple]">
          BLESSED C&C
        </div>

        <div className="">
          <nav className="text-black  hidden sm:gap-4 sm:flex">
            {Links.map((link, index) => (
              <a className="text-2xl font-bold" key={index}>
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="sm:flex gap-10 hidden">
          {Buttons.map((button, index) => (
            <button
              className="border bg-[#E5681B] px-4 py-2 rounded-lg text-white hover:bg-[#cf4e0b] transition-colors"
              key={index}
            >
              {button}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => setOpen(!Open)}
            className="font-bold  sm:hidden text-3xl "
          >
            <FiAlignJustify />
          </button>
        </div>
        <div
          className={`
             sm:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${Open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            bg-white/30 shadow-md  absolute top-full left-0 w-full
          `}
        >
          <nav className="flex flex-col shadow-amber-200 items-center gap-3 py-3">
            {Links.map((link, index) => (
              <a
                key={index}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[] hover:text-[#E5681B] transition-colors"
              >
                {link}
              </a>
            ))}
            {Buttons.map((button, index) => (
              <button
                key={index}
                className="border bg-[#E5681B] px-4 py-2 rounded-lg text-white hover:bg-[#cf4e0b] transition-colors"
                onClick={() => setOpen(false)}
              >
                {button}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
