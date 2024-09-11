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
    <div className="container mx-auto md:max-w-2xl lg:max-w-4xl2  xl:max-w-7xl  item-center justify-center text-center h-full flex flex-col gap-4 mt-8">
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

      <div className="grid grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div className="h-64 w-72 bg-blue-900" key={project.title}>
            <h2 className="text-2xl font-semibold "> {project.title}</h2>
            {/* Renderizar otros detalles del proyecto */}
          </div>
        ))}
      </div>
    </div>
  );
}
