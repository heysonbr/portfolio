import { useState } from "react";

import projectsData from "./projects.json";

import React from "../icons/react";
import Bootstrap from "../icons/bootstrap";
import MySQL from "../icons/mysql";
import Python from "../icons/python";
import Html from "../icons/html";
import ReactNative from "../icons/reactNative";
import Firebase from "../icons/firebase";
import Tailwind from "../icons/tailwind";
import Expo from "../icons/expo";

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
        case "ReactNative":
          icon = ReactNative;
          break;
        case "Firebase":
          icon = Firebase;
          break;
        case "Tailwind":
          icon = Tailwind;
          break;
        case "Expo":
          icon = Expo;
          break;
        default:
          icon = null;
      }
      return { ...tag, icon };
    });
    return { ...project, tags };
  });

  function getColorClass(tagName) {
    switch (tagName) {
      case "React":
        return "bg-blue-700";
      case "Bootstrap":
        return "bg-purple-300";
      case "MySQL":
        return "bg-yellow-300";
      case "Python":
        return "bg-green-500";
      case "Html":
        return "bg-red-600";
      case "ReactNative":
        return "bg-black";
      case "Firebase":
        return "bg-white";
      case "Tailwind":
        return "bg-slate-600";
      case "Expo":
        return "bg-purple-500";
      // Agrega más casos si necesitas más colores
      default:
        return "bg-white";
    }
  }

  const technologies = ["React", "ReactNative", "NextJS", "Astro", "Python"];

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
        <div>
          <select
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-500 bg-slate-800 rounded-lg p-1"
          >
            <option value="">Mostrar todos</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* <div>
          {" "}
          <button
            className="border border-white rounded-lg p-1 "
            onClick={() => setSearch("")}
          >
            Mostrar todos
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            className="h-auto w-72 lg:w-64 rounded-lg py-2 text-start transition duration-500 hover:scale-110"
            key={project.title}
          >
            <img
              className="rounded-lg w-full   "
              src={project.image}
              alt={project.title}
            />
            <h2 className="text-xl font-semibold mt-2"> {project.title}</h2>
            <p className="text-sm mt-2 h-32">{project.description}</p>
            <ul className="flex flex-row mb-2 gap-x-2 mt-6">
              {project.tags.map((tag, index) => (
                <li key={index}>
                  <span
                    className={`flex gap-x-2 rounded-full text-xs h-6 w-8 items-center justify-center ${getColorClass(
                      tag.name
                    )} py-1 px-2 `}
                  >
                    <tag.icon className="h-4 w-4" />
                    {/* <span className="hidden sm:inline">{tag.name}</span> */}
                  </span>
                </li>
              ))}
            </ul>
            <footer className="mt-4 ">
              {project.github && (
                <a
                  className="border border-gray-500 rounded-lg p-1 m-1 bg-slate-900 hover:border-transparent"
                  href={project.github}
                >
                  Codigo
                </a>
              )}
              {project.youtube && (
                <a
                  className="border border-gray-500 rounded-lg p-1 m-1 bg-slate-900 hover:border-transparent"
                  href={project.youtube}
                >
                  Video
                </a>
              )}
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}
