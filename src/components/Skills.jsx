import { skills } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-8 md:mb-10" style={{fontFamily: "Times New Roman, serif"}}>
        My Skills
      </h2>
      
      <div className="mb-8 md:mb-12">
        <h3 className="text-[#915EFF] text-xl md:text-2xl font-bold mb-3 md:mb-4">Cybersecurity</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.filter(skill => ['SIEM Tools', 'Threat Detection', 'Incident Response', 'Network Security', 'Firewalls', 'IDS/IPS', 'Linux'].includes(skill.name)).map(({ name, Icon }) => (
            <div key={name} className="bg-tertiary p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 flex justify-center items-center text-[#915EFF]">
                <Icon className="w-3/4 h-3/4 sm:w-full sm:h-full" />
              </div>
              <p className="text-white text-center font-medium text-sm sm:text-base">{name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8 md:mb-12">
        <h3 className="text-[#915EFF] text-xl md:text-2xl font-bold mb-3 md:mb-4">Programming & Development</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.filter(skill => ['Python', 'JavaScript', 'React', 'Node.js', 'Django'].includes(skill.name)).map(({ name, Icon }) => (
            <div key={name} className="bg-tertiary p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 flex justify-center items-center text-[#915EFF]">
                <Icon className="w-3/4 h-3/4 sm:w-full sm:h-full" />
              </div>
              <p className="text-white text-center font-medium text-sm sm:text-base">{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 md:mb-12">
        <h3 className="text-[#915EFF] text-xl md:text-2xl font-bold mb-3 md:mb-4">DevOps & Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.filter(skill => ['AWS', 'Docker', 'Git', 'GitHub'].includes(skill.name)).map(({ name, Icon }) => (
            <div key={name} className="bg-tertiary p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 flex justify-center items-center text-[#915EFF]">
                <Icon className="w-3/4 h-3/4 sm:w-full sm:h-full" />
              </div>
              <p className="text-white text-center font-medium text-sm sm:text-base">{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[#915EFF] text-xl md:text-2xl font-bold mb-3 md:mb-4">Frontend & AI Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.filter(skill => ['HTML', 'TailwindCSS', 'REST API', 'Copilot', 'Cursor AI'].includes(skill.name)).map(({ name, Icon }) => (
            <div key={name} className="bg-tertiary p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 flex justify-center items-center text-[#915EFF]">
                <Icon className="w-3/4 h-3/4 sm:w-full sm:h-full" />
              </div>
              <p className="text-white text-center font-medium text-sm sm:text-base">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;