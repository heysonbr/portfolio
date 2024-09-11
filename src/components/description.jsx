import LinkedIn from "./icons/linkedin";
import Gmail from "./icons/email";
import Cohete from "./cohete";
import { useState } from "react";

export default function descipcion(descripcion) {
  return (
    <div className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl" id="inicio">
      <div className="flex flex-col-reverse items-center md:flex-row justify-between">
        <div className="flex flex-col-reverse m-5 md:flex-row-reverse items-center">
          {/* <img
            src="/avatar.png"
            alt="heyson"
            className="rounded-full w-20 h-20 pr-2 mb-2 mt-3 md:mb-0 md:m-3 md:pr-2 md:order-2"
          /> */}
          <a
            className="flex items-center transition md:justify-center md:hover:scale-105 md:order-1"
            href="https://www.linkedin.com/in/heyson-br/"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d7b4fe_0%,#7f2dda_50%,#d7b4fe_100%)]"></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                  {descripcion.disponible}
                </div>
              </span>
            </div>
          </a>
        </div>
        {/* <Cohete className="order-1 md:order-2" /> */}
      </div>

      <h1 className="text-4xl font-bold pt-5 ">{descripcion.hola} </h1>

      <p className="text-lg  mt-5 ">
        +1 Año experiencia.{" "}
        <strong className="text-purple-300">Full Stack Developer</strong> de
        Nicaragua, residiendo en Mallorca 🇪🇸. Especializado en el desarrollo de
        aplicaciones web únicas.
      </p>

      <div className="pt-7 flex ">
        <a
          className="flex  rounded-full w-auto bg-gray-800 py-1 px-2 border-grey border border-solid my-1 hover:border-transparent"
          href="mailto:heysonbr@gmail.com"
        >
          {" "}
          <Gmail className="pt-1 mr-1" /> Contáctame{" "}
        </a>
        <a
          className="flex rounded-full w-auto bg-gray-800 py-1 px-3 border-grey border border-solid m-1 hover:border-transparent"
          href="https://www.linkedin.com/in/heyson-br/"
        >
          {" "}
          <LinkedIn className="mt-1 mr-1" /> Linkedin{" "}
        </a>
      </div>
    </div>
  );
}
