export const SobreMi = () => {
  return (
    <div
      className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl"
      id="sobre-mi"
    >
      <h2 className="text-4xl pb-10">Sobre mí</h2>
      <div className="flex flex-col md:flex-col items-center">
        <p className="text-xl pr-0 md:pr-5   ">
          Mi nombre es{" "}
          <span className="text-purple-300 font-semibold">
            Heyson Betancourt
          </span>
          . Comencé mi carrera en programación en 2016, pero tuve que apartarme
          para trabajar en el sector de la construcción durante 8 años. Ahora he
          vuelto con más fuerza, aprovechando mis experiencias previas para
          aportar una nueva perspectiva al desarrollo de software. Me
          especializo en desarrollo{" "}
          <span className="text-purple-300 font-semibold">full stack</span>, y
          disfruto aprender constantemente y compartir conocimientos. Mi pasión
          por la tecnología sigue creciendo, impulsándome a enfrentar nuevos
          desafíos y crear soluciones innovadoras.
        </p>
        <br />
        <p className="text-xl mb-10 ">
          Actualmente trabajando como full stack en{" "}
          <a
            href="https://www.bubbo.app/"
            className="text-purple-500 font-semibold  duration-300 hover:scale-125"
          >
            Bubbo{" "}
          </a>
          una app hecha en ReactNative y AWS. Tambien colaboro en una web app
          que se llama
          <a href="">AIventure </a> echa con NextJS y Firebase.
        </p>
        <div className="flex gap-2">
          <p>Tengo un certificado de:</p>
          <a
            className=" border-2 px-1 rounded-lg bg-purple-500 duration-500 hover:scale-125"
            href="https://certificate.4geeks.com/c43a8dbaab4e58af4abce80a1211649b73b0880f"
          >
            4Geeks Academy
          </a>
        </div>

        {/* <div className="rounded-lg m-5 md:ml-0  border-4 border-white duration-200 hover:scale-110 ">
          <img
            className="origin-left rotate-6 size-80 duration-200 hover:rotate-0  md:size-auto"
            src="/avataAnime.avif"
            alt="heyson"
          />
        </div> */}
      </div>
    </div>
  );
};
