"use client"
import React, { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // To control mobile menu toggle

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = event.currentTarget.getAttribute('href')?.substring(1) || '';
    setActiveSection(section);
    
    // Smooth scroll
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the mobile menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="bg-gray-800 text-yellow-300 p-4 relative">
        {/* Logo Section */}
        <div className="absolute top-6 left-4 flex items-center space-x-2">
          <img src="bo.png" alt="Logo" className="w-16 h-16 rounded-full" />
        </div>

        {/* Main Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Twisted Threads by Farida</h1>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-yellow-300 text-2xl"
          >
            {menuOpen ? '✖' : '☰'}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`flex justify-center space-x-6 mt-4 flex-wrap md:flex-row md:space-x-8 md:mt-0 transition-all ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {['Home', 'About', 'Contact', 'Crochet', 'Knitting', 'Designs', 'Patterns'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={handleLinkClick}
                className={`hover:text-gray-300 ${
                  activeSection === section.toLowerCase() ? 'text-yellow-500 font-semibold' : ''
                }`}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Display the active section */}
      <div className="text-center mt-4">
        {activeSection && (
          <p className="text-lg font-semibold text-gray-700">
            You clicked on: {activeSection}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
