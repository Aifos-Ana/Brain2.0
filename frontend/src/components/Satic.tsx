import React from 'react';

const Navbar: React.FC = () => {
  return (
     <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            Brain2.0
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </a>
            <a href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
              Login/Register
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
            {/* Add hamburger menu here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Brain2.0. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
