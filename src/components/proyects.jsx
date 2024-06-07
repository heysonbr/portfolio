import Python from "./icons/python";
import React from "./icons/react";
import Bootstrap from "./icons/bootstrap";
import MySQL from "./icons/mysql";

export default function Proyects() {

    const projects = [{
        title: "BeatBooK",
        description:
          "BeatBooK es una aplicación web que permite a los usuarios buscar eventos musicales en su ciudad, ver detalles de los eventos y comprar boletos. Los usuarios pueden registrarse, iniciar sesión, inscribirse a las eventos y comentarlos.",
        link: "https://svgl.vercel.app/",
        github: "https://github.com/heysonbr/BeatBooK",
        image: "/beatbook.png",
        tags: [ { name: 'React', class: 'bg-blue-700 text-white', icon: React},{name: 'Bootstrap', class: 'bg-purple-300 text-white', icon: Bootstrap },{name: 'MySQL', class: 'bg-yellow-300 text-white', icon: MySQL },{name:'Python', class:'bg-green-500 text-white', icon: Python,}],
        
    },
    ];

    return(
        <div className="section lg:max-w-4xl md:max-w-2xl container mx-auto p-5 mt-20 flex flex-col gap-y-16">
            <h2 className="flex items-center text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">Proyectos</h2>
            {projects.map(({ image, title, description, tags, link, github }) => (
                <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                            <img alt={title} className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={image} />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 md:max-w-lg">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {title}
                        </h3>
                        <div className="flex flex-wrap mt-2">
                            <ul className="flex flex-row mb-2 gap-x-2">
                                {tags.map((tag) => (
                                    <li>
                                        <span
                                            className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                                        >
                                            <tag.icon className="size-4" />
                                            {tag.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
                            <footer className="flex items-end justify-start mt-4 gap-x-4">
                                {github && (
                                    <a href={github}   className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                                    >
                                        
                                        Código
                                    </a>
                                )}
                                {link && (
                                    <a href={link}   className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                                    >
                                        
                                        Vista previa
                                    </a>
                                )}
                            </footer>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}