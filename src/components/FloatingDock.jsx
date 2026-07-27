import React from "react";
import themeContext from "../context/theme_context";
import { NavLink } from "react-router-dom";
import {
  LuHouse,
  LuUser,
  LuBrain,
  LuFolderKanban,
  LuMail,
  LuMoon,
  LuSun,
} from "react-icons/lu";

import { MdLightMode, MdDarkMode } from "react-icons/md";
const links = [
  {
    to: "/",
    icon: LuHouse,
    label: "Home",
  },
  {
    to: "/about",
    icon: LuUser,
    label: "About",
  },{

    to: "/skills",
    icon: LuBrain,
    label: "Skills",
  },
  {
    to: "/projects",
    icon: LuFolderKanban,
    label: "Projects",
  },
  {
    to: "/contact",
    icon: LuMail,
    label: "Contact",
  },
];

export default function FloatingDock() {
     let{theme, toggleTheme} = React.useContext(themeContext);



  return (
   <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95vw]">
  <div
    className={`flex items-center rounded-full
    backdrop-blur-xl
    shadow-2xl
    border
    ${
      theme === "light"
        ? "bg-gray-900/10 border-gray-200"
        : "bg-gray-900/60 border-gray-700"
    }
    px-3 sm:px-5 lg:px-6
    py-2 sm:py-3
    gap-1 sm:gap-2`}
  >
    {links.map(({ to, icon: Icon, label }) => (
      <NavLink
        key={to}
        to={to}
        title={label}
        className={({ isActive }) =>
          `rounded-full
          transition-all
          duration-300
          p-2 sm:p-3
          active:brightness-200
          ${
            isActive
              ? "bg-gray-600/40 text-white shadow-lg brightness-100"
              : theme === "light"
              ? "hover:bg-gray-200 text-gray-700"
              : "hover:bg-gray-700 text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <Icon
            className={`
              transition-all
              duration-300
              text-3xl
              sm:text-3xl
              lg:text-3xl
              focus:brightness-200
              
              ${
                isActive
                  ? "text-white brightness-200 "
                  : theme === "light"
                  ? "text-gray-700"
                  : "text-gray-300"
              }
            `}
          />
        )}
      </NavLink>
    ))}

    <div
      className={`mx-1 h-6 sm:h-8 w-px ${
        theme === "light"
          ? "bg-gray-400"
          : "bg-gray-600"
      }`}
    />

    <button
      onClick={toggleTheme}
      className={`
      rounded-full
      p-2 sm:p-3
      transition-all
      duration-300
      ${
        theme === "light"
          ? "hover:bg-gray-200/30 text-blue-300"
          : "hover:bg-gray-700 text-yellow-300"
      }`}
    >
      {theme === "light" ? (
        <LuMoon className="text-xl sm:text-2xl lg:text-3xl" />
      ) : (
        <LuSun className="text-xl sm:text-2xl lg:text-3xl" />
      )}
    </button>
  </div>
</nav>
  );
}