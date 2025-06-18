const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-white font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl">
            About Me
          </h2>
          <p className="text-secondary mt-4 text-base sm:text-lg md:text-[17px] leading-relaxed md:leading-[30px]">
            "I'm a software engineer and cybersecurity analyst with a passion for building secure, high-performance systems. I thrive on solving complex technical challenges—whether it's developing efficient code, hardening applications against threats, or analyzing vulnerabilities to prevent breaches. My expertise spans full-stack development, secure coding practices, and defensive security strategies, allowing me to create solutions that are both innovative and resilient. With a hacker's curiosity and an engineer's precision, I ensure that security isn't an afterthought but a foundation."
          </p>
        </div>

        {/* Graphic Element */}
        <div className="lg:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] relative">
            <div className="rounded-full border border-[#915EFF] absolute top-0 left-0 w-full h-full animate-ping" />
            <div className="rounded-full border border-[#915EFF] absolute top-0 left-0 w-full h-full" />
            <div className="rounded-full border border-[#915EFF] absolute top-0 left-0 w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;