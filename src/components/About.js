const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row w-full h-auto md:h-[50vh]">
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-start md:items-end py-10 px-11">
        <div className="max-w-6xl md:max-w-6xl-half md:px-12 lg:px-24">
          <h2 className="title">About Me</h2>
          <p className="texts">
            I'm a frontend developer and Figma designer passionate about creating visually appealing and user-friendly web experiences. I specialize in crafting responsive UIs with React and bringing ideas to life through intuitive design. Always eager to learn and explore new technologies!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-accent text-black flex flex-col justify-center items-start md:items-start py-10 px-11">
        <div className="max-w-6xl md:max-w-6xl-half md:px-12 lg:px-24">
          <h2 className="title">Basic Information</h2>
          <ul className="texts space-y-2">
            <li><strong>AGE:</strong> 22</li>
            <li><strong>EMAIL:</strong> garg.jayant777@gmail.com</li>
            <li><strong>PHONE:</strong> +91 94655-58207</li>
            <li><strong>LANGUAGE:</strong> English, Hindi, French, Punjabi</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
