import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/animaw-yitayal",
    },
    {
      name: "GitHub",
      Icon: FaGithub,
      link: "https://github.com/YitayalT",
    },
    {
      name: "Twitter",
      Icon: FaTwitter,
      link: "https://twitter.com/AnimawYitayal",
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t border-[#915EFF]/20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <p className="text-secondary text-sm sm:text-base md:text-[18px] text-center sm:text-left">
          © {new Date().getFullYear()} Animaw Yitayal. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6">
          {socialLinks.map(({ name, Icon, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors duration-300"
              aria-label={name}
              title={name}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;