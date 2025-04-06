import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";
import { navItems } from '../Constants';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  // Close drawer if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileDrawerOpen(false);
      }
    };

    if (mobileDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} className='h-10 w-10 mr-2' alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li className="text-lg" key={index}>
                <NavLink
  to={item.href}
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-300 ease-in-out 
    ${isActive ? "text-orange-700" : "text-white"} 
    border-b border-gray-100 hover:bg-gray-50 
    lg:hover:bg-transparent lg:border-0 lg:p-0 
    hover:text-orange-700 
    transition-all transform hover:scale-120 inline-block`
  }
>
  {item.label}
</NavLink>

              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className='py-2 px-3 border rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600'>
              Sign In
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end" ref={buttonRef}>
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            ref={drawerRef}
            className="fixed right-0 z-10 bg-black/90  border border-neutral-700/80  w p-12 flex flex-col justify-center items-center lg:hidden text-white text-sm"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-2'>
                  <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-300 ease-in-out 
    ${isActive ? "text-orange-700" : "text-white"}  
    lg:hover:bg-transparent lg:border-0 lg:p-0 
    hover:text-orange-700 
    transition-all transform hover:scale-120 inline-block`
                      }
                    >
                      {item.label}
                      </NavLink>
                </li>
              ))}
            </ul>
            <div className="justify-center space-x-6 items-center p-4">
              <a
                href="#"
                onClick={closeNavbar}
                className='py-2 px-3 border rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600 text-white'
              >
                Sign In
              </a>
              <a
                href="#"
                onClick={closeNavbar}
                className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
