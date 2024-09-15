import Contributions from "./Contributions";

export default function stack() {
  const habilities = {
    lenguajes: ["JavaScript", "Python", "CSS", "HTML"],
    basesDeDatos: ["MySQL", "SQLAlchemy"],
    frameworks: [
      "React",
      "Astro",
      "Flask",
      "Bootstrap",
      "Tailwind CSS",
      "Sass",
      "SQLAlchemy",
      "Next.js",
      "Expo",
      "Firebase",
      "Express",
    ],
    controlDeVersiones: ["GIT"],
  };

  const renderHabilities = (title, habilities) => (
    <div className="p-4 text-center">
      <h4 className="text-xl font-bold text-gray-700 dark:text-gray-100">
        {title}
      </h4>
      {habilities.map((hability) => (
        <div className="m-2 inline-flex items-center justify-center gap-2 px-2 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
          {hability}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl">
      <h2 className="flex items-center text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ">
        Habilidades
      </h2>
      <div className="flex items-center mt-20">
        <span className="relative inline-flex overflow-hidden rounded-xl p-[2px] ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d7b4fe_0%,#7f2dda_50%,#d7b4fe_100%)] "></span>
          <div className="  backdrop-blur-sm bg-gray-800 w-auto h-auto rounded-xl flex justify-around content-cente z-5 ">
            {renderHabilities("Lenguajes", habilities.lenguajes)}
            {renderHabilities("Bases de Datos", habilities.basesDeDatos)}
            {renderHabilities(
              "Frameworks y Bibliotecas",
              habilities.frameworks
            )}
            {renderHabilities(
              "Control de Versiones",
              habilities.controlDeVersiones
            )}
          </div>
        </span>
      </div>
    </div>
  );
}
