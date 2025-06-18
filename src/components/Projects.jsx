import { projects } from '../constants';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-8 md:mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-tertiary p-4 sm:p-5 rounded-xl md:rounded-2xl hover:shadow-lg hover:shadow-[#915EFF]/20 transition-all duration-300">
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[230px]">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 flex justify-end m-2 sm:m-3 gap-1 sm:gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-900 hover:bg-[#915EFF] transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FaGithub className="w-1/2 h-1/2 object-contain text-white" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-900 hover:bg-[#915EFF] transition-colors"
                    aria-label="Live project"
                  >
                    <FaLink className="w-1/2 h-1/2 object-contain text-white" />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-3 sm:mt-5">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-[24px]">{project.name}</h3>
              <p className="mt-1 sm:mt-2 text-secondary text-xs sm:text-sm md:text-[14px]">
                {project.description}
              </p>
            </div>

            <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
              {project.tags.map((tag) => (
                <p key={tag} className="text-xs sm:text-sm md:text-[14px] text-[#915EFF]">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;