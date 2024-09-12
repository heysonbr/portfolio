import { useState } from "react";

import projectsData from "./projects.json";

import React from "../icons/react";
import Bootstrap from "../icons/bootstrap";
import MySQL from "../icons/mysql";
import Python from "../icons/python";
import Html from "../icons/html";

export default function Buscador() {
  const [search, setSearch] = useState("");

  const projects = projectsData.map((project) => {
    // Aquí puedes transformar los datos del proyecto si es necesario
    // Por ejemplo, puedes reemplazar los nombres de los iconos por los componentes de los iconos
    const tags = project.tags.map((tag) => {
      let icon;
      switch (tag.icon) {
        case "React":
          icon = React;
          break;
        case "Bootstrap":
          icon = Bootstrap;
          break;
        case "MySQL":
          icon = MySQL;
          break;
        case "Python":
          icon = Python;
          break;
        case "Html":
          icon = Html;
          break;
        default:
          icon = null;
      }
      return { ...tag, icon };
    });
    return { ...project, tags };
  });

  const technologies = ["React", "Bootstrap", "MySQL", "Python"];

  const filteredProjects = search
    ? projects.filter((project) =>
        project.tags.some(
          (tag) => tag.name.toLowerCase() === search.toLowerCase()
        )
      )
    : projects;

  return (
    <div className="container mx-auto md:max-w-2xl lg:max-w-4xl  xl:max-w-7xl  item-center justify-center text-center h-full flex flex-col gap-4 mt-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2">
          {technologies.map((tech) => (
            <button
              className="border border-white rounded-lg p-1"
              key={tech}
              onClick={() => setSearch(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div>
          {" "}
          <button
            className="border border-white rounded-lg p-1 "
            onClick={() => setSearch("")}
          >
            Mostrar todos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            className="h-64 w-72 lg:w-64 rounded-lg py-2 text-start transition duration-500 hover:scale-110"
            key={project.title}
          >
            <img
              className="rounded-lg w-full   "
              src={project.image}
              alt={project.title}
            />
            <h2 className="text-xl font-semibold "> {project.title}</h2>
            <ul className="flex flex-row mb-2 gap-x-2 ">
              {project.tags.map((tag) => (
                <li key={tag.name}>
                  <span
                    className={`flex gap-x-2 rounded-full text-xs ${tag.class
                      .split(" ")
                      .join(" ")} py-1 px-2 `}
                  >
                    <tag.icon className="h-4 w-4" />
                    {/* <span className="hidden sm:inline">{tag.name}</span> */}
                  </span>
                </li>
              ))}
            </ul>
            <footer>
              {project.github && (
                <a
                  className="border border-gray-500 rounded-lg p-1 bg-slate-900 hover:border-transparent"
                  href={project.github}
                >
                  Codigo
                </a>
              )}
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}
