import React from "react";
import themeContext from "../context/theme_context";
import profile from "../assets/images/profile.png";
import profile_black from "../assets/images/profile_black.png";
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
      className={`min-h-screen flex items-center py-16 xl:py-0 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div
        className="
          w-full
          max-w-7xl
          2xl:max-w-[1600px]
          3xl:max-w-[1800px]
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          2xl:px-16
          flex
          flex-col-reverse
          xl:flex-row
          items-center
          justify-between
          gap-12
          xl:gap-8
          2xl:gap-16
        "
      >
        {/* Left Content */}
        <div
          className="
            w-full
            xl:w-1/2
            2xl:w-[52%]
            text-center
            xl:text-left
          "
        >
          <h2 className="body-font text-lg sm:text-xl md:text-2xl">
            Hi, I am
          </h2>

          <h1
            className={`
              heading-font
              mt-2
              font-extrabold
              leading-tight
              text-5xl
              sm:text-6xl
              md:text-6xl
              lg:text-7xl
              2xl:text-8xl
              bg-[length:300%_300%]
              animate-gradient
              duration-75
              ${
                theme === "light"
                  ? "bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600"
                  : "bg-linear-to-r from-indigo-400 via-cyan-300 to-pink-400"
              }
              bg-clip-text
              text-transparent
            `}
          >
            Ahmed <br className="sm:hidden" />
            <span>Ali Malik</span>
          </h1>

          <h3
            className="
              body-font
              flex
              flex-wrap
              justify-center
              xl:justify-start
              items-center
              gap-2
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              2xl:text-3xl
              leading-relaxed
              mt-4
            "
          >
            <span>MERN STACK DEVELOPER ||</span>
            <span>Aspiring AI SAAS</span>
            <span className="font-bold text-green-400">
              Founder
            </span>
            <FaCode className="text-2xl 2xl:text-3xl text-blue-500" />
          </h3>

          {/* Buttons */}
          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              xl:justify-start
              gap-4
            "
          >
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                justify-center
                items-center
                gap-2
                rounded-xl
                bg-linear-to-r
                from-blue-600
                to-cyan-600
                px-8
                py-3.5
                2xl:px-10
                2xl:py-4
                text-white
                font-medium
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-blue-500/40
              "
            >
              <FaDownload className="group-hover:translate-y-0.5 transition" />
              Download CV
            </a>

            <Link
              to="/contact"
              className="
                inline-flex
                justify-center
                items-center
                gap-2
                rounded-xl
                border-2
                border-blue-500
                px-8
                py-3.5
                2xl:px-10
                2xl:py-4
                font-medium
                text-blue-500
                transition-all
                duration-300
                hover:bg-blue-500
                hover:text-white
                hover:-translate-y-1
              "
            >
              <FaEnvelope />
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            hidden
            xl:flex
            xl:w-1/2
            2xl:w-[48%]
            justify-center
            items-end
            w-full
          "
        >
          <img
            src={theme === "light" ? profile_black : profile_black}
            alt="Ahmed Ali Malik"
            className="
              w-full
              max-w-[650px]
              2xl:max-w-[750px]
              3xl:max-w-[850px]
              max-h-[100vh]
              object-contain
              object-bottom
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
