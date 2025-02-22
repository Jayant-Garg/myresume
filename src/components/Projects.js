import hh from '../assests/images/heirloomhoney.png'
import inbesta from '../assests/images/inbesta.png'
import breight from '../assests/images/breight.png'

const projects = [
  {
    id: 1,
    title: "Honey Heirloom",
    description: "website....",
    image: hh,
    link: "https://heirloomhoney.co/"
  },
  {
    id: 2,
    title: "Inbesta",
    description: "Website...",
    image: inbesta,
    link: "https://jayant-garg.github.io/Inbesta"
  },
  {
    id: 3,
    title: "Breight",
    description: "Website... description",
    image: breight,
    link: "https://www.breightgroup.com/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black scroll-mt-10">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 px-11 md:px-16 lg:px-24">
        <h2 className="text-accent texts font-semibold uppercase">Projects</h2>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold mt-2">
          Check out a few of my personal and team projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 md:mt-10 lg:mt-12">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center w-auto">
              <div className="w-1/2 md:w-full h-[350px] md:h-[400px] lg:h-[450px] border-4 border-accent rounded-xl overflow-hidden transition transform hover:scale-105">
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-left-top"
                  />
                </a>
              </div>

              <h3 className="text-white text-base md:text-lg lg:text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400 texts">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
