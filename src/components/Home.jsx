import React from "react";
import themeContext from "../context/theme_context";
import profile from "../assets/images/profile.webp";
import profile_black from  "../assets/images/profile_black.webp"
import { Link } from "react-router-dom";
import {
  FaCode,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Home() {
  const { theme } = React.useContext(themeContext);

  return (
    <section
      className={`h-svh overflow-hidden flex items-center ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 ">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">

          {/* Left Content */}

          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <h2 className="body-font text-lg sm:text-xl md:text-2xl">
              Hi, I am
            </h2>

            <h1
  className={`
    heading-font  mt-2 font-bold leading-tight
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
    bg-[length:300%_300%]
    animate-gradient duration-75
    ${
      theme === "light"
        ? "bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600"
        : "bg-linear-to-r from-indigo-400 via-cyan-300 to-pink-400"
    }
    bg-clip-text text-transparent
  `}
>
  Ahmed <br className="sm:hidden" />
  <span>Ali Malik</span>
</h1>
            <h3 className="body-font  flex flex-wrap justify-center lg:justify-start items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">

              <span>
                MERN STACK DEVELOPER ||
              </span>

              <span>
                Aspiring AI SAAS
              </span>

              <span className="font-bold text-green-400">
                Founder
              </span>

              <FaCode className="text-2xl text-blue-500" />

            </h3>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <a
                href="/CV.pdf"
                target="_blank"
                className="group inline-flex justify-center items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-3.5 text-white font-medium shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
              >
                <FaDownload className="group-hover:translate-y-0.5 transition" />
                Download CV
              </a>

              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 rounded-xl border-2 border-blue-500 px-8 py-3.5 font-medium text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1"
              >
                <FaEnvelope />
                Contact Me
              </Link>

            </div>

          </div>

          {/* Right Image */}

         <div className="hidden lg:flex lg:w-1/2 ">
  <img
    src={`${theme==="light"?profile_black:profile}`}
    alt="Ahmed Ali Malik"
    className="
      w-75
      xl:w-120
      2xl:w-130
      h-auto
      object-contain
    "
  />
</div>

        </div>

      </div>
    </section>
  );
}

export default Home;