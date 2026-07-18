import React from "react";
import themeContext from "../context/theme_context";
import Profile from "../assets/images/about.jpeg";

function About() {
  let { theme } = React.useContext(themeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
       <section className=" mb-15 flex  items-center px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={Profile}
              alt="Ahmed"
              className="
                w-56
                sm:w-64
                md:w-72
                lg:w-96
                h-auto
                object-contain
                rounded-2xl
              "
            />
          </div>

          {/* About Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-font mb-6">
              About Me
            </h2>

            <p
  className={`body-font text-base sm:text-lg leading-7 sm:leading-8 ${
    theme === "dark" ? "text-gray-300" : "text-gray-600"
  }`}
>
  I'm <strong>Ahmed Ali Malik</strong>, a passionate{" "}
  <strong>MERN Stack Developer</strong> focused on building modern,
  responsive, and user-friendly web applications with clean and efficient
  code.

  <br />
  <br />

  I specialize in <strong>MongoDB, Express.js, React.js, Node.js,
  JavaScript, Tailwind CSS, Redux Toolkit</strong>, and REST APIs,
  creating scalable solutions with great user experiences.

  <br />
  <br />

  I'm also pursuing my goal of becoming an <strong>AI SaaS Engineer</strong>,
  combining Artificial Intelligence with modern web technologies to build
  innovative software products that solve real-world problems.
</p>
            {/* Tech Stack */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "Redux Toolkit",
                "Tailwind CSS",
                "REST API",
                "Git & GitHub",
                "AI SaaS",
                "PHP"
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    theme === "dark"
                      ? "bg-gray-800 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;