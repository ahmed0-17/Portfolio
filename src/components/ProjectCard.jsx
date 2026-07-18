import React from "react";
import themeContext from "../context/theme_context";
   import { LuExternalLink, LuGithub } from "react-icons/lu";
function ProjectCard({ project }) {
  let { theme } = React.useContext(themeContext);

  return (


<div
  className={`${
    theme === "dark"
      ? "bg-gray-900 border border-gray-700 text-white"
      : "bg-white border border-gray-200 text-gray-900"
  } rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
>
  {/* Project Image */}
    <div className="relative overflow-hidden group">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Overlay */}
  {project.status === "Live"?(
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">

    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition transform translate-y-4 group-hover:translate-y-0"
    >
      <LuExternalLink />
      Live
    </a>

    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition transform translate-y-4 group-hover:translate-y-0"
    >
      <LuGithub />
      GitHub
    </a>

  </div>):(
    <div className=" absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
     <p className="body-font text-xl text-white">Project details coming soon.</p>
    </div>)}
</div>

  {/* Content */}
  <div className="p-6">
    {/* Title */}
    <h3 className="text-2xl heading-font  tracking-tight">
      {project.title}
    </h3>

    {/* Description */}
    <p
      className={`mt-3  body-font  leading-relaxed ${
        theme === "dark" ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-5">
      {project.tech.map((item) => (
        <span
          key={item}
          className={` body-font px-3 py-1 rounded-full text-sm font-medium border ${
            theme === "dark"
              ? "bg-blue-900/30 text-blue-300 border-blue-700"
              : "bg-blue-50 text-blue-600 border-blue-200"
          }`}
        >
          {item}
        </span>
      ))}
    </div>

    {/* Status */}
    <div className="mt-5">
      {project.status === "Live" ? (
        <span className="body-font inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700 border border-emerald-300">
          🟢 Live
        </span>
      ) : (
        <span className="body-font inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700 border border-amber-300">
          🚧 {project.status}
        </span>
      )}
    </div>

    {/* Buttons */}
    {project.status === "Live" && (
      <div className="flex gap-3 mt-6">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="body-font  flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <LuExternalLink size={18} />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={` body-font flex items-center gap-2 px-5 py-2.5 rounded-xl border transition ${
            theme === "dark"
              ? "border-gray-600 hover:bg-gray-800"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <LuGithub size={18} />
          GitHub
        </a>
      </div>
    )}
  </div>
</div>
  );
}

export default ProjectCard;