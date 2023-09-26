import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from './ThemeContext';

function NavBar() {
  const { isLightMode, toggleMode } = useTheme();

  const [activeLink, setActiveLink] = useState();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, [])

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
    console.log(isDropdownVisible)
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };


  return (
    <nav className="bg-neutral-800 text-white p-7 font-serif">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-5xl font-bold">My Portfolio</a>
       
          <div className="hidden lg:block">
          <ul className='lg:flex space-x-10 xl:text-xl lg:block'>
            <li><Link to="/" onClick={() => handleLinkClick('/')} className={`${activeLink === '/' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Home</Link></li>
            <li><Link to="/about" onClick={() => handleLinkClick('/about')} className={`${activeLink === '/about' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>About</Link></li>
            <li><Link to="/skills" onClick={() => handleLinkClick('/skills')} className={`${activeLink === '/skills' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Skills</Link></li>
            <li><Link to="/education" onClick={() => handleLinkClick('/education')} className={`${activeLink === '/education' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Education</Link></li>
            <li><Link to="/experience" onClick={() => handleLinkClick('/experience')} className={`${activeLink === '/experience' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Experience</Link></li>
            <li><Link to="/project" onClick={() => handleLinkClick('/project')} className={`${activeLink === '/project' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className={`${activeLink === '/contact' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Contact</Link></li>
            <li><a href="https://drive.google.com/file/d/1V_IRuWO6VoNuD0VaAsyjT2AaGGcOFBKU/view?fbclid=IwAR3IZkSwnwzJ_X5bV1Z1OucxHawvRGlPWw_jh9dQoXmRdwiehOoAn6_OirI" target="_blank">Resume</a></li>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" onClick={toggleMode} />
              <div
                className={`w-11 h-6
                    ${isLightMode ? 'bg-sky-500' : 'bg-blue-950'}
                    peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                    dark:peer-focus:ring-blue-800 rounded-full peer
                    dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
                    after:content-[''] after:absolute after:top-[4px] after:left-[2px]
                    ${isLightMode ? 'after:bg-yellow-200' : 'after:bg-gray-200'}
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                    dark:border-gray-600 
                  `}
              ></div>
              <span className='text-xs mx-2'>{isLightMode ? 'Light Mode' : 'Dark Mode'}</span>
            </label>
          </ul>
          </div>
          <div className="mr-2 flex xl:hidden lg:hidden">
            <button type='button' onClick={toggleDropdown} className='inline-flex item-centers justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
              <span className='sr-only'>Open Main Menu</span>
              {isDropdownVisible === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          </div>
          {isDropdownVisible ? (
               <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               <ul className='text-white hover:bg-neutral-800 text-center hover:text-white block py-3 rounded-md text-base font-medium'>
               <li><Link to="/" onClick={() => handleLinkClick('/')} className={`${activeLink === '/' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Home</Link></li>
               <li><Link to="/about" onClick={() => handleLinkClick('/about')} className={`${activeLink === '/about' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>About</Link></li>
               <li><Link to="/skills" onClick={() => handleLinkClick('/skills')} className={`${activeLink === '/skills' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Skills</Link></li>
               <li><Link to="/education" onClick={() => handleLinkClick('/education')} className={`${activeLink === '/education' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Education</Link></li>
               <li><Link to="/experience" onClick={() => handleLinkClick('/experience')} className={`${activeLink === '/experience' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Experience</Link></li>
               <li><Link to="/project" onClick={() => handleLinkClick('/project')} className={`${activeLink === '/project' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Projects</Link></li>
               <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className={`${activeLink === '/contact' ? 'border-b-4 border-blue-400 text-zinc-300' : ''} hover:text-zinc-300 hover:border-b-4 border-blue-400`}>Contact</Link></li>
               <li><a href="https://drive.google.com/file/d/1V_IRuWO6VoNuD0VaAsyjT2AaGGcOFBKU/view?fbclid=IwAR3IZkSwnwzJ_X5bV1Z1OucxHawvRGlPWw_jh9dQoXmRdwiehOoAn6_OirI" target="_blank">Resume</a></li>
                 <label className="relative inline-flex items-center mt-5 cursor-pointer">
                   <input type="checkbox" className="sr-only peer" onClick={toggleMode} />
                   <div
                     className={`w-11 h-6
                         ${isLightMode ? 'bg-sky-500' : 'bg-blue-950'}
                         peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                         dark:peer-focus:ring-blue-800 rounded-full peer
                         dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
                         after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                         ${isLightMode ? 'after:bg-yellow-200' : 'after:bg-gray-200'}
                         after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         dark:border-gray-600 
                       `}
                   ></div>
                   <span className='text-xs mx-2'>{isLightMode ? 'Light Mode' : 'Dark Mode'}</span>
                 </label>
               </ul>
               </div>
               </div>
          ) : null}
        </div>
    </nav>

  )
}

export default NavBar;
