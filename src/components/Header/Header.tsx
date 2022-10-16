const Header = () => {
  return (
    <header className="header w-full sticky flex justify-center opacity-0 items-center top-0 transition z-[49]">
      <div className="w-full h-12 md:h-10 flex flex-col md:flex-row gap-0 md:gap-6 justify-center items-center px-4 bg-neutral-800/80 rounded-xl shadow-lg border-b-3">
        <div className="text-yellow-300">
          Óscar Abad Portafolio
        </div>
        <nav className="flex justify-center items-center gap-4">
          <a href="#">Home</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
          <a href="#Gallery">Works</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;