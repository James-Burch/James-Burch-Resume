import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      );
};

export default Navbar;