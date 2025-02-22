import { useState } from "react";

const testimonials = [
  {
    text: "Jayant is an exceptional frontend developer with a strong understanding of modern technologies. His attention to detail, responsiveness, and ability to create visually appealing and user-friendly interfaces make him stand out. He consistently delivers clean, scalable code while optimizing performance. His problem-solving skills and proactive approach ensure smooth project execution. Jayant is a great team player, always open to feedback and collaboration, making him an invaluable asset to any development team.",
    name: "Aditya Sinha",
    title: "Head Dev Techmind"
  },
  {
    text: "Jayant's expertise in frontend development is evident in the high-quality user interfaces he creates. His ability to transform complex designs into seamless, responsive experiences is impressive. He prioritizes performance optimization and scalability, ensuring long-term maintainability. Jayant is also highly collaborative, effectively communicating with designers and backend developers to align project goals. His dedication, adaptability, and technical proficiency make him a reliable and talented developer who consistently delivers excellent results.",
    name: "Rajat Kapoor",
    title: "CEO"
  },
  {
    text: "Jayant is a highly skilled frontend developer with a passion for crafting intuitive and engaging user experiences. His proficiency in modern frameworks, coupled with his keen eye for design, ensures top-notch UI implementations. He writes efficient, maintainable code while focusing on accessibility and responsiveness. Beyond his technical skills, Jayant is a proactive problem-solver who thrives in team environments. His professionalism, creativity, and dedication make him a valuable contributor to any frontend project.",
    name: "Vaishali Sahni",
    title: "Manager"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="bg-black text-white ">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 px-11 md:px-16 lg:px-24">
        <div className="text-start relative">
          <h2 className="text-accent text-sm font-semibold tracking-widest mb-2 md:mb-4">TESTIMONIALS</h2>
          <p className="text-gray-400 texts leading-relaxed">{testimonials[index].text}</p>
          <div className="mt-3 md:mt-6">
            <p className="font-bold text-sm md:text-base">{testimonials[index].name}</p>
            <p className="text-gray-500 text-xs md:text-sm">{testimonials[index].title}</p>
          </div>
          <div className="absolute right-0 bottom-0 flex gap-3 md:gap-4">
            <button onClick={handlePrev} className="w-6 md:w-10 h-6 md:h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-800">
              <i className="fas fa-arrow-left text-white"></i>
            </button>
            <button onClick={handleNext} className="w-6 md:w-10 h-6 md:h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-800">
              <i className="fas fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
