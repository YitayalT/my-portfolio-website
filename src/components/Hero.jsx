import { FaShieldAlt, FaCode, FaUserShield } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto font-serif">
      <div className="pt-16 md:pt-24 lg:pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-start gap-2 sm:gap-4 lg:gap-5">
        {/* Vertical line decoration */}
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 lg:mt-5">
          <div className="w-2 h-2 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-24 sm:h-32 md:h-48 lg:h-80 violet-gradient" />
        </div>

        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-white font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-snug sm:leading-tight md:leading-normal lg:leading-[98px]">
            Hi, I'm <span className="text-[#915EFF]">Animaw Yitayal</span>
          </h1>
          
          {/* Info items */}
          <div className="mt-3 sm:mt-5 lg:mt-6 flex flex-col gap-1 sm:gap-3 lg:gap-4" style={{fontFamily: "Times New Roman, serif"}}>
            <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
              <FaShieldAlt className="text-[#915EFF] text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0" />
              <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-[22px]">
                Cyber Security Analyst at Wegagen Bank since March 2023
              </p>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
              <FaCode className="text-[#915EFF] text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0" />
              <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-[22px]">
                BSc in Software Engineering from Bahir Dar University
              </p>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
              <FaUserShield className="text-[#915EFF] text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0" />
              <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-[22px]">
                Web Application Developer & Penetration Tester
              </p>
            </div>
          </div>

          {/* Buttons - responsive layout */}
          <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col md:flex-row gap-2 sm:gap-3 lg:gap-4">
            <a 
              href="#contact" 
              className="bg-[#915EFF] py-2 px-6 sm:py-3 sm:px-8 rounded-lg lg:rounded-xl text-white font-bold hover:bg-[#7d4de0] transition-colors text-sm sm:text-base lg:text-lg text-center"
              style={{fontFamily: "Times New Roman, serif"}}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border border-[#915EFF] py-2 px-6 sm:py-3 sm:px-8 rounded-lg lg:rounded-xl text-white font-bold hover:bg-[#915EFF]/10 transition-colors text-sm sm:text-base lg:text-lg text-center"
              style={{fontFamily: "Times New Roman, serif"}}
            >
              My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border sm:border-2 lg:border-4 border-[#915EFF] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;