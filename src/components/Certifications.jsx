import { FaShieldAlt, FaNetworkWired, FaChartLine, FaCode } from 'react-icons/fa';
import { SiGoogle, SiCisco } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Certifications = () => {
  const certifications = [
    {
      title: "Google Professional Cybersecurity Certificate",
      issuer: "Coursera",
      icon: <SiGoogle className="text-red-500 text-2xl sm:text-3xl" />,
      categoryIcon: <FaShieldAlt className="text-[#915EFF] text-lg sm:text-xl" />,
      year: "2023",
      credentialLink: "https://www.credly.com/earner/earned/badge/84d3ac74-3399-4e70-9bc1-6216115b2a68",
    },
    {
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      icon: <MdSecurity className="text-blue-500 text-2xl sm:text-3xl" />,
      categoryIcon: <FaShieldAlt className="text-[#915EFF] text-lg sm:text-xl" />,
      year: "2023",
      credentialLink: "https://www.credly.com/earner/earned/badge/22423ebd-82f4-4d96-9193-d0f71bb933c9",
    },
    {
      title: "Cisco CyberOps Associate",
      issuer: "Cisco",
      icon: <SiCisco className="text-blue-600 text-2xl sm:text-3xl" />,
      categoryIcon: <FaNetworkWired className="text-[#915EFF] text-lg sm:text-xl" />,
      year: "2022",
      credentialLink: "https://www.credly.com/earner/earned/share/390d868d-5408-4bf5-8452-ca9f3c6333b3?provider=url",
    },
    {
      title: "Google Digital Marketing Professional Certificate",
      issuer: "Coursera",
      icon: <SiGoogle className="text-red-500 text-2xl sm:text-3xl" />,
      categoryIcon: <FaChartLine className="text-[#915EFF] text-lg sm:text-xl" />,
      year: "2021",
      credentialLink: "https://www.credly.com/earner/earned/badge/446a08c2-6c54-41bc-87f7-25af1dab8e19",
    },
    {
      title: "Fullstack Web Development Certificate",
      issuer: "Bahir Dar University",
      icon: <FaCode className="text-green-500 text-2xl sm:text-3xl" />,
      categoryIcon: <FaCode className="text-[#915EFF] text-lg sm:text-xl" />,
      year: "2020",
      credentialLink: "https://www.credly.com/earner/earned/share/390d868d-5408-4bf5-8452-ca9f3c6333b3?provider=url",
    },
  ];

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-8 md:mb-12" style={{fontFamily: "Times New Roman, serif"}}>
        My Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-tertiary p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-[#915EFF]/30 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-gray-900 group-hover:bg-[#915EFF]/20 transition-colors">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-white text-lg sm:text-xl font-bold" style={{fontFamily: "Times New Roman, serif"}}>
                  {cert.title}
                </h3>
                <p className="text-secondary text-sm sm:text-base">{cert.issuer}</p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-2">
                {cert.categoryIcon}
                <span className="text-secondary text-xs sm:text-sm">{cert.year}</span>
              </div>
              <a 
                href={cert.credentialLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#915EFF] text-xs sm:text-sm hover:underline flex items-center gap-1"
              >
                Verify Credential
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;