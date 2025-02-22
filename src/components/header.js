import myphoto from '../assests/images/myphoto.jpg';

const Header = () => {
  return (
    <header id='home' className="relative h-[90vh] bg-primary text-white flex items-center justify-center px-16 md:px-22 lg:px-[120px]">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row">

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Jayant Garg</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mt-4 text-center md:text-left">
            I'm a Frontend Developer & Figma Designer.
          </p>
          <div className="flex gap-4 md:gap-6 mt-3 md:mt-6 justify-center md:justify-start">
            <a href="https://github.com/jayant-garg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl lg:text-3xl text-gray-300 hover:text-white transition"></i>
            </a>
            <a href="https://www.linkedin.com/in/jayant-garg-18a039297" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl lg:text-3xl text-gray-300 hover:text-white transition"></i>
            </a>
          </div>
          <a href="./Resume.pdf" download="jayant_garg_resume">
            <button
              className="mt-4 px-5 py-2 md:mt-8 md:px-8 md:py-3 sm:text-sm md:text-base lg:text-lg bg-accent text-black font-semibold rounded-md hover:bg-[#ac66f6] transition inline-flex items-center w-fit active:bg-[#8620f2]"
            >
              <i className="fas fa-download mr-3"></i> Download CV
            </button>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <div className="relative">
            <img
              src={myphoto}
              alt="Jayant Garg"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg border-4 border-accent"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
