const educationData = [
  {
    institution: "Thapar University, Patiala",
    degree: "BTech in Electronics and Communication Engineering",
    year: "2020 - 2024",
  },
  {
    institution: "Sudesh Vatica Convent School",
    degree: "Senior Secondary Education",
    year: "2018 - 2020",
  },
  {
    institution: "St Joseph's Convent School",
    degree: "High School Education",
    year: "2006 - 2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-primary scroll-mt-10">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 px-11 md:px-16 lg:px-24">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">Education</h2>
        <div className="mt-6 relative">
          {educationData.map((edu, index) => (
            <div key={index} className="flex items-start pb-10 last:pb-0">

              <div className="w-4 h-4 md:w-5 md:h-5 mt-2 md:mt-1.5 bg-accent border-2 border-white rounded-full"></div>

              <div className="ml-6">
                <h3 className="text-white text-lg md:text-xl font-bold">{edu.institution}</h3>
                <p className="text-gray-300 text-sm md:text-base italic">{edu.degree}</p>
                <p className="text-gray-400 text-sm md:text-base font-medium mt-0.5 md:mt-1">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
