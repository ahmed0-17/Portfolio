import React from "react";
import themeContext from "../context/theme_context";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { theme } = React.useContext(themeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <section className="w-full max-w-7xl mb-10">
        {/* Heading */}
        <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-12 lg:mb-16">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;