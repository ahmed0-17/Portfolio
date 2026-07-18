import React from "react";
import themeContext from "../context/theme_context";

export default function Background() {
  const { theme } = React.useContext(themeContext);

  return (
    <div
      className={`fixed inset-0 -z-50 overflow-hidden ${
        theme === "dark" ? "bg-[#020817]" : "bg-[#f8fafc]"
      }`}
    >
      {/* Gradient */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-linear-to-br from-[#071329] via-[#020817] to-[#0b1e3b]"
            : "bg-linear-to-br from-sky-100 via-white to-cyan-100"
        }`}
      />

      {/* Main Glow */}
      <div
        className={`absolute top-20 left-10 h-96 w-96 rounded-full blur-[120px] animate-pulse ${
          theme === "dark"
            ? "bg-blue-500/20"
            : "bg-blue-400/30"
        }`}
      />

      {/* Cyan Glow */}
      <div
        className={`absolute bottom-20 right-10 h-96 w-96 rounded-full blur-[150px] animate-pulse ${
          theme === "dark"
            ? "bg-cyan-400/15"
            : "bg-cyan-300/25"
        }`}
      />

      {/* Purple Glow */}
      <div
        className={`absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] ${
          theme === "dark"
            ? "bg-violet-500/15"
            : "bg-violet-300/20"
        }`}
      />

      {/* Small Blue Glow */}
      <div
        className={`absolute top-10 right-1/4 h-40 w-40 rounded-full blur-[90px] ${
          theme === "dark"
            ? "bg-sky-400/20"
            : "bg-sky-300/10"
        }`}
      />

      {/* Small Cyan Glow */}
      <div
        className={`absolute bottom-10 left-1/2 h-52 w-52 rounded-full blur-[100px] ${
          theme === "dark"
            ? "bg-cyan-300/15"
            : "bg-cyan-200/30"
        }`}
      />

      {/* Grid */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)]"
        } bg-[length:60px_60px]`}
      />
    </div>
  );
}