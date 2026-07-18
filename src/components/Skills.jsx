import React from "react";
import themeContext from "../context/theme_context";
import { skills } from "../data/skills";
import { Certifications } from "../data/certifications";
import {
  FaCalendarAlt,
  FaAward,
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";

function Skills() {
  const { theme } = React.useContext(themeContext);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 mt-10  mb-20 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {/* ================= Skills ================= */}

      <div className="max-w-7xl mx-auto">
        <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl text-center mb-12">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={`flex flex-col items-center justify-center rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === "dark"
                    ? " backdrop-blur-xl shadow-lg border border-white/10"
                    : " shadow-lg border border-gray-200"
                }`}
              >
                <Icon className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" />

                <p className="heading-font text-sm sm:text-base lg:text-lg text-center">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= Certifications ================= */}

      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl text-center mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {Certifications.map((cert) => (
            <div
              key={cert.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-xl border border-white/10"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                  >
                    <FaEye />
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="p-4 sm:p-5">
                <h3 className="heading-font text-base sm:text-lg line-clamp-1">
                  {cert.title}
                </h3>

                <p
                  className={`body-font mt-2 text-sm sm:text-base line-clamp-2 ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="mt-4 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-blue-500" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="body-font mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-blue-700"
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;