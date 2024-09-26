export const SobreMi = () => {
  return (
    <div
      className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl"
      id="sobre-mi"
    >
      <h2 className="text-4xl pb-10">Sobre mí</h2>
      <div className="flex flex-col md:flex-row items-center">
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
