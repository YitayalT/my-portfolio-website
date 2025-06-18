import { useState } from 'react';
import { navLinks } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import animawImage from '../assets/image/mine.svg'; // Adjust the path as necessary
const Header = () => {
  const [active, setActive] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (title) => {
    setActive(title);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed w-full z-50 bg-primary px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo with photo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={animawImage} 
              alt="Animaw Yitayal"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#915EFF] object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-primary"></div>
          </div>
          <p className="text-white text-base sm:text-lg font-bold hidden sm:block">
            Animaw <span className="text-[#915EFF]">Yitayal</span>
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex text-secondary gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm sm:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-lg font-medium cursor-pointer transition-colors px-4 py-2 w-full text-center`}
                onClick={() => handleNavClick(link.title)}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;