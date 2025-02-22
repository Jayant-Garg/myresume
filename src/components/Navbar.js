import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [Open, setOpen] = useState(false); // State to toggle the navbar on small screens

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full px-10 py-4 flex justify-between items-center transition-all duration-300 z-50 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <h1 className="text-white text-2xl font-bold hover:text-accent transition">
        <a href="#home">JG</a>
      </h1>

      {/* Hamburger Icon for small screens */}
      <div className="md:hidden" onClick={() => setOpen(!Open)}>
        <button className="text-white hover:text-accent">
          <i className={`fas ${Open ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Navbar Links */}
      <ul className={`flex gap-8 text-white md:flex md:gap-8 ${Open ? "flex-col absolute bg-black w-auto right-0 top-full mt-4 px-6 py-4" : "hidden md:flex"}`}>
        <li><a href="#about" className="hover:text-accent transition">About</a></li>
        <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
        <li><a href="#workex" className="hover:text-accent transition">Work Ex</a></li>
        <li><a href="#education" className="hover:text-accent transition">Education</a></li>
        <li><a href="#testimonials" className="hover:text-accent transition">Testimonials</a></li>
        <li><a href="#contactme" className="hover:text-accent transition">Contact me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
