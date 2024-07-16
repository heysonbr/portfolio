export const SobreMi = () => {
    return (
        <div className="container mx-auto p-5 mt-20 lg:max-w-4xl md:max-w-2xl">
            <h2 className="text-4xl pb-20">Sobre mí</h2>
            <div className="flex flex-col md:flex-row items-center">
                <p className="pr-0 md:pr-5">
                    Me llamo Heyson Betancourt. Empecé en la programación desde el 2016, por cosas de la vida me alejé de la programación y ahora he vuelto con más fuerza que nunca. Me encanta aprender cosas nuevas y compartir mis conocimientos con los demás. Soy un apasionado de la tecnología y me encanta aprender cosas nuevas.
                </p>
                <div className="rounded m-5 md:ml-0 border border-4 border-white">
                    <img className="origin-left rotate-12 size-80 duration-200 hover:rotate-0 md:size-auto" src="/avataAnime.avif" alt="heyson" />
                </div>
            </div>
        </div>
    )
}