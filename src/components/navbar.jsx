export default function Navbar() {
  const executeScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="container fixed top-0 left-0 right-0 w-80 mx-auto flex justify-center p-1 my-2 rounded-full backdrop-blur-sm bg-white/30 text-white z-10" >
      <div className="links">
        <a onClick={() => executeScroll('proyectos')} className="px-2 hover:text-purple-300">Proyectos</a>
        <a href="/create" className="px-2 hover:text-purple-300">Sobre mí</a>
        <a href="/contacto" className="px-2 hover:text-purple-300">Contacto</a>
      </div>
    </nav>
  );
}