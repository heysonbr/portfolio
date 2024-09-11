import { useState } from "react";

import React from "../icons/react";
import Bootstrap from "../icons/bootstrap";
import MySQL from "../icons/mysql";
import Python from "../icons/python";

export default function Buscador() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      title: "BeatBooK",
      description:
        "BeatBooK es una aplicación web que permite a los usuarios buscar eventos musicales en su ciudad, ver detalles de los eventos y comprar boletos. Los usuarios pueden registrarse, iniciar sesión, inscribirse a la eventos y comentarlos.",
      // link: "https://svgl.vercel.app/",
      github: "",
      image: "/beatbook.png",
      tags: [
        { name: "React", class: "bg-blue-700 text-white", icon: React },
        {
          name: "Bootstrap",
          class: "bg-purple-300 text-white",
          icon: Bootstrap,
        },
        { name: "MySQL", class: "bg-yellow-300 text-white", icon: MySQL },
      ],
    },
    {
      title: "FFMPEG",
      description:
        "FFMPEG es una aplicación web que permite a los usuarios buscar eventos musicales en su ciudad, ver detalles de los eventos y comprar boletos. Los usuarios pueden registrarse, iniciar sesión, inscribirse a la eventos y comentarlos.",
      // link: "https://svgl.vercel.app/",
      github: "",
      image: "/beatbook.png",
      tags: [
        { name: "MySQL", class: "bg-yellow-300 text-white", icon: MySQL },
        { name: "Python", class: "bg-green-500 text-white", icon: Python },
      ],
    },

    // ...otros proyectos
  ];

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
            className="h-64 w-72 lg:w-64 rounded-lg py-2 text-start"
            key={project.title}
          >
            <img
              className="rounded-lg w-full  transition duration-500 hover:scale-110 "
              src={project.image}
              alt={project.title}
            />
            <h2 className="text-xl font-semibold "> {project.title}</h2>
            <ul className="flex flex-row mb-2 gap-x-2 ">
              {project.tags.map((tag) => (
                <li key={tag.name}>
                  <span
                    className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                  >
                    <tag.icon className="size-4" />
                    {/* <span className="hidden sm:inline">{tag.name}</span> */}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
