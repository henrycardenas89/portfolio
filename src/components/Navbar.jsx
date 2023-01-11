import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ handleThemeSwitch, theme, sun, moon }) {
  return (
    <div className="flex py-6 px-2 w-full mx-auto fixed z-10 bg-slate-100 dark:bg-slate-900">
      <ul className="flex text-lg font-semibold ml-auto">
        <li className="px-8 text-zinc-600 dark:text-stone-300 dark:hover:text-white hover:ease-in duration-150 hover:text-zinc-900 cursor-pointer max-[375px]:px-2">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            delay={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="px-8 text-zinc-600 dark:text-stone-300 dark:hover:text-white hover:ease-in duration-150 hover:text-zinc-900 cursor-pointer max-[280px]:px-2">
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={0}
            delay={50}
            duration={500}
          >
            Works
          </Link>
        </li>
        <li className="px-8 text-zinc-600 dark:text-stone-300 dark:hover:text-white hover:ease-in duration-150 hover:text-zinc-900 cursor-pointer max-[280px]:px-2">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            delay={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="right-2 top-4 md:right-10 md:top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md max-[280px]:h-6 max-[280px]:w-6"
        >
          {theme === "dark" ? sun : moon}
        </button>
      </ul>
    </div>
  );
}
