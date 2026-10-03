import React from "react";
import themeContext from "../context/theme_context";
import Profile from "../assets/images/about.webp";

function About() {
  const { theme } = React.useContext(themeContext);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${theme === "dark" ? "text-white" : "text-black"
        }`}
    >
      <section
        className="
        mb-12
          w-full
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          2xl:px-20
          py-12
          sm:py-16
          2xl:py-20
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            2xl:max-w-[1600px]
            mx-auto
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-10
            lg:gap-16
            2xl:gap-24
          "
        >
          {/* Image */}
          <div
            className="
              w-full
              lg:w-2/5
              2xl:w-[42%]
              flex
              justify-center
              items-center
            "
          >
            <img
              src={Profile}
              alt="Ahmed"
              className="
                w-56
                sm:w-64
                md:w-72
                lg:w-[420px]
                2xl:w-[550px]
                max-w-full
                h-auto
                object-contain
                rounded-2xl
              "
            />
          </div>

          {/* About Content */}
          <div
            className="
              w-full
              lg:w-3/5
              2xl:w-[58%]
              text-center
              lg:text-left
            "
          >
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                2xl:text-6xl
                heading-font
                mb-6
                2xl:mb-8
              "
            >
              About Me
            </h2>
            <p
              className={`
    body-font
    text-base
    sm:text-lg
    lg:text-lg
    2xl:text-xl
    leading-7
    sm:leading-8
    2xl:leading-9
    ${theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
                }
  `}
            >
              I'm <strong>Ahmed Ali Malik</strong>, a 3rd-year{" "}
              <strong>Software Engineering</strong> student and{" "}
              <strong>Full-Stack Developer</strong> passionate about building
              modern, responsive, and user-friendly web applications.

              <br />
              <br />

              I work with{" "}
              <strong>
                React.js, JavaScript, Vite, Tailwind CSS, Redux Toolkit,
                Node.js, Express.js, MongoDB
              </strong>
              , and REST APIs to build scalable and interactive web
              applications with clean and maintainable code.

              <br />
              <br />

              Alongside web development, I'm expanding my expertise in{" "}
              <strong>
                Python, FastAPI, Backend Development, Async Programming,
                APIs, Testing
              </strong>
              , and software architecture as I progress toward becoming an{" "}
              <strong>AI Engineer</strong>.

              <br />
              <br />

              My long-term goal is to build{" "}
              <strong>AI-powered SaaS products, RAG systems, and intelligent AI agents</strong>
              {" "}that combine modern web technologies with Artificial Intelligence
              to solve real-world problems.
            </p>


            {/* Tech Stack */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-2
                2xl:gap-3
                mt-6
                2xl:mt-8
              "
            >
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
                "PHP",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`
                    px-4
                    py-2
                    2xl:px-5
                    2xl:py-2.5
                    rounded-full
                    text-sm
                    2xl:text-base
                    font-medium
                    ${theme === "dark"
                      ? "bg-gray-800 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                    }
                  `}
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
