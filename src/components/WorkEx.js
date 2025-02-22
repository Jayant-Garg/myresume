const WorkExperience = () => {
  return (
    <section id="workex" className="bg-accent scroll-mt-10">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 px-11 md:px-16 lg:px-24">
        <div>
          <h2 className="text-gray-800 text-lg md:text-xl lg:text-2xl font-medium md:font-semibold">Work Experience</h2>

          <div className="mt-2 md:mt-4 lg:mt-6">
            <h3 className="text-black text-2xl md:text-3xl lg:text-4xl">
              Junior Frontend Developer <span className="text-xl italic">at Techmind Softwares</span>
            </h3>
            <p className="text-primary font-medium mt-1 text-sm md:text-base">March 2024 - August 2024</p>

            <div className="bg-primary/65 border-2 md:border-4 border-black p-4 mt-4 rounded-xl">
              <p className="text-gray-100 texts">
                As a Junior Frontend Developer, I developed and optimized responsive user interfaces using HTML, CSS, JavaScript, and React.js. I worked on projects like Just Co. and Breight Group, enhancing UI/UX for better engagement and performance. I focused on building scalable and maintainable frontend architectures while ensuring performance optimization, accessibility, and cross-browser compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
