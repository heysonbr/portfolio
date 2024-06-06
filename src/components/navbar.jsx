




export default function Navbar() {
      return (
        <nav className="container w-80 mx-auto flex justify-center p-1 my-5 rounded-full backdrop-blur-sm bg-white/30 text-white" >
          
          <div className="links ">
            <a href="/" className="px-2 hover:text-yellow-300">Proyectos</a>
            <a href="/create" className="px-2 hover:text-yellow-300">Sobre mí</a>
            <a href="/contacto" className="px-2 hover:text-yellow-300">Contacto</a>
          </div>
        </nav>
      );
    }