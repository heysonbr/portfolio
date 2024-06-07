import LinkedIn from "./icons/linkedin";
import Gmail from "./icons/email";




export default function descipcion() {
  return (
    <div className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl">
      <div className="flex">
        <img
          src="/avatar.png"
          alt="heyson"
          className="rounded-full w-20 h-20 pr-2"
        />
        {/* <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5  h-10 ml-3  "> 
                Disponible para trabajar</a> */}
        <a className="flex items-center transition md:justify-center md:hover:scale-105" href="https://www.linkedin.com/in/heyson-br/">         
        <div class="flex items-center ">
          <span class="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d7b4fe_0%,#7f2dda_50%,#d7b4fe_100%)]"></span>
            <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
              Disponible para Trabajar
            </div>
          </span>
        </div>
        </a>
      </div>

      <h1 className="text-4xl font-bold pt-5 text-white">Hola, soy Heyson</h1>
      <p className="text-lg  mt-5 text-white">+1 Año experiencia. <strong className="text-purple-300">Full Stack Developer</strong> de Nicaragua, residiendo en Mallorca 🇪🇸. 
      Especializado en el desarrollo de aplicaciones web únicas.</p>

      <div className="pt-7 flex ">
        <a className="flex text-white rounded-full w-auto bg-gray-800 py-1 px-2 border-grey border border-solid my-1" href="mailto:heysonbr@gmail.com"> <Gmail className="pt-1 mr-1"/> Contáctame </a>
        <a className="flex text-white rounded-full w-auto bg-gray-800 py-1 px-3 border-grey border border-solid m-1" href="https://www.linkedin.com/in/heyson-br/"> <LinkedIn className="mt-1 mr-1"/> Linkedin </a>
        </div>          

    </div>
  );
}
